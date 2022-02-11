const mihome = require('node-mihome');

module.exports = function(RED) {
    function MIIOsendcommandNode(config) {
        RED.nodes.createNode(this,config);
        
        var node = this;
        node.config = config;
        node.MIdevice = RED.nodes.getNode(config.devices);

        node.status({}); //cleaning status
        
        node.on('input', function(msg) {
            node.status({fill:"gray",shape:"dot",text:"Connecting..."});
            
            // 1) initialization of local MIIO Protocol
            mihome.miioProtocol.init();

            // 2) working with current device
            if (node.MIdevice) {                
                // 2.1) defining outgoing msg structure
                msg.name = node.MIdevice.name + " - " + node.MIdevice.room;
                msg.address = node.MIdevice.address;
                msg.model = node.MIdevice.model;

                // 2.2) defining device properties for MIIO
                const device = mihome.device({
                    id: node.MIdevice.MI_id,
                    model: node.MIdevice.model,
                    address: node.MIdevice.address,
                    token: node.MIdevice.token,
                    //refresh: 5000 // miio-device option, device properties refresh interval in ms
                });

                // 2.3) main function
                ConnDevice ();
                async function ConnDevice () {                   
                    try {
                        // 2.3.1) case for Power-OFF command for mjjsq... unexplainably this command triggers 3 times
                        if (node.MIdevice.model == "deerma.humidifier.mjjsq" && node.config.command == "Power" && msg.payload == false) {
                            // 2.3.1.1) transfer command from input into device (not AWAIT)
                            device.miioCall('Set_OnOff',[0],{refresh: false, retries: 0});
                            
                            // 2.3.2.2) sending msg and status after 1 sec time
                            setTimeout(() => {
                                node.status({fill:"green",shape:"dot",text:"Command: sent"});
                                msg.payload = {[node.config.command]: msg.payload};
                                node.send(msg);
                            }, 1000);
                        }
                        // 2.3.2) all other commands ... to be tested
                        else {
                            // 2.3.2.1) transfer command from input into device (in AWAIT mode)
                            if (device._miotSpecType) {
                                await device.init();
                            };
                            await eval("device.set" + node.config.command + "(" + msg.payload + ")");
                            device.destroy();
                            
                            // 2.3.2.2) sending msg and status after device answer
                            node.status({fill:"green",shape:"dot",text:"Command: sent"});
                            msg.payload = {[node.config.command]: msg.payload};

                            node.send(msg);
                        }

                        // 2.3.3) cleaning status after 5 sec timeout
                        setTimeout(() => {
                            node.status({});
                        }, 5000);
                    }
                    catch(exception) {
                        // 2.3.4) catching errors from MIIO Protocol
                        node.warn(`Mihome Exception. IP: ${node.MIdevice.address} -> ${exception.message}`);
                        node.status({fill:"red",shape:"ring",text:"Command: error"});
                        return;
                    }                           
                }; 
            }
        })       
    }

    RED.nodes.registerType("MIIOsendcommand",MIIOsendcommandNode);
}