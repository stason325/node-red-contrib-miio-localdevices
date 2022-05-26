# List of supported devices 

<h2>1) Humidifiers / Dehumidifiers</h2>
  <table>
    <thead>
      <tr>
        <th width="20">#</th>
        <th width="150">Model</th>
        <th width="150">Name</th>
        <th width="150">Image</th>
        <th width="200">Available Single Commands </th>
        <th width="200">Values for Commands</th>
        <th width="150">Available Commands for Custom JSON {}</th>
        <th>Cloud Auth </th>
        <th>Import File</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>deerma.humidifier.mjjsq</td>
        <td>Mi Smart Humidifier</td>
        <td>
          <img src="https://static.home.mi.com/app/image/get/file/developer_1542871940fn9a3b3y.png" width="100">
        </td>
        <td><ul><li>⏻ Power</li><li>♨ Fan Level</li><li>♨ Target Humidity</li><li>☉ Led - On/Off</li><li>♪ Sound - On/Off</li></ul></td>
        <td><ul><li>true / false</li><li>1, 2, 3, 4</li><li>40, 50, 60, 70</li><li>true / false</li><li>true / false</li></ul></td>
        <td>{ Power, FanLevel, TargetHumidity, Led, Buzzer }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#9989;</td>
      </tr>
      <tr>
        <td>2</td>
        <td>deerma.humidifier.jsq</td>
        <td>
          <p>Mi Smart Antibacterial Humidifier (jsq)</p>
        </td>
        <td>
          <img src="https://cdn.awsde0.fds.api.mi-img.com/miio.files/developer_1584598944z7vf4g16.png" width="100">
        </td>
        <td><ul><li>⏻ Power</li><li>♪ Sound - On/Off</li><li>♨ Fan Level</li><li>♨ Target Humidity</li><li>☉ Led - Brightness</li><li>🔒 Child Lock</li><li>⚙ Mode</li></ul></td>
        <td><ul><li>true / false</li><li>true / false</li><li>1, 2, 3, 4</li><li>30, 40, 50, 60, 70, 80</li><li>string</li><li>true / false</li><li>string: "dry" / "humidity"</li></ul></td>
        <td>{ Power, Buzzer, FanLevel, TargetHumidity, LedBrightness, ChildLock, Mode }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#10060;</td>
      </tr>
      <tr>
        <td>3</td>
        <td>deerma.humidifier.jsq4</td>
        <td>
          <p>Mijia CJSJSQ01DY Pure Evaporation (jsq4)</p>
          <p>Mi Smart Antibacterial Humidifier (jsq5)</p>
        </td>
        <td>
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1616123889270TXVYhdbh.png" width="100">
          <img src="https://cdn.awsde0.fds.api.mi-img.com/miio.files/developer_1584598944z7vf4g16.png" width="100">
        </td>
        <td><ul><li>⏻ Power</li><li>♨ Fan Level</li><li>♨ Target Humidity</li><li>♪ Sound - On/Off</li><li>☉ Bright - On/Off</li></ul></td>
        <td><ul><li>true / false</li><li>1, 2, 3</li><li>30, 40, 50, 60, 70, 80</li><li>true / false</li><li>true / false</li></ul></td>
        <td>{ Power, FanLevel, TargetHumidity, Buzzer, Bright }</td>  
        <td align="center">&#9989;</td>
        <td align="center">&#9989;</td>
      </tr>
      <tr>
        <td>4</td>
        <td>zhimi.humidifier.ca1</td>
        <td>Smartmi Evaporative Humidifier</td>
        <td>
          <img src="https://static.home.mi.com/app/image/get/file/developer_1551944227gt6o909y.png" width="100">
        </td>
        <td><ul><li>⏻ Power</li><li>♪ Sound - On/Off</li><li>♨ Fan Level</li><li>♨ Target Humidity</li><li>☉ Led - Brightness</li><li>🔒 Child Lock</li><li>⚙ Mode</li></ul></td>
        <td><ul><li>true / false</li><li>true / false</li><li>0, 1, 2, 3</li><li>30, 40, 50, 60, 70, 80</li><li>string</li><li>true / false</li><li>string: "dry" / "humidity"</li></ul></td>
        <td>{ Power, Buzzer, FanLevel, TargetHumidity, LedBrightness, ChildLock, Mode }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#9989;</td>
      </tr>
      <tr>
        <td>5</td>
        <td>zhimi.humidifier.ca4</td>
        <td>Smartmi Evaporative Humidifier</td>
        <td>
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1575251878117y5EMNnGn.png" width="100">
        </td>
        <td><ul><li>⏻ Power</li><li>♪ Sound - On/Off</li><li>♨ Fan Level</li><li>♨ Target Humidity</li><li>☉ Led - Brightness</li><li>🔒 Child Lock</li><li>⚙ Mode</li></ul></td>
        <td><ul><li>true / false</li><li>true / false</li><li>1, 2, 3, 4</li><li>30, 40, 50, 60, 70, 80</li><li>string</li><li>true / false</li><li>string: "dry" / "humidity"</li></ul></td>
        <td>{ Power, Buzzer, FanLevel, TargetHumidity, LedBrightness, ChildLock, Mode }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#10060;</td>
      </tr>
      <tr>
        <td>6</td>
        <td>zhimi.humidifier.cb1</td>
        <td>Smartmi Evaporative Humidifier</td>
        <td>
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1566881006690Xccq6g7F.png" width="100">
        </td>
        <td><ul><li>⏻ Power</li><li>♪ Sound - On/Off</li><li>♨ Fan Level</li><li>♨ Target Humidity</li><li>☉ Led - Brightness</li><li>🔒 Child Lock</li><li>⚙ Mode</li></ul></td>
        <td><ul><li>true / false</li><li>true / false</li><li>0, 1, 2, 3</li><li>30, 40, 50, 60, 70, 80</li><li>string</li><li>true / false</li><li>string: "dry" / "humidity"</li></ul></td>
        <td>{ Power, Buzzer, FanLevel, TargetHumidity, LedBrightness, ChildLock, Mode }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#9989;</td>
      </tr>
      <tr>
        <td>7</td>
        <td>nwt.derh.330ef</td>
        <td>NWT Internet Dehumidifier 30L</td>
        <td>
          <img src="https://static.home.mi.com/app/image/get/file/developer_1566907639xeqcwivl.png" width="100">
        </td>
        <td><ul><li>⏻ Power</li><li>⚙ Mode</li><li>♨ Target Humidity</li><li>♨ Fan Level</li></ul></td>
        <td><ul><li>true / false</li><li>string: "dry" / "humidity"</li><li>30, 40, 50, 60, 70, 80</li><li>1, 2, 3, 4</li></ul></td>
        <td>{ Power, Mode, TargetHumidity, FanLevel }</td>
        <td align="center">&#9989;</td>
        <td align="center">&#10060;</td>
      </tr>
      <tr>
        <td>8</td>
        <td>leshow.humidifier.jsq1</td>
        <td>Mijia Pure Intelligent Humidifier Pro (jsq1)</td>
        <td>
          <img src="https://cnbj1.fds.api.xiaomi.com/iotweb-product-center/174a1dd784b331ca251794d036ac2855_产品拟物图2.png" width="100">
        </td>
        <td><ul><li>⏻ Power</li><li>⏻ Delayed TurnOff</li><li>⚙ Mode</li><li>♨ Heating Mode</li><li>♨ Filter Drying</li><li>♨ Target Humidity</li><li>░ Display - Brightness</li><li>♪ Sound - On/Off</li></ul></td>
        <td><ul><li>true / false</li><li>0 - 480 secs</li><li>0 - Const Humidity, 1 - Strong, 2 - Sleep</li><li>true / false</li><li>true / false</li><li>40, 50, 60, 70</li><li>0 / 1</li><li>true / false</li></ul></td>
        <td>{ Power, DelayedTurnOff, Mode, HeatMode, FilterDry, TargetHumidity, LcdBrightness, Buzzer }</td>
        <td align="center">&#9989;</td>
        <td align="center">&#9989;</td>
      </tr>
    </tbody>
  </table>

