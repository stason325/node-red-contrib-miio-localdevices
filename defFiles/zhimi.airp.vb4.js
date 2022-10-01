const Device = require('../device-miio');
//edited and checked for full funcionality by Wildbill-Z
module.exports = class extends Device {

    static model = 'zhimi.airp.vb4';
    static name =  'Xiaomi Smart Air Purifier 4 Pro';
    static image = 'https://cnbj1.fds.api.xiaomi.com/iotweb-product-center/c5749d791740f4239ac4bb73d5dcc3a2_2031503-168.png?GalaxyAccessKeyId=AKVGLQWBOVIRQ3XLEW&Expires=9223372036854775807&Signature=0GtQNpheAcWibA9VQLIWr5G1skE=';

  constructor(opts) {
    super(opts);

    this._miotSpecType = 'urn:miot-spec-v2:device:air-purifier:0000A007:zhimi-vb4:1';
    this._propertiesToMonitor = [
      'air-purifier:fault',
      'air-purifier:on',
      'air-purifier:fan-level',
      'air-purifier:mode',
      'environment:pm2.5-density',
      'environment:relative-humidity',
      'environment:temperature',
      'environment:pm10-density',
      'filter:filter-life-level',
      'filter:filter-used-time',
      'filter:filter-left-time',
      'alarm:volume',
      'physical-controls-locked:physical-controls-locked',
      'custom-service:moto-speed-rpm',
      'custom-service:favorite-speed',
      'custom-service:motor-set-speed',
      'custom-service:favorite-level',
      'custom-service:buttom-door',
      'custom-service:manual-level',
      'screen:brightness',
      'device-display-unit:temperature-display-unit'];
  }

  ///GET
  getPower() {
    return this.properties['air-purifier:on'];  //ok
  }

  getMode() {
    const mode = this.properties['air-purifier:mode']; //ok
    if (mode === 0) return 'auto';
    if (mode === 1) return 'sleep';
    if (mode === 2) return 'favorite';
    if (mode === 3) return 'none';
    return undefined;
  }

  //Filter
  getFilterused() {
    return this.properties['filter:filter-used-time'];  //ok
  }

  getFilterlife() {
    return this.properties['filter:filter-life-level']; //ok 
  }

  getFanLevel() { // 1 - 3
    return this.properties['air-purifier:fan-level']; //ok
  }

  getFavLevel() { // 1 - 11
    return this.properties['custom-service:favorite-level']; //ok
  }

  getSpeed() {
    return this.properties['custom-service:moto-speed-rpm']; //ok
  }

  getSetSpeed() {
    return this.properties['custom-service:motor-set-speed']; //ok
  }

  getTemperature() {
    return this.properties['environment:temperature']; //ok
  }

  getHumidity() {
    return this.properties['environment:relative-humidity']; //ok
  }

  // eslint-disable-next-line camelcase
  getPM2_5() {
    return this.properties['environment:pm2.5-density']; //ok
  }

  getPM10() {
    return this.properties['environment:pm10-density']; //ok
  }


  getFilterRemaining() {
    const filterTotal = this.properties['filter:filter-life-level']; //ok
    const filterUsed = this.properties['filter:filter-used-time']; //ok
    if (filterTotal > 0 && filterUsed >= 0) {
      //return Math.max((1 - filterUsed / filterTotal) * 100, 0);
      return Math.max(filterUsed / (100 - filterTotal) * filterTotal/24, 0);
    }
    return undefined;
  }

  getBuzzer() {
    return this.properties['alarm:volume']; //ok
  }

  getLcdBrightness() {
    return this.properties['screen:brightness']; //ok
  }

  ///SET
  setPower(v) {
    return this.miotSetProperty('air-purifier:on', v); //ok
  }

  setMode(v) {
    if (v === 'auto') v = 0;
    else if (v === 'sleep') v = 1;
    else if (v === 'favorite') v = 2;
    else if (v === 'none') v = 3;
    return this.miotSetProperty('air-purifier:mode', v);
  }

  setFanLevel(v) { // 1-3
    return this.miotSetProperty('air-purifier:fan-level', v);
  }

  setFavLevel(v) { // 1 - 9
    return this.miotSetProperty('custom-service:favorite-level', v);
  }

  setBuzzer(v) {
    return this.miotSetProperty('alarm:volume', v);
  }

  setLcdBrightness(v) { // 0-brightest, 1-glimmer, 2-led_closed
    return this.miotSetProperty('screen:brightness', v);
  }

  setChildLock(v) {
    return this.miotSetProperty('physical-controls-locked:physical-controls-locked', v);
  }

};
