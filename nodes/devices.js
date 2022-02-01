const mihome = require('node-mihome');

module.exports = function(RED) {
    function MIIOdevicesNode(n) {
        RED.nodes.createNode(this,n);
        let node = this;

        node.name = n.name;
        node.room = n.room;
        node.MI_id = n.MI_id;
        node.model = n.model;
        node.address = n.address;
        node.token = n.token;
        
        node.isMIOT = n.isMIOT;
        node.username = n.username;
        node.password = n.password
        
        node.isPolling = n.isPolling;
        node.pollinginterval = n.pollinginterval;
        
        // 1) Initialization of MiLocal Protocol
        mihome.miioProtocol.init();

        // 2) Logging in to MiCloud if needed
        MiotConnect ();
        async function MiotConnect () {
            MIOT_login = node.isMIOT;
            if (MIOT_login == true) {
                await mihome.miCloudProtocol.login(node.username, node.password);
            } else {return};
        };

        // 3) Setting up the device
        const device = mihome.device({
            id: node.MI_id,
            model: node.model,
            address: node.address,
            token: node.token,
            refresh: 5000 // miio-device option, device properties refresh interval in ms
        });

        // 4) Defining auto-polling variables
        Poll_or_Not = node.isPolling;
        if (node.pollinginterval == null) {Polling_Interval = 60} 
        else {Polling_Interval = node.pollinginterval};

        // 5) Main Function - Polling the device
        ConnDevice ();
        async function ConnDevice () {
            try {
                // 5.1) connect to device and poll for properties 
                await device.on('properties', (data) => {
                    node.Polling_succeeded = true;
                    node.Polling_data = data;                     
                });
                await device.init();
                device.destroy();   
            }
            catch (exception) {
                // 5.2) catching errors from MIHOME Protocol
                node.Polling_succeeded = false;
                node.Polling_error = `Mihome Exception. IP: ${node.address} -> ${exception.message}`;
            }
        };

        // 6) Auto-polling cycle
        setTimeout(function run() {    
            // 6.1) stop auto-polling cycle
            if (Poll_or_Not == false) {return};

            // 5.3) continue auto-polling cycle
            if (Poll_or_Not == true && Polling_Interval > 0) {
                // 5.3.1) re-define auto-polling interval
                if (node.pollinginterval == null) {New_Interval = 60}
                else {New_Interval = node.pollinginterval};

                // 5.3.2) check for changing the Interval, if changed then stop previous cycle
                if (New_Interval == Polling_Interval) {
                    ConnDevice ();
                    setTimeout(run, Polling_Interval * 1000);
                }; 
            };
        },  Polling_Interval * 1000);
    };

    RED.nodes.registerType("MIIOdevices",MIIOdevicesNode);
}