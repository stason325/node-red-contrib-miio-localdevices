module.exports = function(RED) {
    function MIIOgetdataNode(config) {
        RED.nodes.createNode(this,config);
        
        var node = this;
        node.config = config;
        node.MIdevice = RED.nodes.getNode(config.devices);
        
        node.status({}); //cleaning status

        node.on('input', function(msg) {
            var msg = {};

            if (node.MIdevice) {                
                // 1) Defining auto-polling variables
                Poll_or_Not = node.MIdevice.isPolling;
                Polling_Interval = node.MIdevice.pollinginterval;
            
                // 2) Defining outgoing outgoing msg structure
                msg.name = node.MIdevice.name + " - " + node.MIdevice.room;
                msg.address = node.MIdevice.address;
                msg.model = node.MIdevice.model;
             
                // 3) Main Function - Sending outgoing msg
                SendMsg ();
                function SendMsg() {                    
                    if (Poll_or_Not == false) {msg.polling = "OFF"};
                    if (Poll_or_Not == true) {msg.polling = "ON. Every " + Polling_Interval + " sec"};
                    
                    Polling_succeeded = node.MIdevice.Polling_succeeded;
                    Polling_data = node.MIdevice.Polling_data;

                    if (Polling_succeeded == true) {
                        node.status({fill:"green",shape:"dot",text:"Connection: OK"});
                        msg.payload = Polling_data;
                        node.send(msg);
                    } else if (Polling_succeeded == false) {
                        node.status({fill:"red",shape:"ring",text:"Connection: error"});
                        node.warn(Polling_error);
                    };

                    setTimeout(() => {
                        node.status({});
                    }, 2000);
                    return;
                };
                
                // 4) Starting or not auto-polling cycle
                setTimeout(function run() {
                    // 4.1) stop cycle
                    if (Poll_or_Not == false) {return};
                    
                    // 4.2) continue cycle
                    if (Poll_or_Not == true && Polling_Interval > 0) {
                        // 4.2.1) re-define auto-polling interval
                        New_Interval = node.MIdevice.pollinginterval;
                        
                        // 4.2.2) check for changing the Interval, if changed then stop previous cycle
                        if (New_Interval == Polling_Interval) {
                            SendMsg ();
                            setTimeout(run, Polling_Interval * 1000);
                        };
                    };
                },  Polling_Interval * 1000);                    
            };
        });      
    };

    RED.nodes.registerType("MIIOgetdata",MIIOgetdataNode);
}