const MIIOcommandsVocabulary = require('../lib/commandsLib.js');
//const MIIOdevtypesVocabulary = require('../lib/devtypesLib.js');
const EventEmitter = require('events');
const mihome = require('node-mihome');

module.exports = function(RED) {
    function MIIOdevicesNode(n) {
        RED.nodes.createNode(this,n);
        let node = this;

        node.name = n.name;
        node.room = n.room;
        node.MI_id = n.MI_id;
        node.device_type = n.device_type;
        node.model = n.model;

        node.address = n.address;
        node.token = n.token;
        
        node.isMIOT = n.isMIOT;
        node.username = n.username;
        node.password = n.password
        
        node.isPolling = n.isPolling;
        node.pollinginterval = n.pollinginterval;
        
        // 0) Transfering data from runtime to filter commands CONFIG-node and commands in SEND-node
        var NODE_PATH = '/node-red-contrib-miio-localdevices/nodes/';

        // a) Humidifiers
        /*RED.httpAdmin.get('getHumids', function (req, res) {
            var ImportedHumids = MIIOdevtypesVocabulary.humid_list();
            res.json(ImportedHumids);
        });
        // b) Air Purifiers
        RED.httpAdmin.get(NODE_PATH + 'getPurifs', function (req, res) {
            var ImportedPurifs = MIIOdevtypesVocabulary.purif_list();
            res.json(ImportedPurifs);
        });
        // c) Heatres and Fans
        RED.httpAdmin.get(NODE_PATH + 'getHeatfans', function (req, res) {
            var ImportedHeatAndFans = MIIOdevtypesVocabulary.heatfan_list();
            res.json(ImportedHeatAndFans);
        });
        // d) Vaccum Cleaners
        RED.httpAdmin.get(NODE_PATH + 'getVaccums', function (req, res) {
            var ImportedVacuums = MIIOdevtypesVocabulary.vacuum_list();
            res.json(ImportedVacuums);
        });
        // e) Lights
        RED.httpAdmin.get(NODE_PATH + 'getLights', function (req, res) {
            var ImportedLights = MIIOdevtypesVocabulary.light_list();
            res.json(ImportedLights);
        });*/
        
        // f) Commands by device in SEND-node
        RED.httpAdmin.get(NODE_PATH + 'getCommands/' + node.id, function (req, res) {
            var ModelForCommand = node.model;
            var ImportedJSON = MIIOcommandsVocabulary.command_list(ModelForCommand);
            res.json(ImportedJSON);
        });

        // 1) Initialization of MI Protocols
        MiioConnect ();
        MiotConnect ();

        // 2) Setting up the device
        const device = mihome.device({
            id: node.MI_id,
            model: node.model,
            address: node.address,
            token: node.token,
            //refresh: 5000 // miio-device option, device properties refresh interval in ms
        });

        // 3) Defining auto-polling variables
        Poll_or_Not = node.isPolling;
        if (node.pollinginterval == null) {Polling_Interval = 30} 
        else {Polling_Interval = node.pollinginterval};

        // 4) Tiding Up after device is destroyed
        node.on('close', () => OnClose());

        // 5) Main Function - Polling the device
        OldData = {};
        ConnDevice().then((data) => {
            data = OldData;    
            node.emit('onInit', data);
            });
            
        // 6) Auto-polling cycle
        setTimeout(function run() {    
            // 6.1) stop auto-polling cycle
            if (Poll_or_Not == false) {return};
            // 6.2) continue auto-polling cycle
            if (Poll_or_Not == true && Polling_Interval > 0) {
                // 6.2.1) re-define auto-polling interval
                if (node.pollinginterval == null) {New_Interval = 30}
                else {New_Interval = node.pollinginterval};
                // 6.2.2) check for changing the Interval, if changed then stop previous cycle
                if (New_Interval == Polling_Interval) {
                    ConnDevice ();
                    setTimeout(run, Polling_Interval * 1000);
                }; 
            };
        },  Polling_Interval * 1000);

        // functions in USE:
        // A) Initializing MiLocal
        function MiioConnect () {
            mihome.miioProtocol.init();
        };
        // B) Logging in to MiCloud if needed
        async function MiotConnect () {
            MIOT_login = node.isMIOT;
            if (MIOT_login == true) {
                await mihome.miCloudProtocol.login(node.username, node.password);
            } else {return};
        };
        // C) OnClose Destroying
        function OnClose () {
            device.destroy();
        };
        // D) Main Function - Polling the device
        async function ConnDevice () {
            try {
                // D.1) connect to device and poll for properties 
                await device.on('properties', (data) => {
                    NewData = data;
                    // D.1.1) check for any changes in properties
                    for (var key in NewData) {
                        var value = NewData[key];
                        if (key in OldData) {
                            if (OldData[key] !== value) {
                                node.emit('onChange', data);
                                OldData = data;
                            }
                        }
                    };
                    // D.1.2) case with no changes in properties
                    OldData = data;                   
                });
                await device.init();
                device.destroy();
            }
            catch (exception) {
                // D.2) catching errors from MIHOME Protocol
                PollError = `Mihome Exception. IP: ${node.address} -> ${exception.message}`;
                node.emit('onError', PollError);
            }
        };
    };   
    RED.nodes.registerType("MIIOdevices",MIIOdevicesNode);
}