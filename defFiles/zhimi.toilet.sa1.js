const Device = require('../device-miio');

module.exports = class extends Device {

  static model = 'zhimi.toilet.sa1';
  static name = 'Smartmi Smart Bidet Toilet Seat Pro';
  static image = 'https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1577765179435CyXcWINp.png';

  constructor(opts) {
    super(opts);

    this._miotSpecType = 'urn:miot-spec-v2:device:toilet:0000A02E:zhimi-sa1:1';
    this._propertiesToMonitor = [
      'toilet:on',
      'toilet:seating-state',
      'toilet:washing-strength',
      'toilet:nozzle-position',
      'toilet:deodorization',
      'toilet:mode',
      'seat:heating',
      'seat:heat-level',
      'filter:filter-life-level',
      'alarm:alarm'
    ];
  }

  setPower(v) { //boolean
    return this.miotSetProperty('toilet:on', v);
  }

  setWashStrength(v) { // 1-4
    if ([1, 2, 3, 4].includes(v)) {
      return this.miotSetProperty('toilet:washing-strength', v);
    }
    return Promise.reject(new Error(`Invalid Washing Strenght: ${v}. Choose 1, 2, 3 or 4`));
  }

  setNozzlePos(v) { // 1-4
    if ([1, 2, 3, 4].includes(v)) {
      return this.miotSetProperty('toilet:nozzle-position', v);
    }
    return Promise.reject(new Error(`Invalid Nozzle Position: ${v}. Choose 1, 2, 3 or 4`));
  }

  setDeodorization(v) { //boolean
    return this.miotSetProperty('toilet:deodorization', v);
  }

  setMode(v) { // 1-Posterior Wash, 2-Feminine Wash, 3-Air Dry, 4-Idle
    if ([1, 2, 3, 4].includes(v)) {
      return this.miotSetProperty('toilet:mode', v);
    }
    return Promise.reject(new Error(`Invalid Mode: ${v}. Choose 1, 2, 3 or 4`));
  }

  setHeating(v) { //boolean
    return this.miotSetProperty('seat:heating', v);
  }

  setHeatLevel(v) { // 0-4
    if ([0, 1, 2, 3, 4].includes(v)) {
      return this.miotSetProperty('seat:heat-level', v);
    }
    return Promise.reject(new Error(`Invalid Heat Level: ${v}. Choose 0, 1, 2, 3 or 4`));
  }

  setNightLight(v) { //boolean
    return this.miotSetProperty('night-light:on', v);
  }

  setAlarm(v) { //boolean
    return this.miotSetProperty('alarm:alarm', v);
  }
};