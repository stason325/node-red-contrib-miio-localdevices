const Device = require('../device-miio');

module.exports = class extends Device {

    static model = 'zhimi.toilet.sa1';
    static name = 'Smartmi Smart Bidet Toilet Seat Pro';
    static image = 'https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1577765179435CyXcWINp.png';

    constructor(opts) {
        super(opts);

        this._miotSpecType = 'urn:miot-spec-v2:device:toilet:0000A02E:zhimi-sa1:1';
        this._propertiesToMonitor = [
            
            // trying to find right props for on-off
            'power',
            'OnOff_State',
            'toilet:on',

            // trying to find right props for light
            'ambient_light',
            'ambient-light',
            'night-light',
            'night_light',
            'night-light:on',

            // possible miio (others)
            'mode',
            'work_state',
            'seating_state',
            'heating',
            'filter_use_time',

            // miot commands by specs (others)
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
        return this.miotSetProperty('toilet:washing-strength', v);
    }

    setNozzlePos(v) { // 1-4
        return this.miotSetProperty('toilet:nozzle-position', v);
    }

    setDeodorization(v) { //boolean
        return this.miotSetProperty('toilet:deodorization', v);
    }

    setMode(v) { // 1-Posterior Wash, 2-Feminine Wash, 3-Air Dry, 4-Idle
        return this.miotSetProperty('toilet:mode', v);
    }

    setHeating(v) { //boolean
        return this.miotSetProperty('seat:heating', v);
    }

    setHeatLevel(v) { // 0-4
        return this.miotSetProperty('seat:heat-level', v);
    }

    setNightLight(v) { //boolean
        return this.miotSetProperty('night-light:on', v);
    }

    setAlarm(v) { //boolean
        return this.miotSetProperty('alarm:alarm', v);
    }
};