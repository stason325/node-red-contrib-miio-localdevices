const Device = require('../device-miio');

module.exports = class extends Device {

  static model = 'zhimi.fan.za5';
  static name = 'Smartmi Standing Fan 3 (za5)';
  static image = 'https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1577772535191ODLLij7b.png';

  constructor(opts) {
    super(opts);

    this._miotSpecType = 'urn:miot-spec-v2:device:fan:0000A005:zhimi-za5:1';
    this._propertiesToMonitor = [
      'fan:on',
      'fan:fan-level',
      'fan:horizontal-swing',
      'fan:horizontal-angle',
      'fan:mode',
      'fan:off-delay',
      'fan:anion',
      'physical-controls-locked:physical-controls-locked',
      'indicator-light:brightness',
      'alarm:alarm',
      'environment:relative-humidity',
      'environment:temperature',
      'custom-service:button-press',
      'custom-service:battery-state',
      'custom-service:speed-now',
      'custom-service:ac-state',
      'custom-service:speed-level'
    ];
  }

  setPower(v) { //boolean
    return this.miotSetProperty('fan:on', v);
  }

  setTimer(v) { //0-36000
    if (v >= 0 && v <= 36000) {
      return this.miotSetProperty('fan:off-delay', v);
    }
    return Promise.reject(new Error(`Invalid turn-off parameter: ${v}. Should be between 0 and 36000`));
  }

  setMode(v) { // 0 - Natural Wind, 1 - Straight Wind 
    if ([0, 1].includes(v)) {
      return this.miotSetProperty('fan:mode', v);
    }
    return Promise.reject(new Error(`Invalid wind mode: ${v}. Choose 0 or 1`));
  }

  setFanLevel(v) { // 1 - Level_1, 2 - Level_2, 3 - Level_3, 4 - Level_4
    if ([1, 2, 3, 4].includes(v)) {
      return this.miotSetProperty('fan:fan-level', v);
    }
    return Promise.reject(new Error(`Invalid fan level: ${v}. Choose 1, 2, 3 or 4`));
  }

  setSpeed(v) { //1-100
    if (v >= 1 && v <= 100) {
      return this.miotSetProperty('custom-service:speed-level', v);
    }
    return Promise.reject(new Error(`Invalid speed: ${v}. Should be between 1 and 100`));
  }

  setSwing(v) { //boolean
    return this.miotSetProperty('fan:horizontal-swing', v);
  }

  setSwingAngle(v) { // 30, 60, 90, 120
    const Swing_Mode = this.properties['fan:horizontal-swing'];
    if (!Swing_Mode) {
      return Promise.reject(new Error(`Horizontal Swing is turned off. Please turn it on and then set an angle`));
    }
    if ([30, 60, 90, 120].includes(v)) {
      return this.miotSetProperty('fan:horizontal-angle', v);
    }
    return Promise.reject(new Error(`Invalid swing angle: ${v}. Choose 30, 60, 90, 120`));
  }

  setIonization(v) { //boolean
    return this.miotSetProperty('fan:anion', v);
  }

  setLcdBrightness(v) { //0-100
    if (v >= 0 && v <= 100) {
      return this.miotSetProperty('indicator-light:brightness', v);
    }
    return Promise.reject(new Error(`Invalid brightness: ${v}. Should be between 0 and 100`));
  }
  
  setBuzzer(v) { //boolean
    return this.miotSetProperty('alarm:alarm', v);
  }

  setChildLock(v) { //boolean
    return this.miotSetProperty('physical-controls-locked:physical-controls-locked', v);
  }
};