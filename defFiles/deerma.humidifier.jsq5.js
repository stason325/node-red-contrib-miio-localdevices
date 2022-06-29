const Device = require('../device-miio');

module.exports = class extends Device {

  static model = 'deerma.humidifier.jsq5';
  static name = 'Mi Smart Antibacterial Humidifier (jsq5)';
  static image = 'https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1616123889270TXVYhdbh.png';

  constructor(opts) {
    super(opts);

    this._miotSpec = {
      'humidifier:on': {siid: 2, piid: 1},
      'humidifier:fault': {siid: 2, piid: 2},
      'humidifier:fan-level': {siid: 2, piid: 5},
      'humidifier:target-humidity': {siid: 2, piid: 6},
      'environment:relative-humidity': {siid: 3, piid: 1},
      'environment:temperature': {siid: 3, piid: 7},
      'alarm:alarm': {siid: 5, piid: 1},
      'indicator-light:on': {siid: 6, piid: 1},
      'custom:water-shortage-fault': {siid: 7, piid: 1},
      'custom:the-tank-filed': {siid: 7, piid: 2}
    };

    this._propertiesToMonitor = [
        'humidifier:on',
        'humidifier:fault',
        'humidifier:fan-level',
        'humidifier:target-humidity',
        'environment:relative-humidity',
        'environment:temperature',
        'alarm:alarm',
        'indicator-light:on',
        'custom:water-shortage-fault',
        'custom:the-tank-filed'
    ];
  }

  setPower(v) {
    if ([true, false].includes(v)) {
      return this.miioCall('set_properties', [{'siid': 2, 'piid': 1, value: v}])
    }
    return Promise.reject(new Error(`Invalid value: ${v}. Choose true or false`));
  }

  setFanLevel(v) {
    if ([1, 2, 3, 4].includes(v)) {
      return this.miioCall('set_properties', [{'siid': 2, 'piid': 5, value: v}])
    }
    return Promise.reject(new Error(`Invalid FanLevel: ${v}. Choose 1, 2, 3, 4`));
  }

  setTargetHumidity(v) {
    if (v >= 40 && v <= 80) {
      return this.miioCall('set_properties', [{'siid': 2, 'piid': 6, value: v}])
    }
    return Promise.reject(new Error(`Invalid Target Humidity: ${v}. Should be between 40 and 80`));
  }

  setBuzzer(v) {
    if ([true, false].includes(v)) {
      return this.miioCall('set_properties', [{'siid': 5, 'piid': 1, value: v}])
    }
    return Promise.reject(new Error(`Invalid value: ${v}. Choose true or false`));
  }

  setBright(v) {
    if ([true, false].includes(v)) {
      return this.miioCall('set_properties', [{'siid': 6, 'piid': 1, value: v}])
    }
    return Promise.reject(new Error(`Invalid value: ${v}. Choose true or false`));
  }

};