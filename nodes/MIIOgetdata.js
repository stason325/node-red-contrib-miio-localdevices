const mihome = require('node-mihome');

module.exports = function(RED) {
    function MIIOgetdataNode(config) {
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
                // 2.1) defining Poll_or_Not and Polling_Interval for setInterval cycle
                Poll_or_Not = node.config.autopoll;
                if (node.MIdevice.pollinginterval == null) {
                    Polling_Interval = 60
                } else {
                    Polling_Interval = node.MIdevice.pollinginterval
                };

                // 2.2) defining outgoing msg structure
                msg.name = node.MIdevice.name + " - " + node.MIdevice.room;
                msg.address = node.MIdevice.address;
                msg.model = node.MIdevice.model;
                if (Poll_or_Not == false) {msg.polling = "OFF"};
                if (Poll_or_Not == true) {msg.polling = "ON. Every " + Polling_Interval + " sec"};

                // 2.3) defining device properties for MIIO
                const device = mihome.device({
                    id: node.MIdevice.MI_id,
                    model: node.MIdevice.model,
                    address: node.MIdevice.address,
                    token: node.MIdevice.token,
                    refresh: 5000 // miio-device option, device properties refresh interval in ms
                });
                
                // 2.4) main function
                ConnDevice ();
                async function ConnDevice () {
                    try {
                        // 2.4.1) connect to device and poll for properties 
                        await device.on('properties', (data) => {
                            node.status({fill:"green",shape:"dot",text:"Connection: OK"});
                            msg.payload = data;                     
                        })
                        await device.init();
                        device.destroy();

                        // 2.4.2) sending JSON with device properties
						node.send(msg);
                        
                        // 2.4.3) cleaning status after 2 sec timeout
                        setTimeout(() => {
                            node.status({});
                        }, 2000);
                        return;
                    }
                    catch (exception) {
                        // 2.4.4) catching errors from MIIO Protocol
                        node.warn(`Mihome Exception. IP: ${node.MIdevice.address} -> ${exception.message}`);
                        node.status({fill:"red",shape:"ring",text:"Connection: error"});

                        // 2.4.5) cleaning error status after 2 sec timeout
                        setTimeout(() => {
                            node.status({});
                        }, 2000);
                        return;
                    }
                };
                
                // 2.5) starting or not auto-polling cycle
                setTimeout(function run() {
                    if (Poll_or_Not == false) {return};
                    if (Poll_or_Not == true && Polling_Interval > 0) {
                        ConnDevice ();
                        setTimeout(run, Polling_Interval * 1000);
                    };
                },  Polling_Interval * 1000);                  
            };
        })      
    }

    RED.nodes.registerType("MIIOgetdata",MIIOgetdataNode);
}