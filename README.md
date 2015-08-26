# Adafruit IO TLS/SSL Tunnel [![Build Status](https://travis-ci.org/adafruit/adafruit-io-tunnel.svg?branch=master)](https://travis-ci.org/adafruit/adafruit-io-tunnel)
A Node.js TLS/SSL tunnel for securely connecting HTTP and MQTT clients to [io.adafruit.com][1].

## Installation
This project was designed to run as a service on a Raspberry Pi. If you would like to connect
to a headless Raspberry Pi for setting up WiFi access, you can use the
[Adafruit Raspberry Pi Finder][4] app to find and connect to your Raspberry Pi.

Once you have setup your Pi, make sure you have the latest stable version of
Node.js installed on your Raspberry Pi. You can download it from the [node-arm][3] project if needed.

```console
pi@tunnel ~ $ node -v
v0.12.6
```

Make sure the global `node_modules` folder on your Raspberry Pi is writable by the `pi` user.

```console
pi@tunnel ~ $ sudo chown -R pi /usr/local
```

Install `forever`, `forever-service`, and `adafruit-io-tunnel` on your Raspberry Pi.

```console
pi@tunnel ~ $ npm install -g forever forever-service adafruit-io-tunnel
```

## Starting the Service
If everything has been installed, you can start the service by running the following command:

```
pi@tunnel ~ $ adafruit-io-tunnel start

                             `:-
                            +NMMy
                          `yMMMMM:
                         :mMMMMMMm`
                       `sMMMMMMMMMs
                      `dMMMMMMMMMMM-
                      hMMMMMMMMMMMMh
   -syyyyyyyyyyso/:` .MMMMMMMMMMMMMN
   yMMMMMMMMMMMMMMNmy:NMMMMMMMMMMMMd
   `sNMMMMMMMMMMMMMMMNNMMMMo:mMMMMm//ossso/:.`
     :mMMMMMMMMMMMMMMMMMMMy  yMMMMmNMMMMMMMMNmhs+:-`
      `sMMMMMMMMMMmsydNMMM+ `mMMMMMMMMMMMMMMMMMMMMNmy
        /mMMMMMMMMd:` ./dMd:hMNmdhhdMMMMMMMMMMMMMMMNy
         .omMMMMMMMMdy+/yMMMMd-```.:mMMMMMMMMMMMNd+.
           `:oymNMMMMMMmdNMMNNdhhdmMMMMMMMMMMMms-`
             :ymNMMMMh:``dMd-+mMMMMMMMMMMMNmy:`
           `yMMMMMMMo `:dMMN. .mMMMMdysso+-`
          `dMMMMMMMMssdMMMMMd- +MMMMMm/
          sMMMMMMMMMMMMMMMMMMNhdMMMMMMM:
         -MMMMMMMMMMMMMMNyMMMMMMMMMMMMMd
        `dMMMMMMMMMMMMMd-:MMMMMMMMMMMMMN
        oMMMMMMMMMMNNy/   +NMMMMMMMMMMMN
       .MMMMMMNmho/-`      -yNMMMMMMMMMN
       `sdho/-`              .omMMMMMMMM
                                -sNMMMMM
                                  `/hMMh
                                      `

starting tunnel on ports 80 and 1883...
```

## Using the Tunnel

Instead of pointing your MQTT or HTTP client at io.adafruit.com, use the IP address
or hostname of your Raspberry Pi.

### HTTP
Requests to port 80 on the Pi will be tunneled to HTTPS port 443 on io.adafruit.com.

### MQTT
Connections to port 1883 on the Pi will be tunneled to MQTTS port 8883 on io.adafruit.com.

## Stopping the Service

```console
pi@tunnel ~ $ adafruit-io-tunnel stop
stopping service...
```

## License

Copyright (c) 2015 Adafruit Industries. Licensed under the MIT license.

Adafruit invests time and resources providing this open source code,
please support Adafruit and open-source hardware by purchasing products
from [Adafruit][2]!
[1]: https://io.adafruit.com
[2]: https://adafruit.com
[3]: http://node-arm.herokuapp.com
[4]: https://learn.adafruit.com/the-adafruit-raspberry-pi-finder
