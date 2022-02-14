const MIIOpropsVocabulary = require('../lib/propsLib.js');

module.exports = function(RED) {
    function MIIOgetdataNode(config) {
        RED.nodes.createNode(this,config);
        
        var node = this;
        node.config = config;
        node.MIdevice = RED.nodes.getNode(config.devices);
        
        node.status({}); //cleaning status
        var msg = {};

        if (node.MIdevice) {                
            // 1) Defining auto-polling variables
            Poll_or_Not = node.MIdevice.isPolling;
            Polling_Interval = node.MIdevice.pollinginterval;
            if (Poll_or_Not == false) {msg.polling = "OFF"};
            if (Poll_or_Not == true) {msg.polling = "ON. Every " + Polling_Interval + " sec"};

            // 2) Defining outgoing outgoing msg structure
            msg.name = node.MIdevice.name + " - " + node.MIdevice.room;
            msg.address = node.MIdevice.address;
            msg.model = node.MIdevice.model;

            // 3) Main Functions - Sending outgoing msg on start, on change, on error
            SendOnStart ();
            SendOnChange ();
            SendOnError ();
        };

        // functions in USE
        // A) send msg on Initialization of the device
        function SendOnStart () {
            node.MIdevice.on('onInit', (data) => {
                node.status({fill:"green",shape:"dot",text:"Connection: OK"});
                
                DataAsIS = data;
                ConvertObj();
                msg.payload = DataToBe;
                node.send(msg);

                setTimeout(() => {
                    node.status({});
                }, 2000);
            });
        };
        // B) send msg on Change in properties' value
        function SendOnChange () {
            node.MIdevice.on('onChange', (data) => {
                node.status({fill:"green",shape:"dot",text:"State: changed"});
                
                DataAsIS = data;
                ConvertObj ();
                msg.payload = DataToBe;
                node.send(msg);

                setTimeout(() => {
                    node.status({});
                }, 2000);
            });
        };
        // C) send msg on Errors accured during polling
        function SendOnError () {
            node.MIdevice.on('onError', (PollError) => {
                node.status({fill:"red",shape:"ring",text:"Connection: error"});
                node.warn(PollError);
            });
        };
        // D) conversion JSON with properties to friendly names as per Vocabulary
        function ConvertObj () {
            DataToBe = {};
            if (node.config.prop_type == "Friendly") {
                var FriendlyKeys = MIIOpropsVocabulary.properties_list(node.MIdevice.model);
                let mapped = Object.keys(DataAsIS).map(OldKey => {
                    let NewKey = FriendlyKeys[OldKey];
                    DataToBe[NewKey] = DataAsIS[OldKey];
                    return DataToBe;
                });
            } else {
                DataToBe = DataAsIS;
            };
        };
    };

    RED.nodes.registerType("MIIOgetdata",MIIOgetdataNode);
}