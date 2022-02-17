const Device = require('../device-miio');
const { withLightEffect } = require('../utils');

module.exports = class extends Device {

    static model = 'yeelink.light.ceiling16';
    static name = 'Yeelight LED Ceiling Light (ceiling 16, 17)';
    static image = 'https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1639643106451l8hc04ZS.png';

    constructor(opts) {
        super(opts);

        this._propertiesToMonitor = ['power', 'bright', 'ct'];
    }

    getPower() {
        const { power } = this.properties;
        if (power === 'on') return true;
        if (power === 'off') return false;
        return undefined;
    }

    getBrightness() {
        const brightness = parseInt(this.properties.bright, 10);
        if (brightness > 0) return brightness;
        return undefined;
    }

    getColorTemperature() {
        const colorTemperature = parseInt(this.properties.ct, 10);
        if (colorTemperature > 0) return colorTemperature;
        return undefined;
    }

    setPower(v) {
        return this.miioCall('set_power', withLightEffect(v ? 'on' : 'off'));
    }

    setBrightness(v) {
        return this.miioCall('set_bright', withLightEffect(v));
    }

    setColorTemperature(v) {
        return this.miioCall('set_ct_abx', withLightEffect(v));
    }

};