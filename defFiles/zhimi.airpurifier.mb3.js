const Device = require('../device-miio');

module.exports = class extends Device {

  static model = 'zhimi.airpurifier.mb3';
  static name = 'Mi Air Purifier 3H';
  static image = 'https://cdn.awsde0.fds.api.mi-img.com/miio.files/developer_15504816557tej1pj6.png';

  constructor(opts) {
    super(opts);

    this._miotSpecType = 'urn:miot-spec-v2:device:air-purifier:0000A007:zhimi-mb3:2';
    this._propertiesToMonitor = [
      'air-purifier:fault',
      'air-purifier:on',
      'air-purifier:fan-level',
      'air-purifier:mode',
      'environment:pm2.5-density',
      'environment:relative-humidity',
      'environment:temperature',
      'filter:filter-life-level',
      'filter:filter-used-time',
      'alarm:alarm',
      'indicator-light:brightness',
      'indicator-light:on',
      'physical-controls-locked:physical-controls-locked',
      'motor-speed:motor-favorite',
      'motor-speed:motor-speed',
      'motor-speed:favorite-fan-level',
      'aqi:aqi-state'
    ];
  }

  getPower() {
    return this.properties['air-purifier:on'];
  }

  getMode() {
    const mode = this.properties['air-purifier:mode'];
    if (mode === 0) return 'auto';
    if (mode === 1) return 'sleep';
    if (mode === 2) return 'favorite';
    if (mode === 3) return 'none';
    return undefined;
  }

  getFanLevel() { // 1 - 3
    return this.properties['air-purifier:fan-level'];
  }

  getTemperature() {
    return this.properties['environment:temperature'];
  }

  getHumidity() {
    return this.properties['environment:relative-humidity'];
  }

  // eslint-disable-next-line camelcase
  getPM2_5() {
    return this.properties['environment:pm2.5-density'];
  }

  getFilterRemaining() {
    const filterTotal = this.properties['filter:filter-life-level'];
    const filterUsed = this.properties['filter:filter-used-time'];
    if (filterTotal > 0 && filterUsed >= 0) {
      return Math.max((1 - filterUsed / filterTotal) * 100, 0);
    }
    return undefined;
  }

  getBuzzer() {
    return this.properties['alarm:alarm'];
  }

  getLcdBrightness() {
    return this.properties['indicator-light:brightness'];
  }



  setPower(v) { //boolean
    return this.miotSetProperty('air-purifier:on', v);
  }

  setMode(v) { // 'auto', 'sleep', 'favorite' or 'none'
    if (v === 'auto') {
      v = 0;
      return this.miotSetProperty('air-purifier:mode', v);
    } else if (v === 'sleep') {
      v = 1;
      return this.miotSetProperty('air-purifier:mode', v);
    } else if (v === 'favorite') {
      v = 2;
      return this.miotSetProperty('air-purifier:mode', v);
    } else if (v === 'none') {
      v = 3;
      return this.miotSetProperty('air-purifier:mode', v);
    } else {
      return Promise.reject(new Error(`Invalid mode: ${v}. Choose 'auto', 'sleep', 'favorite' or 'none'`));
    }
  }

  setFanLevel(v) { // 1-3
    if ([1, 2, 3].includes(v)) {
      return this.miotSetProperty('air-purifier:fan-level', v);
    }
    return Promise.reject(new Error(`Invalid Fan Level: ${v}. Choose 1, 2 or 3`));
  }

  setFavSpeed(v) { // 300-2300
    if (v >= 300 && v <= 2300) {
      return this.miotSetProperty('motor-speed:motor-favorite', v);
    }
    return Promise.reject(new Error(`Invalid Fav Speed: ${v}. Should be between 300 and 2300 rpm`));
  }

  setFavoriteLevel(v) { //0-14
    if (v >= 0 && v <= 14) {
      return this.miotSetProperty('motor-speed:favorite-fan-level', v);
    }
    return Promise.reject(new Error(`Invalid Fav FanLevel: ${v}. Should be between 0 and 14`));
  }

  setBuzzer(v) { //boolean
    return this.miotSetProperty('alarm:alarm', v);
  }

  setLcdBrightness(v) { // 0-brightest, 1-glimmer, 2-led_closed
    if ([0, 1, 2].includes(v)) {
      return this.miotSetProperty('indicator-light:brightness', v);
    }
    return Promise.reject(new Error(`Invalid Brightness ${v}. Choose 0, 1 or 2`));
  }

  setChildLock(v) { //boolean
    return this.miotSetProperty('physical-controls-locked:physical-controls-locked', v);
  }

};