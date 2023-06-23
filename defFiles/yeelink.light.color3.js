const Device = require('../device-miio');
const { withLightEffect } = require('../utils');

module.exports = class extends Device {

    static model = 'yeelink.light.color3';
    static name = 'Mi LED Smart Bulb (White and Color)';
    static image = 'https://cdn.awsusor0.fds.api.mi-img.com/miio.files/developer_15239567889mgx5j3j.png';

    constructor(opts) {
        super(opts);

        this._propertiesToMonitor = ['power', 'bright', 'ct', 'hue', 'saturation'];
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

    getColorHue() {
        const colorHue = parseInt(this.properties.hue, 10);
        if (colorHue >= 0) return colorHue;
        return undefined;
    }

    getColorSaturation() {
        const colorSaturation = parseInt(this.properties.saturation, 10);
        if (colorSaturation >= 0) return colorSaturation;
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

    setColorHSV(v) {
        return this.miioCall('set_hsv', withLightEffect([v.hue, v.saturation]));
    }
	
    setColorRGB(v) {
		//If you don't want a fade effect change the end to withLightEffect([v],{ms:0})
        return this.miioCall('set_rgb', withLightEffect([v]));
    }

};