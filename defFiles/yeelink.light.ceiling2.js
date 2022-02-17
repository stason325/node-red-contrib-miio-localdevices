const Device = require('../device-miio');
const { withLightEffect } = require('../utils');

module.exports = class extends Device {

    static model = 'yeelink.light.ceiling2';
    static name = 'Yeelight ShaoHua Celing Light (ceiling 2)';
    static image = 'http://static.home.mi.com/app/image/get/file/developer_1522404220fc1599ca.png';

    constructor(opts) {
        super(opts);

        this._propertiesToMonitor = ['power', 'night_mode', 'bright', 'nl_br'];
    }

    getPower() {
        const { power } = this.properties;
        if (power === 'on') return true;
        if (power === 'off') return false;
        return undefined;
    }

    getBrightness() {
        const brightness = parseInt(this.properties.bright, 10);
        const nightLightBrightness = parseInt(this.properties.nl_br, 10);
        if (nightLightBrightness > 0) return nightLightBrightness;
        if (brightness > 0) return brightness;
        return undefined;
    }

    getSleepMode() {
        const nightLightBrightness = parseInt(this.properties.nl_br, 10);
        if (nightLightBrightness > 0) return true;
        if (nightLightBrightness === 0) return false;
        return undefined;
    }

    setPower(v) {
        return this.miioCall('set_power', withLightEffect(v ? 'on' : 'off'));
    }

    setBrightness(v) {
        return this.miioCall('set_bright', withLightEffect(v));
    }

    setSleepMode(v) {
        return this.miioCall('set_ps', ['nightlight', v ? 'on' : 'off']);
    }

};