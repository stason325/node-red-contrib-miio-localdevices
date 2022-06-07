'use strict';

class MIIOpropsVocabulary {
    static properties_list(model) {
        switch (model) {
            case "deerma.humidifier.mjjsq":
                return {
                    'Humidifier_Gear' : "Fan_Speed",
                    'Humidity_Value': "Current_Hum",
                    'HumiSet_Value': "Target_Hum",
                    'Led_State': "Light_State",
                    'OnOff_State': "Power",
                    'TemperatureValue': "Current_Temp",
                    'TipSound_State': "Sound_State",
                    'waterstatus': "Water_Level",
                    'watertankstatus': "WaterTank_State",
                };

            case "deerma.humidifier.jsq":
                return {
                    'limit_hum': "Target_Hum",
                    'power': "Power",
                    'humidity': "Current_Hum",
                    'temperature': "Current_Temp",
                    'buzzer': "Sound_State",
                    'led': "Light_State",
                    'depth': "Water_Level",
                    'dry': "Dry_Mode",
                    'child_lock': "Child_Lock",
                    'mode': "Fan_Speed",
                };

            case "deerma.humidifier.jsq4":
                return {
                    'humidifier:on': "Power",
                    'humidifier:fault': "Fault_State",
                    'humidifier:fan-level': "Fan_Speed",
                    'humidifier:target-humidity': "Target_Hum",
                    'environment:relative-humidity': "Current_Hum",
                    'environment:temperature': "Current_Temp",
                    'alarm:alarm': "Alarm",
                    'indicator-light:on': "Light_State",
                    'custom:water-shortage-fault': "Water_Shortage_Fault",
                    'custom:the-tank-filed': "Water_Level",
                };

            case "zhimi.airpurifier.v7":
                return {
                    'power': "Power", // Power (on / off)
                    'mode': "Current_Mode", // Mode (auto / silent / favorite)
                    'favorite_level': "Favorite_Level", // Favorite level (0-16)
                    'temp_dec': "Current_Temp", // Temperature (x10)
                    'humidity': "Current_Hum", // Humidity (%)
                    'aqi': "Air_Quality_Index", // Air Quality Index
                    'average_aqi': "Average_AQI", // Average Air Quality Index
                    'led': "Light_State", // Display status (on / off)
                    'bright': "Brightness", // Illuminance
                    'volume': "Sound_Volume", // Sound volume (0-100)
                    'filter1_life': "Filter_Life", // Filter life (%)
                    'f1_hour': "Filter_max_life_hours", // Filter max life
                    'f1_hour_used': "Filter_hours_used", // Filter hours used
                    'motor1_speed': "Fan_Speed_1", // Fan speed (RPM)
                    'motor2_speed': "Fan_Speed_2", // 2nd fan speed (RPM)
                    'child_lock': "Child_Lock", // Child lock (on / off)
                };

            case "zhimi.airpurifier.vb2":
                return {
                    'air-purifier:fault': "Fault_State",
                    'air-purifier:on': "Power",
                    'air-purifier:fan-level': "Fan_Speed",
                    'air-purifier:mode': "Current_Mode",
                    'environment:pm2.5-density': "PM25_Density",
                    'environment:relative-humidity': "Current_Hum",
                    'environment:temperature': "Current_Temp",
                    'filter:filter-life-level': "Filter_Life_Level",
                    'indicator-light:brightness': "Brightness",
                    'indicator-light:on': "Light_State",
                    'physical-controls-locked:physical-controls-locked': "Child_Lock",
                };

            case "zhimi.humidifier.ca1":
            case "zhimi.humidifier.cb1":
            case "zhimi.humidifier.ca4":
                return {
                    'limit_hum': "Target_Hum",
                    'power': "Power",
                    'humidity': "Current_Hum",
                    'temperature': "Current_Temp",
                    'buzzer': "Sound_State",
                    'led': "Light_State",
                    'depth': "Water_Level",
                    'dry': "Dry_Mode",
                    'child_lock': "Child_Lock",
                    'mode': "Fan_Speed",
                }

            case "nwt.derh.330ef":
                return {
                    'dehumidifier:on': "Power",
                    'dehumidifier:mode': "Dry_Mode",
                    'dehumidifier:target-humidity': "Target_Hum",
                    'environment:relative-humidity': "Current_Hum",
                    'alarm:alarm': "Alarm",
                    'indicator-light:on': "Light_State",
                    'physical-controls-locked:physical-controls-locked': "Child_Lock",
                    'event-service:water-tank-status': "WaterTank_State",
                };

            case "leshow.humidifier.jsq1":
                return {
                    'humidifier:on': "Power",
                    'humidifier:fault': "Fault_State",
                    'humidifier:mode': "Dry_Mode",
                    'device:turn-off-dry-turn': "Filter_Drying",
                    'device:warm-wind-turn': "Heating_Mode",
                    'device:water-percentage': "Water_Level",
                    'humidifier:target-humidity': "Target_Hum",
                    'environment:relative-humidity': "Current_Hum",
                    'device:tsms-turn-off': "Delayed_TurnOff",
                    'device:screen-brightness': "Brightness",
                    'alarm:alarm': "Sound_State",
                };

            case "zhimi.airpurifier.m1":
            case "zhimi.airpurifier.ma2":
                return {
                    'power': "Power",
                    'mode': "Current_Mode",
                    'favorite_level': "Favorite_Level",
                    'temp_dec': "Current_Temp",
                    'humidity': "Current_Hum",
                    'aqi': "Air_Quality_Index",
                    'buzzer': "Sound_State",
                    'led': "Light_State",
                    'filter1_life': "Filter_Life",
                    'f1_hour': "Filter_max_life_hours",
                    'f1_hour_used': "Filter_hours_used",
                    'child_lock': "Child_Lock",
                };

            case "zhimi.airpurifier.ma4":
            case "zhimi.airpurifier.mb3":
            case "zhimi.airpurifier.mc2":
                return {
                    'air-purifier:fault': "Fault_State",
                    'air-purifier:on': "Power",
                    'air-purifier:fan-level': "Fan_Speed",
                    'air-purifier:mode': "Current_Mode",
                    'environment:pm2.5-density': "PM25_Density",
                    'environment:relative-humidity': "Current_Hum",
                    'environment:temperature': "Current_Temp",
                    'filter:filter-life-level': "Filter_Life",
                    'filter:filter-used-time': "Filter_hours_used",
                    'alarm:alarm': "Alarm",
                    'indicator-light:brightness': "Brightness",
                    'indicator-light:on': "Light_State",
                    'physical-controls-locked:physical-controls-locked': "Child_Lock",
                };

            case "zhimi.airpurifier.mb4":
                return {
                    'air-purifier:fault': "Fault_State",
                    'air-purifier:on': "Power",
                    'air-purifier:mode': "Current_Mode",
                    'environment:pm2.5-density': "PM25_Density",
                    'filter:filter-life-level': "Filter_Life",
                    'filter:filter-used-time': "Filter_hours_used",
                    'alarm:alarm': "Alarm",
                    'screen:brightness': "Brightness",
                    'physical-controls-locked:physical-controls-locked': "Child_Lock",
                    'custom-service:favorite-speed': "Favorite_Speed",
                    'custom-service:moto-speed-rpm': "Current_Speed",
                };

            case "zhimi.airpurifier.mc1":
                return {
                    'power': "Power",
                    'mode': "Current_Mode",
                    'favorite_level': "Favorite_Level",
                    'temp_dec': "Current_Temp",
                    'humidity': "Current_Hum",
                    'aqi': "Air_Quality_Index",
                    'buzzer': "Sound_State",
                    'led': "Light_State",
                    'filter1_life': "Filter_Life",
                    'f1_hour': "Filter_max_life_hours",
                    'f1_hour_used': "Filter_hours_used",
                    'child_lock': "Child_Lock",
                };

            case "dmaker.airfresh.a1":
                return {
                    'power': "Power",
                    'mode': "Current_Mode",
                    'display': "Display_State",
                    'sound': "Sound_State",
                    'child_lock': "Child_Lock",
                    'favourite_speed': "Favorite_Speed",
                    'control_speed': "Control_Speed",
                    'pm25': "PM25_Density",
                    'co2': "CO2_Density",
                    'temperature_outside': "Temp_Outside",
                    'ptc_on': "Heating_OnOff",
                    'ptc_status': "Heating_Status",
                    'filter_rate': "Filter_Used_%",
                    'filter_day': "Filter_Life_Days",
                };

            case "zhimi.heater.za1":
                return {
                    'power': "Power",
                    'target_temperature': "Target_Temp",
                    'brightness': "Brightness",
                    'buzzer': "Sound_State",
                    'child_lock': "Child_Lock",
                    'temperature': "Current_Temp",
                    'use_time': "Use_Time",
                    'relative_humidity': "Current_Hum",
                };

            case "zhimi.fan.za4":
                return {
                    'power': "Power",
                    'angle': "Swing_Angle",
                    'angle_enable': "Swing_State",
                    'speed_level': "Fan_Speed",
                    'natural_level': "Natural_Speed",
                    'child_lock': "Child_Lock",
                    'poweroff_time': "PowerOff_Delay",
                    'buzzer': "Sound_State",
                    'led_b': "Light_State",
                };

            case "zhimi.fan.za5":
                return {
                    'fan:on': "Power",
                    'fan:fan-level': "Fan_Level",
                    'fan:horizontal-swing': "Swing_State",
                    'fan:horizontal-angle': "Swing_Angle",
                    'fan:mode': "Fan_Mode",
                    'fan:off-delay': "PowerOff_Delay",
                    'fan:anion': "Ionization_State",
                    'physical-controls-locked:physical-controls-locked': "Child_Lock",
                    'indicator-light:brightness': "Brightness",
                    'alarm:alarm': "Sound_State",
                    'environment:relative-humidity': "Current_Hum",
                    'environment:temperature': "Current_Temp",
                    'custom-service:button-press': "Button_Pressed",
                    'custom-service:battery-state': "Battery_State",
                    'custom-service:speed-now': "Fan_Speed_RPM",
                    'custom-service:ac-state': "AC_State",
                    'custom-service:speed-level': "Fan_Speed_percent"
                };

            case "dmaker.fan.p18":
                return {
                    'fan:on': "Power",
                    'fan:off-delay-time': "PowerOff_Delay",
                    'fan:mode': "Fan_Mode",
                    'fan:fan-level': "Fan_Level",
                    'fan:speed-level': "Fan_Speed",
                    'fan:horizontal-swing': "Swing_State",
                    'fan:horizontal-angle': "Swing_Angle",
                    'fan:brightness': "Light_State",
                    'fan:alarm': "Sound_State",
                    'physical-controls-locked:physical-controls-locked': "Child_Lock",
                };

            case "zhimi.toilet.sa1":
                return {
                    'toilet:on': "Power",
                    'toilet:seating-state': "State",
                    'toilet:washing-strength': "Washing_Strength",
                    'toilet:nozzle-position': "Nozzle_Position",
                    'toilet:deodorization': "Deodorization_State",
                    'toilet:mode': "Current_Mode",
                    'seat:heating': "Heating_State",
                    'seat:heat-level': "Heating_Level",
                    'night-light:on': "NightLight_State",
                    'filter:filter-life-level': "Filter_Life",
                    'alarm:alarm': "Alarm",
                };

            case "viomi.vacuum.v7":
                return {
                    'run_state': "Current_CleanUp_State",
                    'repeat_state': "Repeat_CleanUp_State",
                    'err_state': "Error_Code",
                    'battary_life': "Battery",
                    'is_charge': "Charging_State",
                    's_time': "CleanUp_Time",
                    's_area': "CleanUp_Area",
                    'v_state': "Volume", 
                    'box_type': "Bin_Type",
                    'is_mop': "Mop_State",
                    'mop_type': "Mop_Mode",
                    'suction_grade': "Fan_speed",
                    'water_grade': "Water_level",
                    'side_brush_hours': "Side_brush_used_hours",
                    'side_brush_life': "Side_brush_total_hours",
                    'main_brush_hours': "Main_brush_used_hours",
                    'main_brush_life': "Main_brush_total_hours",
                    'hypa_hours': "Hypa_used_hours",
                    'hypa_life': "Hypa_total_hours",
                    'mop_hours': "Mop_used_hours",
                    'mop_life': "Mop_total_hours",
                };

            case "philips.light.downlight":
            case "philips.light.bulb":
            case "philips.light.candle":
            case "philips.light.candle2":
                return {
                    'power': "Power",
                    'bright': "Brightness",
                    'cct': "Color_Temp",
                    'snm': "Scene",
                    'dv': "Delay_Off",
                };
                
            case "philips.light.hbulb":
                return {
                    'power': "Power",
                    'bri': "Brightness",
                    'dv': "Delay_Off",
                };

            case "yeelink.light.ceiling1":
            case "yeelink.light.ceila":
            case "yeelink.light.ceiling2":
            case "yeelink.light.ceiling16":
                return {
                    'power': "Power",
                    'night_mode': "Night_Mode",
                    'bright': "Brightness",
                    'ct': "Color_Temp",
                    'nl_br': "Night_Light",
                };
                
            case "yeelink.light.strip1":
            case "yeelink.light.strip2":
            case "yeelink.light.strip4":
            case "yeelink.light.color3":
                return {
                    'power': "Power",
                    'bright': "Brightness",
                    'ct': "Color_Temp",
                    'hue': "Color_HUE",
                    'saturation': "Color_Saturation",
                };
        }

        return {};
    };
};

module.exports = MIIOpropsVocabulary;