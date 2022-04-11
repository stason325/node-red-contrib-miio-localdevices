const Device = require('../device-miio');

module.exports = class extends Device {

    static model = 'philips.light.downlight';
    static name = 'Philips Zhirui Downlight';
    static image = 'https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_163910713663097kIz1us.png';

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

    setColorTemperature(v) { // percentages: 1 - 100
        if (v >= 1 && v <= 100) {
            return this.miioCall('set_cct', [v]);
        }
        return Promise.reject(new Error(`Invalid target color temperature: ${v}`));
    }

    setScene(v) { // scenes: 0 - none, 1 - lighting, 2 - TV, 3 - Wormth, 4 - Night Light
        if (v >= 0 && v <= 4) {
            return this.miioCall('apply_fixed_scene', [v]);
        }
        return Promise.reject(new Error(`Invalid fixed scene: ${v}`));
    }

};