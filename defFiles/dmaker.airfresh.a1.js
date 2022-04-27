const Device = require('../device-miio');

module.exports = class extends Device {

  static model = 'dmaker.airfresh.a1';
  static name = 'Mijia New Fan A1 (a1)';
  static image = 'https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1571025407906ABkSN0nP.png';

  constructor(opts) {
    super(opts);

    this._propertiesToMonitor = [
      "power",
      "mode",

      "display",
      "sound",
      "child_lock",

      "favourite_speed",
      "control_speed",

      "pm25",
      "co2",
      "temperature_outside",
      
      "ptc_on",
      "ptc_status",
    
      "filter_rate",
      "filter_day",
    ];
  }


  setPower(v) { //boolean
    return this.miioCall('set_power', [v ? 'on' : 'off']);
  }

  setMode(v) { // "auto", "none", "sleep"
    return this.miioCall('set_mode', [v]);
  }

  setDisplay(v) { //boolean
    return this.miioCall('set_display', [v ? 'on' : 'off']);
  }

  setBuzzer(v) { //boolean
    return this.miioCall('set_sound', [v ? 'on' : 'off']);
  }

  setChildLock(v) { //boolean
    return this.miioCall('set_child_lock', [v ? 'on' : 'off']);
  }

  setFavSpeed(v) { // 0 - 150
    if (v >= 0 && v <= 150) {
      return this.miioCall('set_favourite_speed', [v]);
    }
    return Promise.reject(new Error(`Invalid speed parameter: ${v}`));
  }






};