const Device = require('../device-miio');

module.exports = class extends Device {

    static model = 'zhimi.airp.vb4';
    static name =  'Xiaomi Smart Air Purifier 4 Pro';
    static image = 'https://cnbj1.fds.api.xiaomi.com/iotweb-product-center/c5749d791740f4239ac4bb73d5dcc3a2_2031503-168.png';

  constructor(opts) {
    super(opts);

    this._miotSpec = {
      "air-purifier:on": {"siid":2,"piid":1},
      "air-purifier:fault": {"siid":2,"piid":2},
      "air-purifier:mode": {"siid":2,"piid":4},
      "air-purifier:fan-level": {"siid":2,"piid":5},
      "air-purifier:anion": {"siid":2,"piid":6},
      "environment:relative-humidity": {"siid":3,"piid":1},
      "environment:pm2.5-density": {"siid":3,"piid":4},
      "environment:temperature": {"siid":3,"piid":7},
      "environment:pm10-density": {"siid":3,"piid":8},
      "filter:filter-left-time": {"siid":4,"piid":4},
      "alarm:alarm": {"siid":6,"piid":1},
      "physical-controls-locked:physical-controls-locked": {"siid":8,"piid":1},
      "screen:brightness": {"siid":13,"piid":2},
      "custom-service:favorite-level": {"siid":9,"piid":5},
      "aqi:average-aqi": {"siid":11,"piid":2}
    };

    this._propertiesToMonitor = [
      "air-purifier:on",
      "air-purifier:fault",
      "air-purifier:mode",
      "air-purifier:fan-level",
      "air-purifier:anion",
      "environment:relative-humidity",
      "environment:pm2.5-density",
      "environment:temperature",
      "environment:pm10-density",
      "filter:filter-left-time",
      "alarm:alarm",
      "physical-controls-locked:physical-controls-locked",
      "screen:brightness",
      "custom-service:favorite-level",
      "aqi:average-aqi"
    ];
  }


  setPower(v) {
    if ([true, false].includes(v)) {
      return this.miioCall ('set_properties', [{'siid': 2, 'piid': 1, value: v}])
    }
    return Promise.reject(new Error(`Invalid value: ${v}. Choose true or false`));
  }

  setMode(v) {
    if (v === 'auto') {
      return this.miioCall ('set_properties', [{'siid': 2, 'piid': 4, value: 0}])
    }
    if (v === 'sleep') {
      return this.miioCall ('set_properties', [{'siid': 2, 'piid': 4, value: 1}])
    }
    if (v === 'favorite') {
      return this.miioCall ('set_properties', [{'siid': 2, 'piid': 4, value: 2}])
    }
    if (v === 'manual') {
      return this.miioCall ('set_properties', [{'siid': 2, 'piid': 4, value: 3}])
    }
    return Promise.reject(new Error(`Invalid mode: ${v}. Choose auto, sleep, favorite or manual`));
  }

  setFanLevel(v) { // 1-3
    if ([1, 2, 3].includes(v)) {
      return this.miioCall ('set_properties', [{'siid': 2, 'piid': 5, value: v}])
    }
    return Promise.reject(new Error(`Invalid FanLevel: ${v}. Choose 1, 2, 3`));
  }

  setIonization(v) {
    if ([true, false].includes(v)) {
      return this.miioCall ('set_properties', [{'siid': 2, 'piid': 6, value: v}])
    }
    return Promise.reject(new Error(`Invalid value: ${v}. Choose true or false`));
  }

  setFavLevel(v) { // 0-11
    if (v >= 0 && v <= 11) {
      return this.miioCall ('set_properties', [{'siid': 9, 'piid': 5, value: v}])
    }
    return Promise.reject(new Error(`Invalid Favorite Level: ${v}. Should be between 0 and 11`));
  }

  setBuzzer(v) {
    if ([true, false].includes(v)) {
      return this.miioCall ('set_properties', [{'siid': 6, 'piid': 1, value: v}])
    }
    return Promise.reject(new Error(`Invalid value: ${v}. Choose true or false`));
  }

  setLcdBrightness(v) { // 0-close, 1-bright, 2-brightest
    if ([0, 1, 2].includes(v)) {
      return this.miioCall ('set_properties', [{'siid': 13, 'piid': 2, value: v}])
    }
    return Promise.reject(new Error(`Invalid LCD Brightness: ${v}. Choose 0, 1, 2`));
  }

  setChildLock(v) {
    if ([true, false].includes(v)) {
      return this.miioCall ('set_properties', [{'siid': 8, 'piid': 1, value: v}])
    }
    return Promise.reject(new Error(`Invalid value: ${v}. Choose true or false`));
  }

};
