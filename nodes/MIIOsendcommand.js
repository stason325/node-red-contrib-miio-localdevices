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
            
            // initialization of local MIIO Protocol
            mihome.miioProtocol.init();

            if (node.MIdevice) {                
                msg.name = node.MIdevice.name + " - " + node.MIdevice.room;
                msg.address = node.MIdevice.address;
                msg.model = node.MIdevice.model;

                const device = mihome.device({
                    id: node.MIdevice.MI_id,
                    model: node.MIdevice.model,
                    address: node.MIdevice.address,
                    token: node.MIdevice.token,
                    refresh: 5000 // miio-device option, device properties refresh interval in ms
                });

                async function ConnDevice () {                   
                    try {
                        // case for Power-OFF... unexplainably this command triggers 3 times
                        if (node.config.command == "Power" && msg.payload == false) {
                            // transfer command from input into device
                            device.miioCall('Set_OnOff',[0],{refresh: false, retries: 0});
                            
                            setTimeout(() => {
                                node.status({fill:"green",shape:"dot",text:"Command: sent"});
                                msg.payload = node.config.command + "(" + msg.payload + ")";
                                node.send(msg);
                            }, 1000);
                        }
                        else {
                            // transfer command from input into device
                            await eval("device.set" + node.config.command + "(" + msg.payload + ")");
                            device.destroy();
                        
                            node.status({fill:"green",shape:"dot",text:"Command: sent"});
                            msg.payload = node.config.command + "(" + msg.payload + ")";
                            node.send(msg);
                        }

                        setTimeout(() => {
                            node.status({}); //cleaning status
                        }, 5000);
                    }
                    catch(exception) {
                        // catching errors from MIIO Protocol
                        node.warn(`Mihome Exception. IP: ${config.address} -> ${exception.message}`);
                        node.status({fill:"red",shape:"ring",text:"Command: error"});
                        return;
                    }                           
                }
                ConnDevice ()  
            }
        })       
    }

    RED.nodes.registerType("MIIOsendcommand",MIIOsendcommandNode);
}