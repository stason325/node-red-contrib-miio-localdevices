const Device = require('../device-miio');

module.exports = class extends Device {

    static model = 'philips.light.bulb';
    static name = 'Philips Light Bulb';
    static image = 'http://static.home.mi.com/app/image/get/file/developer_1522407953modw7wox.png';

    constructor(opts) {
        super(opts);

        this._propertiesToMonitor = [
            "power",
            "bright",
            "cct",
            "snm",
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

    setColorTemperature(v) { // temperature: 3000 - 5700
        if (v >= 3000 && v <= 5700) {
            return this.miioCall('set_cct', [v]);
        }
        return Promise.reject(new Error(`Invalid target color temperature: ${v}`));
    }

    setScene(v) { // scenes: 1 - lighting, 2 - TV, 3 - Wormth, 4 - Night Light
        if (v >= 1 && v <= 4) {
            return this.miioCall('apply_fixed_scene', [v]);
        }
        return Promise.reject(new Error(`Invalid fixed scene: ${v}`));
    }

};