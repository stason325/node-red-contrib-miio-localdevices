# node-red-contrib-miio-localdevices

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

### Setting Up:
1) Configure your device with configuaration node

... 2 pictures here

2) For obtaining MiHome tokens please check out this guide:

<https://github.com/Maxmudjon/com.xiaomi-miio/blob/master/docs/obtain_token.md>

3) Set up controlling nodes in line with pictures and example:

... picture of get-node, then picture of set-node with opened list of commands

4) Overall flow should look like that:

... picture of the flow

### Example
You can import attached [example.json](examples/example.json) from Node-Red Import menu.
## Future Updates and Improvement
- [x] add auto-polling option with configurable interval
- [ ] implement MIOT protocol
- [ ] enlarge the list of devices with those operated via MIOT protocol

## Reporting an issue and new devices support requests
Please feel free to report all issues and to request support for new devices.


