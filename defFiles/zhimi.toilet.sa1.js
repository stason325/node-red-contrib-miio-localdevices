const Device = require('../device-miio');

module.exports = class extends Device {

  static model = 'zhimi.toilet.sa1';
  static name = 'Smartmi Smart Bidet Toilet Seat Pro';
  static image = 'https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1577765179435CyXcWINp.png';

  constructor(opts) {
    super(opts);

    this._propertiesToMonitor = [
      'power',
      'mode',
      'buzzer',
      'seat_temp',
      'water_temp',
      'warm_air_temperature',
      'filter_use_percentage',
      'filter_remaining_time'
    ];
  }

  setPower(v) { //boolean
    if (v === true) {
      return this.miioCall('set_power', ["on"])
    } else if (v === false) {
      return this.miioCall('set_power', ["off"])
    }
    return Promise.reject(new Error(`Invalid value: ${v}. Choose true or false`));
  }

  setAlarm(v) { //boolean
    if (v === true) {
      return this.miioCall('set_buzzer', ["on"])
    } else if (v === false) {
      return this.miioCall('set_buzzer', ["off"])
    }
    return Promise.reject(new Error(`Invalid value: ${v}. Choose true or false`));
  }

  setMode(v) { // 1-Posterior Wash, 2-Feminine Wash, 3-Air Dry, 4-Idle
    if (v === 1) {
      return this.miioCall('set_mode', ["hipclean"])
    } else if (v === 2) {
      return this.miioCall('set_mode', ["womanclean"])
    } else if (v === 3) {
      return this.miioCall('set_mode', ["heatwind"])
    } else if (v === 4) {
      return this.miioCall('set_mode', ["idle"])
    }
    return Promise.reject(new Error(`Invalid Mode: ${v}. Choose 1, 2, 3 or 4`));
  }
  
};