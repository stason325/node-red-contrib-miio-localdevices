# node-red-contrib-miio-localdevices

[![platform](https://img.shields.io/badge/platform-Node--RED-red)](https://nodered.org)

Node-Red Nodes for Xiaomi humidifiers and purifiers which can be operated locally via MIIO protocol.

## References

Based on Node-Mihome library: <https://github.com/maxinminax/node-mihome>

Inspired by: <https://github.com/spongioblast/node-red-contrib-local-mihome>

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

You can find nodes in "mihome" section.

![NR-Miio_pic9.png](images/NR-Miio_pic9.png)

### Setting Up:
1) Configure your device with configuaration node

![NR-Miio_pic1.png](images/NR-Miio_pic1.png)
![NR-Miio_pic2.png](images/NR-Miio_pic2.png)

2) For obtaining MiHome tokens please check out this guide:

<https://github.com/Maxmudjon/com.xiaomi-miio/blob/master/docs/obtain_token.md>

3) Set up controlling nodes in line with pictures and example:

![NR-Miio_pic3.png](images/NR-Miio_pic3.png)

4) Overall flow should look like that:

![NR-Miio_pic4.png](images/NR-Miio_pic4.png)

### Errors and Device Status Updates
Get node:
* sending JSON with actual device characteristics is trigered by input message
* you can poll your device once or continuously with some interval, for that please choose polling interval in configuration node and check the box in get-node
* if polling was successful you will see ok-status under the node and after that get message with actual device characteristics

![NR-Miio_pic6.png](images/NR-Miio_pic6.png)

Send command node:
* If sending command was successful and device supports your command (please see [DEVICES.md](DEVICES.md)) you will see ok-status under the node.

![NR-Miio_pic5.png](images/NR-Miio_pic5.png)

Errors and Exceptions:
* in case of errors you will see red status under the node and get message with the nature of error accured.

 ![NR-Miio_pic7.png](images/NR-Miio_pic7.png)

 ![NR-Miio_pic8.png](images/NR-Miio_pic8.png)

### Flow Example
You can import attached [example.json](examples/example.json) from Node-Red Import menu.
## Future Updates and Improvement
- [x] add auto-polling option with configurable interval
- [ ] implement MIOT protocol
- [ ] enlarge the list of devices with those operated via MIOT protocol

## Reporting an issue and new devices support requests
Please feel free to report all issues and to request support for new devices.


