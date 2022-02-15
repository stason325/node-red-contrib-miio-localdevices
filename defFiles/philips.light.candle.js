const Device = require('../device-miio');

module.exports = class extends Device {

    static model = 'philips.light.candle';
    static name = 'Philips Candle';
    static image = 'https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1639568383016c3tBnNav.png';

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

};