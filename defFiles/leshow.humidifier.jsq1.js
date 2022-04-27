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
      'device:tsms-turn-off',
      'humidifier:fault',
      'humidifier:mode',
      'device:turn-off-dry-turn',
      'device:warm-wind-turn',
      'device:water-percentage',
      'humidifier:target-humidity',
      'environment:relative-humidity',
      'device:screen-brightness',
      'alarm:alarm'
    ];
  }

  setPower(v) { //boolean
    return this.miotSetProperty('humidifier:on', v);
  }

  setDelayedTurnOff(v) { //0-480
    if (v >= 0 && v <= 480) {
      return this.miotSetProperty('device:tsms-turn-off', v);
    }
    return Promise.reject(new Error(`Invalid turn-off parameter: ${v}`));
  }

  setMode(v) { // 0-Const Humidity, 1-Strong, 2-Sleep
    if ([0, 1, 2].includes(v)) {
      return this.miotSetProperty('humidifier:mode', v);
    }
    return Promise.reject(new Error(`Invalid drying mode: ${v}`));
  }

  setHeatMode(v) { //boolean
    return this.miotSetProperty('device:warm-wind-turn', v);
  }

  setFilterDry(v) { //boolean
    return this.miotSetProperty('device:turn-off-dry-turn', v);
  }

  setTargetHumidity(v) { //40-70
    if (v >= 40 && v <= 70) {
      return this.miotSetProperty('humidifier:target-humidity', v);
    }
    return Promise.reject(new Error(`Invalid target humidity: ${v}`));
  }

  setLcdBrightness(v) { //0-1
    return this.miotSetProperty('device:screen-brightness', v);
  }
  
  setBuzzer(v) { //boolean
    return this.miotSetProperty('alarm:alarm', v);
  }

};