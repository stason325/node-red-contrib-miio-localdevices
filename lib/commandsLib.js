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
            case "deerma.humidifier.jsq5":
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

            case "zhimi.airp.vb4":
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

            case "leshow.humidifier.jsq1":
                return {
                    "Power": { label: "⏻ Power"},
                    "DelayedTurnOff": { label: "⏻ Delayed TurnOff"},
                    "Mode": { label: "⚙ Mode"},
                    "HeatMode": { label: "♨ Heating Mode"},
                    "FilterDry": { label: "♨ Filter Drying"},
                    "TargetHumidity": { label: "♨ Target Humidity"},
                    "LcdBrightness": { label: "░ Display - Brightness"},
                    "Buzzer": { label: "♪ Sound - On/Off"},
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
            case "zhimi.airpurifier.mc2":
                return {
                    "Power": { label: "⏻ Power"},
                    "Mode": { label: "⚙ Mode"},
                    "FanLevel": { label: "♨ Fan Level"},
                    "Buzzer": { label: "♪ Sound - On/Off"},
                    "LcdBrightness": { label: "░ Display - Brightness"},
                    "ChildLock": { label: "🔒 Child Lock"},
                };

            case "zhimi.airpurifier.mb3":
                return {
                    "Power": { label: "⏻ Power"},
                    "Mode": { label: "⚙ Mode"},
                    "FanLevel": { label: "♨ Fan Level"},
                    "FavSpeed": { label: "❤ Favorite Speed"},
                    "FavoriteLevel": { label: "❤ Favorite Level"},
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

            case "dmaker.airfresh.a1":
                return {
                    "Power": { label: "⏻ Power"},
                    "Mode": { label: "⚙ Mode"},
                    "Display": { label: "░ Display - On/Off"},
                    "Buzzer": { label: "♪ Sound - On/Off"},
                    "ChildLock": { label: "🔒 Child Lock"},
                    "FavSpeed": { label: "❤ Favorite Speed"},
                    "Heating": { label: "♨ Heating - On/Off"},
                };

            case "zhimi.heater.za1":
                return {
                    "Power": { label: "⏻ Power"},
                    "Buzzer": { label: "♪ Sound - On/Off"},
                    "TargetTemperature": { label: "℃ Target Temperature"},
                    "ChildLock": { label: "🔒 Child Lock"},
                };

            case "zhimi.fan.za4":
                return {
                    "Power": { label: "⏻ Power"},
                    "FanLevel": { label: "♨ Fan Level"},
                    "SleepMode": { label: "☀ Sleep Mode"},
                    "Swing": { label: "← → Swing - On/Off"},
                    "SwingAngle": { label: "← → Swing - Angle"},
                    "Buzzer": { label: "♪ Sound - On/Off"},
                    "LcdBrightness": { label: "░ Display - On/Off"},
                    "Timer": { label: "🕐 Timer in seconds"},
                };

            case "zhimi.fan.za5":
                return {
                    "Power": { label: "⏻ Power"},
                    "Timer": { label: "🕐 Timer in msecs"},
                    "Mode": { label: "⚙ Mode"},
                    "FanLevel": { label: "♨ Fan Level"},
                    "Speed": { label: "♨ Fan Speed"},
                    "Swing": { label: "← → Swing - On/Off"},
                    "SwingAngle": { label: "← → Swing - Angle"},
                    "Ionization": { label: "♨ Ionization"},
                    "LcdBrightness": { label: "░ Display - Brightness"},
                    "Buzzer": { label: "♪ Sound - On/Off"},
                    "ChildLock": { label: "🔒 Child Lock"},
                };

            case "dmaker.fan.p18":
                return {
                    "Power": { label: "⏻ Power"},
                    "Timer": { label: "🕐 Timer in minutes"},
                    "Mode": { label: "⚙ Mode"},
                    "FanLevel": { label: "♨ Fan Level"},
                    "Speed": { label: "♨ Fan Speed"},
                    "Direction": { label: "← → Fan Direction"},
                    "Swing": { label: "← → Swing - On/Off"},
                    "SwingAngle": { label: "← → Swing - Angle"},
                    "LcdBrightness": { label: "░ Display - On/Off"},
                    "Buzzer": { label: "♪ Sound - On/Off"},
                    "ChildLock": { label: "🔒 Child Lock"},
                };

            case "dmaker.fan.1c":
                return {
                    "Power": { label: "⏻ Power"},
                    "Timer": { label: "🕐 Timer in minutes"},
                    "Mode": { label: "⚙ Mode"},
                    "FanLevel": { label: "♨ Fan Level"},
                    "Swing": { label: "← → Swing - On/Off"},
                    "LcdBrightness": { label: "░ Display - On/Off"},
                    "Buzzer": { label: "♪ Sound - On/Off"},
                    "ChildLock": { label: "🔒 Child Lock"},
                };
            
            case "zhimi.toilet.sa1":
                return {
                    "Power": { label: "⏻ Power"},
                    "Alarm": { label: "♪ Alarm - On/Off"},
                    "Mode": { label: "⚙ Mode"},                    
                };

            case "viomi.vacuum.v7":
                return {
                    "Charge": { label: "⏻ Charge"},
                    "Clean": { label: "► Clean"},
                    "RepeatClean": { label: "↺ Repeat Clean"},
                    "CleanRooms": { label: "◰ ► Clean Rooms"},
                    "Pause": { label: "❙❙ Pause"},
                    "Stop": { label: "◼ Stop"},
                    "Mode": { label: "⚙ Mode"},
                    "FanLevel": { label: "♨ Fan Level"},
                    "WaterLevel": { label: "☉ Water Level"},
                    "Mute": { label: "♪ Sound - Mute"},
                    "Volume": { label: "♪ Sound - Volume"},
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

            case "yeelink.light.ceiling1":
            case "yeelink.light.ceila":
                return {
                    "Power": { label: "⏻ Power"},
                    "Brightness": { label: "░ Brightness"},
                    "ColorTemperature": { label: "░ Color Temperature"},
                    "SleepMode": { label: "☀ Sleep Mode"},
                };

            case "yeelink.light.ceiling2":
                return {
                    "Power": { label: "⏻ Power"},
                    "Brightness": { label: "░ Brightness"},
                    "SleepMode": { label: "☀ Sleep Mode"},
                };

            case "yeelink.light.ceiling16":
                return {
                    "Power": { label: "⏻ Power"},
                    "Brightness": { label: "░ Brightness"},
                    "ColorTemperature": { label: "░ Color Temperature"},
                };

            case "yeelink.light.strip1":
            case "yeelink.light.strip2":
            case "yeelink.light.color3":
                return {
                    "Power": { label: "⏻ Power"},
                    "Brightness": { label: "░ Brightness"},
                    "ColorTemperature": { label: "░ Color Temperature"},
                    "ColorHSV": { label: "░ HSV Color"},
                };

            case "yeelink.light.strip4":
                return {
                    "Power": { label: "⏻ Power"},
                    "Brightness": { label: "░ Brightness"},
                    "ColorTemperature": { label: "░ Color Temperature"},
                };    
        }

        return {};
    };
};

module.exports = MIIOcommandsVocabulary;
