const Device = require('../device-miio');

module.exports = class extends Device {

  static model = 'dmaker.fan.1c';
  static name = 'Mi Smart Standing Fan 2 Lite';
  static image = 'https://cdn.awsde0.fds.api.mi-img.com/miio.files/developer_1573710547nq1me2nm.png';

  constructor(opts) {
    super(opts);

    this._miotSpecType = 'urn:miot-spec-v2:device:fan:0000A005:dmaker-1c:1';
    this._propertiesToMonitor = [
      'fan:on',
      'fan:fan-level',
      'fan:horizontal-swing',
      'fan:mode',
      'fan:off-delay-time',
      'fan:alarm',
      'fan:brightness',
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

  setMode(v) { // 0 - Straight Wind, 1 - Sleep
    if ([0, 1].includes(v)) {
      return this.miotSetProperty('fan:mode', v);
    }
    return Promise.reject(new Error(`Invalid wind mode: ${v}. Choose 0 or 1`));
  }

  setFanLevel(v) { // 1 - Level_1, 2 - Level_2, 3 - Level_3
    if ([1, 2, 3].includes(v)) {
      return this.miotSetProperty('fan:fan-level', v);
    }
    return Promise.reject(new Error(`Invalid fan level: ${v}. Choose 1, 2 or 3`));
  }

  setSwing(v) { //boolean
    return this.miotSetProperty('fan:horizontal-swing', v);
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