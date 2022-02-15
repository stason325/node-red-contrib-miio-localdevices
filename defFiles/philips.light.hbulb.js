const Device = require('../device-miio');

module.exports = class extends Device {

    static model = 'philips.light.hbulb';
    static name = 'Philips Wi-Fi bulb E27 White';
    static image = 'http://static.home.mi.com/app/image/get/file/developer_1522407953modw7wox.png';

    constructor(opts) {
        super(opts);

        this._propertiesToMonitor = [
            "power",
            "bri",
            "dv",
        ];
    }

    setPower(v) { // true/false
        return this.miioCall('set_power', [v ? 'on' : 'off']);
    }

    setBrightness(v) { // percentages: 1 - 100 
        if (v >= 1 && v <= 100) {
            return this.miioCall('set_bright', [v]);
        }
        return Promise.reject(new Error(`Invalid target brightness: ${v}`));
    }

};