<h2>2) Air Purifiers</h2>
  <table>
    <thead>
      <tr>
        <th width="20">#</th>
        <th width="150">Model</th>
        <th width="150">Name</th>
        <th width="150">Image</th>
        <th width="200">Available Single Commands </th>
        <th width="200">Values for Commands</th>
        <th width="150">Available Commands for Custom JSON {}</th>
        <th>Cloud Auth </th>
        <th>Import File</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>zhimi.airpurifier.v7</td>
        <td>Mi Air Purifier Pro</td>
        <td><img src="https://static.home.mi.com/app/image/get/file/developer_1551944689505i5ubr.png" width="100"></td>
        <td><ul><li>⏻ Power</li><li>⚙ Mode</li><li>❤ Favorite Level</li><li>░ Display - On/Off</li><li>♪ Sound - Volume</li><li>🔒 Child Lock</li></ul></td>
        <td><ul><li>true / false</li><li>string: "auto" / "silent" / "favorite"</li><li>0 - 16</li><li>true / false</li><li>0 - 100</li><li>true / false</li></ul></td>
        <td>{ Power, Mode, FavoriteLevel, Display, Volume, ChildLock }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#10060;</td>
      </tr>
      <tr>
        <td>2</td>
        <td>zhimi.airpurifier.vb2</td>
        <td>Mi Air Purifier Pro H</td>
        <td><img src="http://static.home.mi.com/app/image/get/file/developer_1543307568u9wu6wij.png" width="100"></td>
        <td><ul><li>⏻ Power</li><li>⚙ Mode</li><li>♨ Fan Level</li><li>❤ Fav Level</li><li>♪ Sound - On/Off</li><li>░ Display - Brightness</li><li>🔒 Child Lock</li></ul></td>
        <td><ul><li>true / false</li><li>string: "auto" / "sleep" / "favorite" / "none"</li><li>1, 2, 3</li><li>1 - 9</li><li>true / false</li><li>0 - brightest, 1 - glimmer, 2 - led_closed</li><li>true / false</li></ul></td>
        <td>{ Power, Mode, FanLevel, FavLevel, Buzzer, LcdBrightness, ChildLock }</td>
        <td align="center">&#9989;</td>
        <td align="center">&#9989;</td>
      </tr>
      <tr>
        <td>3</td>
        <td>zhimi.airpurifier.m1</td>
        <td>Mi Air Purifier 2</td>
        <td><img src="https://static.home.mi.com/app/image/get/file/developer_15470144879uw2ei4h.png" width="100"></td>
        <td><ul><li>⏻ Power</li><li>⚙ Mode</li><li>❤ Favorite Level</li><li>☉ Led - On/Off</li><li>☉ Led B - On/Off</li><li>♪ Sound - On/Off</li><li>🔒 Child Lock</li></ul></td>
        <td><ul><li>true / false</li><li>string: "auto" / "silent" / "favorite"</li><li>0 - 16</li><li>true / false</li><li>true / false</li><li>true / false</li><li>true / false</li></ul></td>
        <td>{ Power, Mode, FavoriteLevel, Led, LedB, Buzzer, ChildLock }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#9989;</td>
      </tr>
      <tr>
        <td>4</td>
        <td>zhimi.airpurifier.ma2</td>
        <td>Mi Air Purifier 2S</td>
        <td><img src="https://static.home.mi.com/app/image/get/file/developer_15470144879uw2ei4h.png" width="100"></td>
        <td><ul><li>⏻ Power</li><li>⚙ Mode</li><li>❤ Favorite Level</li><li>☉ Led - On/Off</li><li>☉ Led B - On/Off</li><li>♪ Sound - On/Off</li><li>🔒 Child Lock</li></ul></td>
        <td><ul><li>true / false</li><li>string: "auto" / "silent" / "favorite"</li><li>0 - 16</li><li>true / false</li><li>true / false</li><li>true / false</li><li>true / false</li></ul></td>
        <td>{ Power, Mode, FavoriteLevel, Led, LedB, Buzzer, ChildLock }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#9989;</td>
      </tr>
      <tr>
        <td>5</td>
        <td>zhimi.airpurifier.ma4</td>
        <td>Mi Air Purifier 3</td>
        <td><img src="https://static.home.mi.com/app/image/get/file/developer_1543307568u9wu6wij.png" width="100"></td>
        <td><ul><li>⏻ Power</li><li>⚙ Mode</li><li>♨ Fan Level</li><li>♪ Sound - On/Off</li><li>░ Display - Brightness</li><li>🔒 Child Lock</li></ul></td>
        <td><ul><li>true / false</li><li>string: "auto" / "sleep" / "favorite" / "none"</li><li>1, 2, 3</li><li>true / false</li><li>0 - brightest, 1 - glimmer, 2 - led_closed</li><li>true / false</li></ul></td>
        <td>{ Power, Mode, FanLevel, Buzzer, LcdBrightness, ChildLock }</td>
        <td align="center">&#9989;</td>
        <td align="center">&#10060;</td>
      </tr>
      <tr>
        <td>6</td>
        <td>zhimi.airpurifier.mb3</td>
        <td>Mi Air Purifier 3H</td>
        <td><img src="https://cdn.awsde0.fds.api.mi-img.com/miio.files/developer_15504816557tej1pj6.png" width="100"></td>
        <td><ul><li>⏻ Power</li><li>⚙ Mode</li><li>♨ Fan Level</li><li>♪ Sound - On/Off</li><li>░ Display - Brightness</li><li>🔒 Child Lock</li></ul></td>
        <td><ul><li>true / false</li><li>string: "auto" / "sleep" / "favorite" / "none"</li><li>1, 2, 3</li><li>true / false</li><li>0 - brightest, 1 - glimmer, 2 - led_closed</li><li>true / false</li></ul></td>
        <td>{ Power, Mode, FanLevel, Buzzer, LcdBrightness, ChildLock }</td>
        <td align="center">&#9989;</td>
        <td align="center">&#10060;</td>
      </tr>
      <tr>
        <td>7</td>
        <td>zhimi.airpurifier.mb4</td>
        <td>Mi Air Purifier 3C</td>
        <td><img src="https://cdn.awsde0.fds.api.mi-img.com/miio.files/developer_15504816557tej1pj6.png" width="100"></td>
        <td><ul><li>⏻ Power</li><li>⚙ Mode</li><li>❤ Favorite Speed</li><li>♨ Fan Level</li><li>♪ Sound - On/Off</li><li>░ Display - Brightness</li><li>🔒 Child Lock</li></ul></td>
        <td><ul><li>true / false</li><li>string: "auto" / "sleep" / "favorite" / "none"</li><li>string: "auto" / "silent" / "medium" / "high"</li><li>300 - 2200</li><li>true / false</li><li>0 - brightest, 1 - glimmer, 2 - led_closed</li><li>true / false</li></ul></td>
        <td>{ Power, Mode, FavSpeed, FanLevel, Buzzer, LcdBrightness, ChildLock }</td>
        <td align="center">&#9989;</td>
        <td align="center">&#9989;</td>
      </tr>
      <tr>
        <td>8</td>
        <td>zhimi.airpurifier.mc1</td>
        <td>Mi Air Purifier 2S</td>
        <td><img src="https://static.home.mi.com/app/image/get/file/developer_15470144879uw2ei4h.png" width="100"></td>
        <td><ul><li>⏻ Power</li><li>⚙ Mode</li><li>❤ Favorite Level</li><li>☉ Led - On/Off</li><li>☉ Led B - On/Off</li><li>♪ Sound - On/Off</li><li>🔒 Child Lock</li></ul></td>
        <td><ul><li>true / false</li><li>string: "auto" / "sleep" / "favorite" / "none"</li><li>0 - 16</li><li>true / false</li><li>true / false</li><li>true / false</li><li>true / false</li></ul></td>
        <td>{ Power, Mode, FavoriteLevel, Led, LedB, Buzzer, ChildLock }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#9989;</td>
      </tr>
      <tr>
        <td>9</td>
        <td>zhimi.airpurifier.mc2</td>
        <td>Mi Air Purifier 2H</td>
        <td><img src="https://static.home.mi.com/app/image/get/file/developer_15470144879uw2ei4h.png" width="100"></td>
        <td><ul><li>⏻ Power</li><li>⚙ Mode</li><li>♨ Fan Level</li><li>♪ Sound - On/Off</li><li>░ Display - Brightness</li><li>🔒 Child Lock</li></ul></td>
        <td><ul><li>true / false</li><li>string: "auto" / "sleep" / "favorite" / "none"</li><li>1, 2, 3</li><li>true / false</li><li>0 - brightest, 1 - glimmer, 2 - led_closed</li><li>true / false</li></ul></td>
        <td>{ Power, Mode, FanLevel, Buzzer, LcdBrightness, ChildLock }</td>
        <td align="center">&#9989;</td>
        <td align="center">&#10060;</td>
      </tr>
      <tr>
        <td>10</td>
        <td>dmaker.airfresh.a1</td>
        <td>Mijia New Fan A1</td>
        <td><img src="https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1571025407906ABkSN0nP.png" width="100"></td>
        <td><ul><li>⏻ Power</li><li>⚙ Mode</li><li>░ Display - On/Off</li><li>♪ Sound - On/Off</li><li>🔒 Child Lock</li><li>❤ Favorite Speed</li><li>♨ Heating - On/Off</li></ul></td>
        <td><ul><li>true / false</li><li>0 - auto, 1 - sleep, 2 - favorite</li><li>true / false</li><li>true / false</li><li>true / false</li><li>60 - 150</li><li>true / false</li></ul></td>
        <td>{ Power, Mode, Display, Buzzer, ChildLock, FavSpeed, Heating }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#9989;</td>
      </tr>
    </tbody>
  </table>

  <h2>3) Heaters, Fans & Toilets</h2>
  <table>
    <thead>
      <tr>
        <th width="20">#</th>
        <th width="150">Model</th>
        <th width="150">Name</th>
        <th width="150">Image</th>
        <th width="200">Available Single Commands </th>
        <th width="200">Values for Commands</th>
        <th width="150">Available Commands for Custom JSON {}</th>
        <th>Cloud Auth </th>
        <th>Import File</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>zhimi.heater.za1</td>
        <td>SmartMi Electric Heater 1S</td>
        <td><img src="https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1639643044442TWB1cChs.png" width="100"></td>
        <td><ul><li>⏻ Power</li><li>♪ Sound - On/Off</li><li>℃ Target Temperature</li><li>🔒 Child Lock</li></ul></td>
        <td><ul><li>true / false</li><li>true / false</li><li>16 - 32</li><li>true / false</li></ul></td>
        <td>{ Power, Buzzer, TargetTemperature, ChildLock }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#9989;</td>
      </tr>
      <tr>
        <td>2</td>
        <td>zhimi.fan.za4</td>
        <td>Smartmi Standing Fan 1 (sa1, za1), 2 (za3), 2S (za4)</td>
        <td><img src="https://static.home.mi.com/app/image/get/file/developer_1541408255kg3xtr1j.png" width="100"></td>
        <td><ul><li>⏻ Power</li><li>♨ Fan Level</li><li>☀ Sleep Mode</li><li>← → Swing - On/Off</li><li>← → Swing - Angle</li><li>♪ Sound - On/Off</li><li>░ Display - On/Off</li><li>🕐 Timer in seconds</li></ul></td>
        <td><ul><li>true / false</li><li>1 - 4</li><li>1 - 4</li><li>true / false</li><li>0 - 120</li><li>2 / 0</li><li>string: "on" / "off"</li><li>XX seconds</li></ul></td>
        <td>{ Power, FanLevel, SleepMode, Swing, SwingAngle, Buzzer, LcdBrightness, Timer }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#10060;</td>
      </tr>
      <tr>
        <td>3</td>
        <td>dmaker.fan.p18</td>
        <td>Mi Smart Standing Fan 2 (p10, p18)</td>
        <td><img src="https://cdn.awsusor1.fds.api.mi-img.com/iotweb-product-center/developer_15972184073099haFbYTk.png" width="100"></td>
        <td><ul><li>⏻ Power</li><li>🕐 Timer in minutes</li><li>⚙ Mode</li><li>♨ Fan Level</li><li>♨ Fan Speed</li><li>← → Fan Direction</li><li>← → Swing - On/Off</li><li>← → Swing - Angle</li><li>░ Display - On/Off</li><li>♪ Sound - On/Off</li><li>🔒 Child Lock</li></ul></td>
        <td><ul><li>true / false</li><li>0 - 480</li><li>0 - Straight Wind, 1 - Natural Wind</li><li>1, 2, 3, 4</li><li>0 - 100</li><li>0 - none, 1 - left, 2 - right</li><li>tue / false</li><li>30, 60, 90, 120, 140</li><li>true / false</li><li>true / false</li><li>true / false</li></ul></td>
        <td>{ Power, Timer, Mode, FanLevel, Speed, Direction, Swing, SwingAngle, LcdBrightness, Buzzer, ChildLock }</td>
        <td align="center">&#9989;</td>
        <td align="center">&#9989;</td>
      </tr>
      <tr>
        <td>4</td>
        <td>zhimi.toilet.sa1</td>
        <td>Smartmi Smart Bidet Toilet Seat Pro</td>
        <td><img src="https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1577765179435CyXcWINp.png" width="100"></td>
        <td><ul><li>⏻ Power</li><li>⚙ Wash Strength</li><li>⚙ Nozzle Position</li><li>⚙ Deodorization - On/Off</li><li>⚙ Mode</li><li>♨ Heating - On/Off</li><li>♨ Heat Level</li><li>☉ NightLight - On/Off</li><li>♪ Alarm - On/Off</li></ul></td>
        <td><ul><li>true / false</li><li>1 - 4</li><li>1 - 4</li><li>true / false</li><li>1 - Posterior Wash, 2 - Feminine Wash, 3 - Air Dry, 4 - Idle</li><li>true / false</li><li>0 - 4</li><li>true / false</li><li>true / false</li></ul></td>
        <td>{ Power, WashStrength, NozzlePos, Deodorization, Mode, Heating, HeatLevel, NightLight, Alarm }</td>
        <td align="center">&#9989;</td>
        <td align="center">&#9989;</td>
      </tr>
    </tbody>
  </table>

  <h2>4) Vacuum Cleaners</h2>
  <table>
    <thead>
      <tr>
        <th width="20">#</th>
        <th width="150">Model</th>
        <th width="150">Name</th>
        <th width="150">Image</th>
        <th width="200">Available Single Commands </th>
        <th width="200">Values for Commands</th>
        <th width="150">Available Commands for Custom JSON {}</th>
        <th>Cloud Auth </th>
        <th>Import File</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>viomi.vacuum.v7</td>
        <td>Mi Robot Vacuum-Mop P</td>
        <td><img src="https://static.home.mi.com/app/image/get/file/developer_156211621715fdn2i1.png" width="100"></td>
        <td><ul>
          <li>⏻ Charge</li><li>► Clean</li><li>↺ Repeat Clean</li>
          <li>◰ ► Clean Rooms</li>
          <li>❙❙ Pause</li><li>◼ Stop</li>
          <li>⚙ Mode</li>
          <li>♨ Fan Level</li>
          <li>☉ Water Level</li>
          <li>♪ Sound - Mute</li><li>♪ Sound - Volume</li>
        </ul></td>
        <td><ul>
          <li>true / false</li><li>timestamp</li><li>true / false</li>
          <li>array of rooms' IDs (each ID>=10; rooms are ranked by area size starting from the smallest): [10, 11, …]</li>
          <li>timestamp</li><li>timestamp</li>
          <li>string: "vacuum" / "vacuum-mop" / "mop"</li>
          <li>string: "silent" / "standard" / "medium" / "turbo"</li>
          <li>string: "low" / "medium" / "high"</li>
          <li>true / false</li><li>1 - 100</li>
        </ul></td>
        <td>{ Charge, Clean, RepeatClean, CleanRooms, Pause, Stop, Mode, FanLevel, WaterLevel, Mute, Volume }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#9989;</td>
      </tr>
    </tbody>
  </table>

  <h2>5) Lights</h2>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th width="150">Model</th>
        <th width="150">Name</th>
        <th width="150">Image</th>
        <th width="200">Available Single Commands </th>
        <th width="200">Values for Commands</th>
        <th width="150">Available Commands for Custom JSON {}</th>
        <th>Cloud Auth </th>
        <th>Import File</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>philips.light.downlight</td>
        <td>Philips Zhirui Downlight</td>
        <td><img src="https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_163910713663097kIz1us.png" width="100"></td>
        <td><ul><li>⏻ Power</li><li>░ Brightness</li><li>░ Color Temperature</li><li>⚙ Scene</li></ul></td>
        <td><ul><li>true / false</li><li>1 - 100</li><li>1 - 100</li><li>0 - none, 1 - lighting, 2 - TV, 3 - Wormth, 4 - Night Light</li></ul></td>
        <td>{ Power, Brightness, ColorTemperature, Scene }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#9989;</td>
      </tr>
       <tr>
        <td>2</td>
        <td>philips.light.bulb</td>
        <td>Philips Light Bulb</td>
        <td><img src="http://static.home.mi.com/app/image/get/file/developer_1522407953modw7wox.png" width="100"></td>
        <td><ul><li>⏻ Power</li><li>░ Brightness</li><li>░ Color Temperature</li><li>⚙ Scene</li></ul></td>
        <td><ul><li>true / false</li><li>1 - 100</li><li>1 - 100</li><li>1 - lighting, 2 - Night Light, 3 - TV, 4 - Wormth</li></ul></td>
        <td>{ Power, Brightness, ColorTemperature, Scene }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#9989;</td>
      </tr>
      <tr>
        <td>3</td>
        <td>philips.light.hbulb</td>
        <td>Philips Wi-Fi bulb E27 White</td>
        <td><img src="http://static.home.mi.com/app/image/get/file/developer_1522407953modw7wox.png" width="100"></td>
        <td><ul><li>⏻ Power</li><li>░ Brightness</li></ul></td>
        <td><ul><li>true / false</li><li>1 - 100</li></ul></td>
        <td>{ Power, Brightness }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#9989;</td>
      </tr>
      <tr>
        <td>4</td>
        <td>philips.light.candle</td>
        <td>Philips Candle</td>
        <td><img src="https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1639568383016c3tBnNav.png" width="100"></td>
        <td><ul><li>⏻ Power</li><li>░ Brightness</li><li>░ Color Temperature</li></ul></td>
        <td><ul><li>true / false</li><li>1 - 100</li><li>1 - 100</li></ul></td>
        <td>{ Power, Brightness, ColorTemperature }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#9989;</td>
      </tr>
      <tr>
        <td>5</td>
        <td>philips.light.candle2</td>
        <td>Philips Candle 2</td>
        <td><img src="https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1639548423185Z8zhZvpr.png" width="100"></td>
        <td><ul><li>⏻ Power</li><li>░ Brightness</li><li>░ Color Temperature</li></ul></td>
        <td><ul><li>true / false</li><li>1 - 100</li><li>1 - 100</li></ul></td>
        <td>{ Power, Brightness, ColorTemperature }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#9989;</td>
      </tr>
      <tr>
        <td>6</td>
        <td>yeelink.light.ceiling1</td>
        <td>
          <p>Yeelight ShaoHua Celing Light (ceiling 1)</p>
          <p>Yeelight LED Ceiling Light (ceiling 3 - 7, 13)</p>
          <p>Yeelight Square Ceiling Light (ceiling 8, 11)</p>
          <p>Yeelight HaoShi LED Ceiling Lamp Pro (ceiling 9, 12, 18, 19)</p>
          <p>Yeelight YLDL01YL (ceiling 10)</p>
          <p>Yeelight LED Ceiling Mini (ceiling 14)</p>
          <p>Yeelight LED Ceiling 480 (ceiling 15)</p>
          <p>Yeelight RGB (ceiling 20)</p>
        </td>
        <td>
          <img src="http://static.home.mi.com/app/image/get/file/developer_1522404220fc1599ca.png" width="100">
          <img src="http://static.home.mi.com/app/image/get/file/developer_1522409464p7ymuvm8.png" width="100">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1639549180470LMnHRnvR.png" width="100">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1639381023213CCbJHb9e.png" width="100">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1639121694502D5FER5nu.png" width="100">
        </td>
        <td><ul><li>⏻ Power</li><li>░ Brightness</li><li>░ Color Temperature</li><li>☀ Sleep Mode</li></ul></td>
        <td><ul><li>true / false</li><li>1 - 100</li><li>2700 - 6500</li><li>1 - Day, 2 - Night</li></ul></td>
        <td>{ Power, Brightness, ColorTemperature, SleepMode }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#10060;</td>
      </tr>
      <tr>
        <td>7</td>
        <td>yeelink.light.ceiling2</td>
        <td>
          <p>Yeelight ShaoHua Celing Light (ceiling 2)</p>
        </td>
        <td>
          <img src="http://static.home.mi.com/app/image/get/file/developer_1522404220fc1599ca.png" width="100">
        </td>
        <td><ul><li>⏻ Power</li><li>░ Brightness</li><li>☀ Sleep Mode</li></ul></td>
        <td><ul><li>true / false</li><li>1 - 100</li><li>1 - Day, 2 - Night</li></ul></td>
        <td>{ Power, Brightness, SleepMode }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#9989;</td>
      </tr>
      <tr>
        <td>8</td>
        <td>yeelink.light.ceiling16</td>
        <td>
          <p>Yeelight LED Ceiling Light (ceiling 16, 17)</p>
          <p>Yeelight LED Ceiling 260 (ceiling 24)</p>
        </td>
        <td>
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1639643106451l8hc04ZS.png" width="100">
        </td>
        <td><ul><li>⏻ Power</li><li>░ Brightness</li><li>░ Color Temperature</li></ul></td>
        <td><ul><li>true / false</li><li>1 - 100</li><li>3000 - 5700</li></ul></td>
        <td>{ Power, Brightness, ColorTemperature }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#9989;</td>
      </tr>
      <tr>
        <td>9</td>
        <td>yeelink.light.ceila</td>
        <td>
          <p>Yeelight C2001 (ceila)</p>
          <p>Yeelight Arwen 450S/550S (ceilb)</p>
          <p>Yeelight Arwen  450C/550C (ceilc)</p>
          <p>Yeelight Minas Ceiling Light (ceild)</p>
        </td>
        <td>
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1639568936367JEeuio8S.png" width="100">
        </td>
        <td><ul><li>⏻ Power</li><li>░ Brightness</li><li>░ Color Temperature</li><li>☀ Sleep Mode</li></ul></td>
        <td><ul><li>true / false</li><li>1 - 100</li><li>2700 - 6500</li><li>0 - Day, 1 - Night</li></ul></td>
        <td>{ Power, Brightness, ColorTemperature, SleepMode }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#9989;</td>
      </tr>
      <tr>
        <td>10</td>
        <td>yeelink.light.strip1</td>
        <td>
          <p>Yeelight Lightstrip (strip1)</p>
          <p>Yeelight LED Lightstrip 1S (stripa)</p>
        </td>
        <td>
          <img src="http://static.home.mi.com/app/image/get/file/developer_1522402108a74o9ufa.png" width="100">
        </td>
        <td><ul><li>⏻ Power</li><li>░ Brightness</li><li>░ Color Temperature</li><li>░ HSV Color</li></ul></td>
        <td><ul><li>true / false</li><li>1 - 100</li><li>1700 - 6500</li><li>object {hue: XX,satuartion: YY}</li></ul></td>
        <td>{ Power, Brightness, ColorTemperature, ColorHSV }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#10060;</td>
      </tr>
      <tr>
        <td>11</td>
        <td>yeelink.light.strip2</td>
        <td>
          <p>Yeelight Lightstrip Plus (strip2)</p>
          <p>Yeelight LED Lightstrip 1S (strip6)</p>
          <p>Yeelight Chameleon Lightstrip (strip8)</p>
        </td>
        <td>
          <img src="http://static.home.mi.com/app/image/get/file/developer_1522402108a74o9ufa.png" width="100">
        </td>
        <td><ul><li>⏻ Power</li><li>░ Brightness</li><li>░ Color Temperature</li><li>░ HSV Color</li></ul></td>
        <td><ul><li>true / false</li><li>1 - 100</li><li>1700 - 6500</li><li>object {hue: XX,satuartion: YY}</li></ul></td>
        <td>{ Power, Brightness, ColorTemperature, ColorHSV }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#10060;</td>
      </tr>
      <tr>
        <td>12</td>
        <td>yeelink.light.strip4</td>
        <td>
          <p>Yeelight Willow LED Lightstrip (strip4)</p>
        </td>
        <td>
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/iotweb-product-center/developer_1639381158825FAnuYkJ2.png" width="100">
        </td>
        <td><ul><li>⏻ Power</li><li>░ Brightness</li><li>░ Color Temperature</li></ul></td>
        <td><ul><li>true / false</li><li>1 - 100</li><li>1700 - 6500</li></ul></td>
        <td>{ Power, Brightness, ColorTemperature }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#10060;</td>
      </tr>
      <tr>
        <td>13</td>
        <td>yeelink.light.color3</td>
        <td>
          <p>Mi LED Smart Bulb (White and Color)</p>
        </td>
        <td>
          <img src="https://cdn.awsusor0.fds.api.mi-img.com/miio.files/developer_15239567889mgx5j3j.png" width="100">
        </td>
        <td><ul><li>⏻ Power</li><li>░ Brightness</li><li>░ Color Temperature</li><li>░ HSV Color</li></ul></td>
        <td><ul><li>true / false</li><li>1 - 100</li><li>1700 - 6500</li><li>object {hue: XX,satuartion: YY}</li></ul></td>
        <td>{ Power, Brightness, ColorTemperature, ColorHSV }</td>
        <td align="center">&#10060;</td>
        <td align="center">&#9989;</td>
      </tr>
    </tbody>
  </table>