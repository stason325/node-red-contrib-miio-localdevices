const Device = require('../device-miio');

module.exports = class extends Device {

  static model = 'zhimi.humidifier.ca4';
  static name = 'Smartmi Evaporative Humidifer 2';
  static image = 'https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1575251878117y5EMNnGn.png?GalaxyAccessKeyId=AKVGLQWBOVIRQ3XLEW&Expires=9223372036854775807&Signature=7p+gvkuvQGzvZfg5o7VWVrE4TRA=';

  constructor(opts) {
    super(opts);

    this._miotSpec = {
      "humidifier:on": {"siid":2,"piid":1},
      "humidifier:fault": {"siid":2,"piid":2},
      "humidifier:fan-level": {"siid":2,"piid":5},
      "humidifier:target-humidity": {"siid":2,"piid":6},
      "humidifier:water-level": {"siid":2,"piid":7},
      "humidifier:speed-level": {"siid":2,"piid":11},
      "humidifier:dry": {"siid":2,"piid":8},
      "humidifier:use-time": {"siid":2,"piid":9},
      "humidifier:button-pressed": {"siid":2,"piid":10},
      "environment:temperature": {"siid":3,"piid":7},
      "environment:relative-humidity": {"siid":3,"piid":9},
      "environment:fahrenheit": {"siid":3,"piid":8},
      "alarm:alarm": {"siid":4,"piid":1},
      "screen:brightness": {"siid":5,"piid":2},
      "physical-controls-locked:physical-controls-locked": {"siid":6,"piid":1},
    };

    this._propertiesToMonitor = [
      "humidifier:on",
      "humidifier:fault",
      "humidifier:fan-level",
      "humidifier:target-humidity",
      "humidifier:water-level",
      "humidifier:speed-level",
      "humidifier:dry",
      "humidifier:use-time",
      "humidifier:button-pressed",
      "environment:temperature",
      "environment:relative-humidity",
      "environment:fahrenheit",
      "alarm:alarm",
      "screen:brightness",
      "physical-controls-locked:physical-controls-locked"
    ];
  }


  setPower(v) {
    if ([true, false].includes(v)) {
      return this.miioCall ('set_properties', [{'siid': 2, 'piid': 1, value: v}])
    }
    return Promise.reject(new Error(`Invalid value: ${v}. Choose true or false`));
  }

  setBuzzer(v) {
    if ([true, false].includes(v)) {
      return this.miioCall ('set_properties', [{'siid': 4, 'piid': 1, value: v}])
    }
    return Promise.reject(new Error(`Invalid value: ${v}. Choose true or false`));
  }

  setFanLevel(v) {
    if ([0, 1, 2, 3].includes(v)) {
      return this.miioCall ('set_properties', [{'siid': 2, 'piid': 5, value: v}])
    }
    return Promise.reject(new Error(`Invalid FanLevel: ${v}. Choose 0, 1, 2, 3`));
  }

  setTargetHumidity(v) {
    if (v >= 30 && v <= 80) {
      return this.miioCall ('set_properties', [{'siid': 2, 'piid': 6, value: v}])
    }
    return Promise.reject(new Error(`Invalid Target Humidity: ${v}. Should be between 30 and 80`));
  }

  setLedBrightness(v) {
    if ([0, 1, 2].includes(v)) {
      return this.miioCall ('set_properties', [{'siid': 5, 'piid': 2, value: v}])
    }
    return Promise.reject(new Error(`Invalid Brightness: ${v}. Choose 0, 1, 2`));
  }

  setChildLock(v) {
    if ([true, false].includes(v)) {
      return this.miioCall ('set_properties', [{'siid': 6, 'piid': 1, value: v}])
    }
    return Promise.reject(new Error(`Invalid value: ${v}. Choose true or false`));
  }

  setMode(v) {
    if (v === 'dry') {
      return this.miioCall ('set_properties', [{'siid': 2, 'piid': 8, value: true}])
    }
    if (v === 'humidify') {
      return this.miioCall ('set_properties', [{'siid': 2, 'piid': 8, value: false}])
    }
    return Promise.reject(new Error(`Invalid mode: ${v}. Choose dry or humidity`));
  }

};