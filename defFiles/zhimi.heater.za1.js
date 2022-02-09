const Device = require('../device-miio');

module.exports = class extends Device {

  static model = 'zhimi.heater.za1';
  static name = 'SmartMi Electric Heater 1S';
  static image = 'https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1639643044442TWB1cChs.png?GalaxyAccessKeyId=AKVGLQWBOVIRQ3XLEW&Expires=9223372036854775807&Signature=fe5/h+ec5GBUTHUep2p4qO67XKY=';

  constructor(opts) {
    super(opts);

    this._propertiesToMonitor = [
      "power",
      "target_temperature",
      "brightness",
      "buzzer",
      "child_lock",
      "temperature",
      "use_time",
      "relative_humidity",
    ];
  }

  setPower(v) {
    return this.miioCall('set_power', [v ? 'on' : 'off']);
  }

  setBuzzer(v) {
    return this.miioCall('set_buzzer', [v ? 'on' : 'off']);
  }

  setTargetTemperature(v) {
    if (v >= 16 && v <= 32) {
      return this.miioCall('set_target_temperature', [v]);
    }
    return Promise.reject(new Error(`Invalid target humidity: ${v}`));
  }

  setChildLock(v) {
    return this.miioCall('set_child_lock', [v ? 'on' : 'off']);
  }

};