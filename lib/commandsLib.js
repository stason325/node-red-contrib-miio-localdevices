'use strict';

class MIIOcommandsVocabulary {
    static command_list(model) {
        switch (model) {
            case "deerma.humidifier.mjjsq":
                return {
                    "Power": { label: "⏻ Power"},
                    "FanLevel": { label: "♨ Fan Level"},
                    "TargetHumidity": { label: "♨ Target Humidity"},
                    "Led": { label: "☉ Led - On/Off"},
                    "Buzzer": { label: "♪ Sound - On/Off"},
                };

            case "deerma.humidifier.jsq":
                return {
                    "Power": { label: "⏻ Power"},
                    "Buzzer": { label: "♪ Sound - On/Off"},
                    "FanLevel": { label: "♨ Fan Level"},
                    "TargetHumidity": { label: "♨ Target Humidity"},                    
                    "LedBrightness": { label: "☉ Led - Brightness"},
                    "ChildLock": { label: "🔒 Child Lock"},
                    "Mode": { label: "⚙ Mode"},
                };

            case "deerma.humidifier.jsq4":
                return {
                    "Power": { label: "⏻ Power"},
                    "FanLevel": { label: "♨ Fan Level"},
                    "TargetHumidity": { label: "♨ Target Humidity"},
                    "Buzzer": { label: "♪ Sound - On/Off"},
                    "Bright": { label: "☉ Bright - On/Off"},
                };

            case "zhimi.airpurifier.v7":
                return {
                    "Power": { label: "⏻ Power"},
                    "Mode": { label: "⚙ Mode"},
                    "FavoriteLevel": { label: "❤ Favorite Level"},
                    "Display": { label: "░ Display - On/Off"},
                    "Volume": { label: "♪ Sound - Volume"},
                    "ChildLock": { label: "🔒 Child Lock"},
                };

            case "zhimi.airpurifier.vb2":
                return {
                    "Power": { label: "⏻ Power"},
                    "Mode": { label: "⚙ Mode"},
                    "FanLevel": { label: "♨ Fan Level"},
                    "FavLevel": { label: "❤ Fav Level"},
                    "Buzzer": { label: "♪ Sound - On/Off"},
                    "LcdBrightness": { label: "░ Display - Brightness"},
                    "ChildLock": { label: "🔒 Child Lock"},
                };

            case "zhimi.humidifier.ca1":
            case "zhimi.humidifier.cb1":
            case "zhimi.humidifier.ca4":
                return {
                    "Power": { label: "⏻ Power"},
                    "Buzzer": { label: "♪ Sound - On/Off"},
                    "FanLevel": { label: "♨ Fan Level"},
                    "TargetHumidity": { label: "♨ Target Humidity"},
                    "LedBrightness": { label: "☉ Led - Brightness"},
                    "ChildLock": { label: "🔒 Child Lock"},
                    "Mode": { label: "⚙ Mode"},
                };

            case "nwt.derh.330ef":
                return {
                    "Power": { label: "⏻ Power"},
                    "Mode": { label: "⚙ Mode"},
                    "TargetHumidity": { label: "♨ Target Humidity"},
                    "FanLevel": { label: "♨ Fan Level"},
                };

            case "zhimi.airpurifier.m1":
            case "zhimi.airpurifier.ma2":
                return {
                    "Power": { label: "⏻ Power"},
                    "Mode": { label: "⚙ Mode"},
                    "FavoriteLevel": { label: "❤ Favorite Level"},
                    "Led": { label: "☉ Led - On/Off"},
                    "LedB": { label: "☉ Led B - On/Off"},
                    "Buzzer": { label: "♪ Sound - On/Off"},
                    "ChildLock": { label: "🔒 Child Lock"},
                };

            case "zhimi.airpurifier.ma4":
            case "zhimi.airpurifier.mb3":
            case "zhimi.airpurifier.mc2":
                return {
                    "Power": { label: "⏻ Power"},
                    "Mode": { label: "⚙ Mode"},
                    "FanLevel": { label: "♨ Fan Level"},
                    "Buzzer": { label: "♪ Sound - On/Off"},
                    "LcdBrightness": { label: "░ Display - Brightness"},
                    "ChildLock": { label: "🔒 Child Lock"},
                };

            case "zhimi.airpurifier.mb4":
                return {
                    "Power": { label: "⏻ Power"},
                    "Mode": { label: "⚙ Mode"},
                    "FavSpeed": { label: "❤ Favorite Speed"},
                    "FanLevel": { label: "♨ Fan Level"},
                    "Buzzer": { label: "♪ Sound - On/Off"},
                    "LcdBrightness": { label: "░ Display - Brightness"},
                    "ChildLock": { label: "🔒 Child Lock"},
                };

            case "zhimi.airpurifier.mc1":
                return {
                    "Power": { label: "⏻ Power"},
                    "Mode": { label: "⚙ Mode"},
                    "FavoriteLevel": { label: "❤ Favorite Level"},
                    "Led": { label: "☉ Led - On/Off"},
                    "LedB": { label: "☉ Led B - On/Off"},
                    "Buzzer": { label: "♪ Sound - On/Off"},
                    "ChildLock": { label: "🔒 Child Lock"},
                };

            case "zhimi.heater.za1":
                return {
                    "Power": { label: "⏻ Power"},
                    "Buzzer": { label: "♪ Sound - On/Off"},
                    "TargetTemperature": { label: "℃ Target Temperature"},
                    "ChildLock": { label: "🔒 Child Lock"},
                };

            case "philips.light.downlight":
            case "philips.light.bulb":
                return {
                    "Power": { label: "⏻ Power"},
                    "Brightness": { label: "░ Brightness"},
                    "ColorTemperature": { label: "░ Color Temperature"},
                    "Scene": { label: "⚙ Scene"},
                };

            case "philips.light.candle":
            case "philips.light.candle2":
                return {
                    "Power": { label: "⏻ Power"},
                    "Brightness": { label: "░ Brightness"},
                    "ColorTemperature": { label: "░ Color Temperature"},
                };

            case "philips.light.hbulb":
                return {
                    "Power": { label: "⏻ Power"},
                    "Brightness": { label: "░ Brightness"},
                };
        }

        return {};
    };
};

module.exports = MIIOcommandsVocabulary;