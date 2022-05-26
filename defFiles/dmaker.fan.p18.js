const Device = require('../device-miio');

module.exports = class extends Device {

  static model = 'dmaker.fan.p18';
  static name = 'Mi Smart Standing Fan 2 (p10, p18)';
  static image = 'https://cdn.awsusor1.fds.api.mi-img.com/iotweb-product-center/developer_15972184073099haFbYTk.png';

  constructor(opts) {
    super(opts);

    this._miotSpecType = 'urn:miot-spec-v2:device:fan:0000A005:dmaker-p10:1';
    this._propertiesToMonitor = [
      'fan:on',
      'fan:off-delay-time',
      'fan:mode',
      'fan:fan-level',
      'fan:speed-level',
      'fan:horizontal-swing',
      'fan:horizontal-angle',
      'fan:brightness',
      'fan:alarm',
      'physical-controls-locked:physical-controls-locked',
    ];
  }

  setPower(v) { //boolean
    return this.miotSetProperty('fan:on', v);
  }

  setTimer(v) { //0-480
    if (v >= 0 && v <= 480) {
      return this.miotSetProperty('fan:off-delay-time', v);
    }
    return Promise.reject(new Error(`Invalid turn-off parameter: ${v}. Should be between 0 and 480`));
  }

  setMode(v) { // 0 - Straight Wind, 1 - Natural Wind
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

  setSpeed(v) { //0-100
    if (v >= 0 && v <= 100) {
      return this.miotSetProperty('fan:speed-level', v);
    }
    return Promise.reject(new Error(`Invalid speed: ${v}. Should be between 0 and 100`));
  }

  setDirection(v) { // 0 - none, 1 - left, 2 - right
    if ([0, 1, 2].includes(v)) {
      return this.miotSetProperty('fan:motor-control', v);
    }
    return Promise.reject(new Error(`Invalid deriction: ${v}. Choose 1 for left, 2 for right, 0 for none`));
  }

  setSwing(v) { //boolean
    return this.miotSetProperty('fan:horizontal-swing', v);
  }

  setSwingAngle(v) { // 30, 60, 90, 120, 140
    const Swing_Mode = this.properties['fan:horizontal-swing'];
    if (!Swing_Mode) {
      return Promise.reject(new Error(`Horizontal Swing is turned off. Please turn it on and then set an angle`));
    }
    if ([30, 60, 90, 120, 140].includes(v)) {
      return this.miotSetProperty('fan:horizontal-angle', v);
    }
    return Promise.reject(new Error(`Invalid swing angle: ${v}. Choose 30, 60, 90, 120, 140`));
  }

  setLcdBrightness(v) { //boolean
    return this.miotSetProperty('fan:brightness', v);
  }
  
  setBuzzer(v) { //boolean
    return this.miotSetProperty('fan:alarm', v);
  }

  setChildLock(v) { //boolean
    return this.miotSetProperty('physical-controls-locked:physical-controls-locked', v);
  }
};