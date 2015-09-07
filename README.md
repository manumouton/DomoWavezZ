# DomoWaveZ project

## Razberry configuration

### Hardware configuration

The complete configuration of this project has been done using the following devices:

* a [Raspberry PI 2 model B] (https://www.raspberrypi.org/products/raspberry-pi-2-model-b/) and all needed options (power plug, box, ...) 
* a micro SD 16Gb memory card
* [An Razberry Zwave+ from Zwave.me extension card] (http://razberry.z-wave.me/index.php?id=9)

And some Zwave or Zwave+ devices to test the good overall functionality of the product:

* [Danfoss living connect radiator thermostats] (http://heating.danfoss.com/PCMPDF/living-connect_OEM_VQIDA15T_013R9563.pdf)
* [A TBK wall switch] (http://www.tkbhome.com/?cn-p-d-110.html)
* [An Aeon Labs multisnsor 6] (http://aeotec.com/z-wave-sensor)

### SOftware configuration

#### Raspberry setup

The Razberry Zwave+ extension card allows two different installation modes: [see here] (http://razberry.z-wave.me/index.php?id=24). 

In order to get as much flexibility as I could, I skipped the installation with a complete image dedicated to the Razberry component
and chose to install my raspberry from scratch though using the [Noobs operating system] (https://www.raspberrypi.org/help/noobs-setup/).

After setup, I configured SSH access to the raspberry pi and installed [RPIMonitor] (http://elinux.org/RPi-Monitor) to monitor
my Raspberry performances and accesses.

#### Razberry setup

To download the last version of the Razberry, simply login your pi and run the following command:
> wget -q -O - razberry.z-wave.me/install | sudo bash

The same command might be used to update your system to the last version. 

By default, the complete Razberry package is installed in /opt/z-way-server/. You can check other dependencies needed 
[at this adress] (http://razberry.z-wave.me/install).