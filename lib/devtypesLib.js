'use strict';

class MIIOdevtypesVocabulary {
    static humid_list() {
        return {
            1: {name: 'Mi Smart Humidifier (mjjsq)', model: "deerma.humidifier.mjjsq", protocol: "miio", addDef: false},
            2: {name: 'Mi Smart Antibacterial Humidifier (jsq)', model: "deerma.humidifier.jsq", protocol: "miio", addDef: false},
            3: {name: 'Mijia Pure Evaporation (jsq4)', model: "deerma.humidifier.jsq4", protocol: "miot", addDef: true},
            4: {name: 'Smartmi Evaporative Humidifier (ca1)', model: "zhimi.humidifier.ca1", protocol: "miio", addDef: true},
            5: {name: 'Smartmi Evaporative Humidifier (ca4)', model: "zhimi.humidifier.ca4", protocol: "miot", addDef: true},
            6: {name: 'Smartmi Evaporative Humidifier (cb4)', model: "zhimi.humidifier.cb1", protocol: "miio", addDef: true},
            7: {name: 'NWT Internet Dehumidifier 30L', model: "nwt.derh.330ef", protocol: "miot", addDef: false},
            8: {name: 'Mijia Pure Intelligent Humidifier Pro (jsq1)', model: "leshow.humidifier.jsq1", protocol: "miot", addDef: true},
            9: {name: 'Mi Smart Antibacterial Humidifier (jsq5)', model: "deerma.humidifier.jsq5", protocol: "miot", addDef: true},
        };
    };
    
    static purif_list() {
        return {
            1: {name:'Mi Air Purifier Pro (v7)', model: "zhimi.airpurifier.v7", protocol: "miio", addDef: false},
            2: {name:'Mi Air Purifier Pro H (vb2)', model: "zhimi.airpurifier.vb2", protocol: "miot", addDef: false},
            3: {name:'Mi Air Purifier 4 Pro (vb4)', model: "zhimi.airp.vb4", protocol: "miot", addDef: false},
            4: {name:'Mi Air Purifier 2 (m1)', model: "zhimi.airpurifier.m1", protocol: "miio", addDef: true},
            5: {name:'Mi Air Purifier 2S (ma2)', model: "zhimi.airpurifier.ma2", protocol: "miio", addDef: true},
            6: {name:'Mi Air Purifier 3 (ma4)', model: "zhimi.airpurifier.ma4", protocol: "miot", addDef: false},
            7: {name:'Mi Air Purifier 3H (mb3)', model: "zhimi.airpurifier.mb3", protocol: "miot", addDef: true},
            8: {name:'Mi Air Purifier 3C (mb4)', model: "zhimi.airpurifier.mb4", protocol: "miot", addDef: true},
            9: {name:'Mi Air Purifier 2S (mc1)', model: "zhimi.airpurifier.mc1", protocol: "miio", addDef: true},
            10: {name:'Mi Air Purifier 2H (mc2)', model: "zhimi.airpurifier.mc2", protocol: "miot", addDef:false},
            11: {name:'Mijia New Fan A1 (a1)', model: "dmaker.airfresh.a1", protocol: "miio", addDef:true}
        };
    };

    static heatfan_list() {
        return {
            1: {name:'SmartMi Electric Heater 1S (za1)', model: "zhimi.heater.za1", protocol: "miio", addDef: true},
            2: {name:'Smartmi Smart Bidet Toilet Seat Pro (sa1)', model: "zhimi.toilet.sa1", protocol: "miio", addDef: true},
            3: {name:'Xiaomi Pet Drinking Fountain (wi11)', model: "mmgg.pet_waterer.wi11", protocol: "miot", addDef: true},
            4: {name:'Smartmi Standing Fan 1 (sa1, za1), 2 (za3), 2S (za4)', model: "zhimi.fan.za4", protocol: "miio", addDef: false},
            5: {name:'Mi Smart Standing Fan 2 (p10, p18)', model: "dmaker.fan.p18", protocol: "miot", addDef: true},
            6: {name:'Smartmi Standing Fan 3 (za5)', model: "zhimi.fan.za5", protocol: "miot", addDef: true},
            7: {name:'Mi Smart Standing Fan 2 Lite (1c)', model: "dmaker.fan.1c", protocol: "miot", addDef: true},
        };
    };

