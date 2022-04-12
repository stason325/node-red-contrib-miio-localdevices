const Device = require('../device-miio');

module.exports = class extends Device {

  static model = 'leshow.humidifier.jsq1';
  static name = 'Mijia Pure Intelligent Humidifier Pro';
  static image = 'https://cnbj1.fds.api.xiaomi.com/iotweb-product-center/174a1dd784b331ca251794d036ac2855_产品拟物图2.png';

  constructor(opts) {
    super(opts);

    this._miotSpecType = 'urn:miot-spec-v2:device:humidifier:0000A00E:leshow-jsq1:2';
    this._propertiesToMonitor = [
      'humidifier:on',
      'humidifier:fault',
      'humidifier:mode',
      'humidifier:target-humidity',
      'humidifier:water-level',
      'environment:relative-humidity',
      'alarm:alarm'
    ];
  }

  setPower(v) { //boolean
    return this.miotSetProperty('humidifier:on', v);
  }

  setMode(v) { // 0-Const Humidity, 1-Strong, 2-Sleep
    return this.miotSetProperty('humidifier:mode', v);
}

  setTargetHumidity(v) { //40-70
    return this.miotSetProperty('humidifier:target-humidity', v);
  }

  setBuzzer(v) { //boolean
    return this.miotSetProperty('alarm:alarm', v);
  }

};