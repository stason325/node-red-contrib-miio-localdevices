const mihome = require('node-mihome');

module.exports = function(RED) {
    function MIIOgetdataNode(config) {
        RED.nodes.createNode(this,config);
        
        var node = this;
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
                        // connect to device and poll for properties 
                        await device.on('properties', (data) => {
                            msg.payload = data;
						    node.send(msg);
                            node.status({fill:"green",shape:"dot",text:"Connection: OK"});                      
                        })
                        await device.init();
                        device.destroy();
                    }
                    catch (exception) {
                        // catching errors from MIIO Protocol
                        node.warn(`Mihome Exception. IP: ${config.address} -> ${exception.message}`);
                        node.status({fill:"red",shape:"ring",text:"Connection: error"});
                        return;
                    }
                }
                ConnDevice ()
            } 
        })       
    }

    RED.nodes.registerType("MIIOgetdata",MIIOgetdataNode);
}