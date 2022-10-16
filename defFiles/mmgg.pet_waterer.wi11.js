const Device = require('../device-miio');

module.exports = class extends Device {

    static model = 'mmgg.pet_waterer.wi11';
    static name =  'Xiaomi Pet Drinking Fountain';
    static image = 'https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_15762045935682DTzmYGL.png';

  constructor(opts) {
    super(opts);

    this._miotSpec = {
      "pet-drinking-fountain:on": {"siid":2,"piid":1},
      "pet-drinking-fountain:fault": {"siid":2,"piid":2},
      "pet-drinking-fountain:mode": {"siid":2,"piid":3},
      "filter:filter-left-time": {"siid":3,"piid":1},
      "indicator-light:on": {"siid":4,"piid":1},
      "remain-clean-time:remain-clean-time": {"siid":6,"piid":1},
      "no-water-flag:no-water-flag": {"siid":7,"piid":1},
      "no-water-flag:pump-block-flag": {"siid":7,"piid":3},
      "no-water-flag:lid-up-flag": {"siid":7,"piid":4},
    };

    this._propertiesToMonitor = [
      "pet-drinking-fountain:on",
      "pet-drinking-fountain:fault",
      "pet-drinking-fountain:mode",
      "filter:filter-left-time",
      "indicator-light:on",
      "remain-clean-time:remain-clean-time",
      "no-water-flag:no-water-flag",
      "no-water-flag:pump-block-flag",
      "no-water-flag:lid-up-flag"
    ];
  }


  setPower(v) {
    if ([true, false].includes(v)) {
      return this.miioCall ('set_properties', [{'siid': 2, 'piid': 1, value: v}])
    }
    return Promise.reject(new Error(`Invalid value: ${v}. Choose true or false`));
  }

  setMode(v) {
    if (v === 'common') {
      return this.miioCall ('set_properties', [{'siid': 2, 'piid': 3, value: 1}])
    }
    if (v === 'smart') {
      return this.miioCall ('set_properties', [{'siid': 2, 'piid': 3, value: 2}])
    }
    return Promise.reject(new Error(`Invalid mode: ${v}. Choose common or smart`));
  }

  setLed(v) {
    if ([true, false].includes(v)) {
      return this.miioCall ('set_properties', [{'siid': 4, 'piid': 1, value: v}])
    }
    return Promise.reject(new Error(`Invalid value: ${v}. Choose true or false`));
  }
};