    static vacuum_list() {
        return {
            1: {name:'Mi Robot Vacuum-Mop P (v7)', model: "viomi.vacuum.v7", protocol: "miio", addDef: true}
        };
    };

    static light_list() {
        return {
            1: {name:'Philips Zhirui Downlight (downlight)', model: "philips.light.downlight", protocol: "miio", addDef: true},
            2: {name:'Philips Light Bulb (bulb)', model: "philips.light.bulb", protocol: "miio", addDef: true},
            3: {name:'Philips Wi-Fi bulb E27 White (hbulb)', model: "philips.light.hbulb", protocol: "miio", addDef: true},
            4: {name:'Philips Candle (candle)', model: "philips.light.candle", protocol: "miio", addDef: true},
            5: {name:'Philips Candle 2 (candle2)', model: "philips.light.candle2", protocol: "miio", addDef: true},
            6: {name:'Yeelight ShaoHua Celing Light (ceiling 1)', model: "yeelink.light.ceiling1", protocol: "miio", addDef: false},
            7: {name:'Yeelight LED Ceiling Light (ceiling 3 - 7, 13)', model: "yeelink.light.ceiling1", protocol: "miio", addDef: false},
            8: {name:'Yeelight Square Ceiling Light (ceiling 8, 11)', model: "yeelink.light.ceiling1", protocol: "miio", addDef: false},
            9: {name:'Yeelight HaoShi LED Ceiling Lamp Pro (ceiling 9, 12, 18, 19)', model: "yeelink.light.ceiling1", protocol: "miio", addDef: false},
            10: {name:'Yeelight YLDL01YL (ceiling 10)', model: "yeelink.light.ceiling1", protocol: "miio", addDef: false},
            11: {name:'Yeelight LED Ceiling Mini (ceiling 14)', model: "yeelink.light.ceiling1", protocol: "miio", addDef: false},
            12: {name:'Yeelight LED Ceiling 480 (ceiling 15)', model: "yeelink.light.ceiling1", protocol: "miio", addDef: false},
            13: {name:'Yeelight RGB (ceiling 20)', model: "yeelink.light.ceiling1", protocol: "miio", addDef: false},
            14: {name:'Yeelight ShaoHua Celing Light (ceiling 2)', model: "yeelink.light.ceiling2", protocol: "miio", addDef: true},
            15: {name:'Yeelight LED Ceiling Light (ceiling 16, 17)', model: "yeelink.light.ceiling16", protocol: "miio", addDef: true},
            16: {name:'Yeelight LED Ceiling 260 (ceiling 24)', model: "yeelink.light.ceiling16", protocol: "miio", addDef: true},
            17: {name:'Yeelight C2001 (ceila)', model: "yeelink.light.ceila", protocol: "miio", addDef: true},
            18: {name:'Yeelight Arwen 450S/550S (ceilb)', model: "yeelink.light.ceila", protocol: "miio", addDef: true},
            19: {name:'Yeelight Arwen  450C/550C (ceilc)', model: "yeelink.light.ceila", protocol: "miio", addDef: true},
            21: {name:'Yeelight Minas Ceiling Light (ceild)', model: "yeelink.light.ceila", protocol: "miio", addDef: true},
            22: {name:'Yeelight Lightstrip (strip1)', model: "yeelink.light.strip1", protocol: "miio", addDef: false},
            23: {name:'Yeelight LED Lightstrip 1S (stripa)', model: "yeelink.light.strip1", protocol: "miio", addDef: false},
            24: {name:'Yeelight Lightstrip Plus (strip2)', model: "yeelink.light.strip2", protocol: "miio", addDef: false},
            25: {name:'Yeelight LED Lightstrip 1S (strip6)', model: "yeelink.light.strip2", protocol: "miio", addDef: false},
            26: {name:'Yeelight Chameleon Lightstrip (strip8)', model: "yeelink.light.strip2", protocol: "miio", addDef: false},
            27: {name:'Yeelight Willow LED Lightstrip (strip4)', model: "yeelink.light.strip4", protocol: "miio", addDef: false},
            28: {name:'Mi LED Smart Bulb (White and Color)', model: "yeelink.light.color3", protocol: "miio", addDef: true}
        };
    };
};

module.exports = MIIOdevtypesVocabulary;
