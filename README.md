# node-red-contrib-miio-localdevices

[![platform](https://img.shields.io/badge/platform-Node--RED-red?logo=nodered)](https://nodered.org)
[![Min Node Version](https://img.shields.io/node/v/node-red-contrib-miio-localdevices.svg)](https://nodejs.org/en/)
[![GitHub](https://img.shields.io/github/license/stason325/node-red-contrib-miio-localdevices)](https://github.com/stason325/node-red-contrib-miio-localdevices/blob/master/LICENSE)
![Repo size](https://img.shields.io/github/repo-size/stason325/node-red-contrib-miio-localdevices)

[![GitHub version](https://img.shields.io/github/package-json/v/stason325/node-red-contrib-miio-localdevices?logo=npm)](https://www.npmjs.com/package/node-red-contrib-miio-localdevices)
[![Package Quality](https://packagequality.com/shield/node-red-contrib-miio-localdevices.svg)](https://packagequality.com/#?package=node-red-contrib-miio-localdevices)
![GitHub last commit](https://img.shields.io/github/last-commit/stason325/node-red-contrib-miio-localdevices/master)
![NPM Total Downloads](https://img.shields.io/npm/dt/node-red-contrib-miio-localdevices.svg)
![NPM Downloads per month](https://img.shields.io/npm/dm/node-red-contrib-miio-localdevices)
[![issues](https://img.shields.io/github/issues/stason325/node-red-contrib-miio-localdevices?logo=github)](https://github.com/stason325/node-red-contrib-miio-localdevices/issues)




Node-Red Nodes for Xiaomi humidifiers and purifiers which can be operated locally via MIIO protocol.

## References

Based on `node-mihome` library: <https://github.com/maxinminax/node-mihome>

Inspired by `@spongioblast`: <https://github.com/spongioblast/node-red-contrib-local-mihome>

## List of supported devices
See [DEVICES.md](DEVICES.md) for full list of supported devices and commands available for them.

## Installation

```sh
npm install node-red-contrib-miio-localdevices
```
## Description and Setup
### Available nodes:
* MIIOgetdata
* MIIOsencommand
* devices (configuration node)

You can find nodes in `mihome` section.

![NR-Miio_pic9.png](images/NR-Miio_pic9.png)

### Setting Up:
1) Configure your device with configuaration node

![NR-Miio_pic1.png](images/NR-Miio_pic1.png)
![NR-Miio_pic2.png](images/NR-Miio_pic2.png)

2) For obtaining MiHome tokens please check out this guide:

<https://github.com/Maxmudjon/com.xiaomi-miio/blob/master/docs/obtain_token.md>

3) Set up controlling nodes in line with pictures and example:

![NR-Miio_pic3.png](images/NR-Miio_pic3.png)

4) Overall flow could look like that (instead of or together with dashboard nodes you can use Alice-nodes, HomeKit-nodes etc.):

![NR-Miio_pic4.png](images/NR-Miio_pic4.png)

Ta make sure that your flow works properly I would recommend using certain hints (like in [example.json](examples/example.json) attached):
- save data to context and use filter-nodes to prevent looping in your flow
- ~~send input message (timestamp) to GET-notes only after making changes to configuration of your device ... don't overpush GET-node~~ (*depreciated*)
- try not to trigger several SEND-nodes related to the same device at the same time - this can lead to "call to device timed out" error and as a result you will need to reboot Node Red to restore connection with the device


### Device Status Updates and Errors
Get node:
1) ~~sending JSON with actual device characteristics is trigered by input message~~ (*depreciated: starting from 0.3.0 there is no input in GET-not, JSON with current device properties is sent automatically after saving device configuration and deploying*)
2) you can poll your device once or continuously with some interval, for that please check the box and choose polling interval in configuration node (*starting from 0.3.0 if auto-polling is turned on, GET-node sends JSON with actual characteristics only if these sharacteristics have changed*)
3) if polling was successful you will see "Connection: OK" or "State: changed" green status under the node and after that get message with actual device characteristics

![NR-Miio_pic6.png](images/NR-Miio_pic6.png)


![NR-Miio_pic10.png](images/NR-Miio_pic10.png)

4) some MIOT devices could require authorization in your MiHome account (please see collumn "Cloud Auth" in [DEVICES.md](DEVICES.md)). If you failed to get JSON with device charecteristics without MiHome auth, fill in your MiHome credentials in config node and try to poll the device once again (I hope you will not need it).

Send command node:
1) If sending command was successful and device supports your command (please see [DEVICES.md](DEVICES.md)) you will see ok-status under the node.

![NR-Miio_pic5.png](images/NR-Miio_pic5.png)

2) Some devices are not basically included into Node-mihome library but supported through node-red-contrib-miio-localdevices (please see collumn "Import File" in [DEVICES.md](DEVICES.md)). If you have such device you need to download additionally the definition-file for your device. Do it this way:

* go to `Pittini`'s library: <https://github.com/Pittini/iobroker-nodemihome/tree/main/DefinitionfilesForNode-Mihome>
* download definition js-file for your device
* copy it to your Node-Red folder: `~/.node-red/node_modules/node-mihome/lib/devices`
* reboot Nodered.

Errors and Exceptions:
1) in case of errors you will see red status under the node and get message with the nature of error accured.

 ![NR-Miio_pic7.png](images/NR-Miio_pic7.png)

 ![NR-Miio_pic8.png](images/NR-Miio_pic8.png)

### Flow Example
You can import attached [example.json](examples/example.json) from Node-Red Import menu.
## Future Updates and Improvement
- [x] add auto-polling option with configurable interval
- [x] implement MIOT protocol + add MIOT-humidifiers and purifiers
- [ ] enlarge the list of devices with those operated via MIIO and MIOT protocols (not only humidifiers and purifiers)
- [ ] shorten the list of commands in SEND-node to those which are applicable only to the device chosen 

## Reporting an issue and new devices support requests
Please feel free to report all issues and to request support for new devices.


