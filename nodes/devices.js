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
    }
    
    RED.nodes.registerType("MIIOdevices",MIIOdevicesNode);
}