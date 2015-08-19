exports.status = {"data": "OK", "code": 200, "message": "200 OK", "error": null};
exports.namespaces = {
    "data": [{
        "id": "devices_text",
        "params": [{"deviceId": "InfoWidget_5_0", "deviceName": "Dear Expert User"}]
    }, {
        "id": "devices_thermostat",
        "params": [{"deviceId": "ZWayVDev_zway_2-0-67", "deviceName": "Thermostat 2-0 Danfoss Couloir"}]
    }, {
        "id": "devices_battery",
        "params": [{"deviceId": "ZWayVDev_zway_2-0-128", "deviceName": "Battery 2-0 Danfoss Couloir"}]
    }, {
        "id": "devices_all",
        "params": [{"deviceId": "InfoWidget_5_0", "deviceName": "Dear Expert User"}, {
            "deviceId": "ZWayVDev_zway_2-0-67",
            "deviceName": "Thermostat 2-0 Danfoss Couloir"
        }, {"deviceId": "ZWayVDev_zway_2-0-128", "deviceName": "Battery 2-0 Danfoss Couloir"}]
    }], "code": 200, "message": "200 OK", "error": null
};
exports.modules = {
    "data": [{
        "dependencies": [],
        "singleton": false,
        "category": "security",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "AutoLock",
        "version": "1.1.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Automated Locking of Door",
            "description": "Door/Window Sensor automatically closes lock when door is closed.",
            "BinarySensor": null,
            "DoorLock": null
        },
        "schema": {
            "type": "object",
            "properties": {
                "BinarySensor": {
                    "field": "enum",
                    "datasource": "namespaces",
                    "enum": "namespaces:devices_sensorBinary:deviceId",
                    "required": true
                },
                "DoorLock": {
                    "field": "enum",
                    "datasource": "namespaces",
                    "enum": "namespaces:devices_doorlock:deviceId",
                    "required": true
                },
                "delay": {"type": "integer", "minimum": 1}
            },
            "required": true
        },
        "options": {
            "fields": {
                "BinarySensor": {
                    "label": "Door/Window Sensor",
                    "type": "select",
                    "datasource": "namespaces",
                    "field": "optionLabels",
                    "optionLabels": "namespaces:devices_sensorBinary:deviceName"
                },
                "DoorLock": {
                    "label": "Door Lock",
                    "type": "select",
                    "datasource": "namespaces",
                    "field": "optionLabels",
                    "optionLabels": "namespaces:devices_doorlock:deviceName"
                },
                "delay": {"label": "Delay in seconds", "type": "integer"}
            }
        },
        "id": "AutoLock",
        "className": "AutoLock",
        "created": false
    }, {
        "singleton": false,
        "dependencies": [],
        "category": "scheduling",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "AutoOff",
        "version": "1.0.1",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Automated Switch Off",
            "description": "Turns off a linked device automatically after a defined time.",
            "timeout": 5,
            "device": ""
        },
        "schema": {
            "type": "object",
            "properties": {
                "device": {
                    "field": "enum",
                    "datasource": "namespaces",
                    "enum": "namespaces:devices_switchBinary:deviceId,namespaces:devices_switchMultilevel:deviceId",
                    "required": true
                }, "timeout": {"type": "number", "required": true}
            },
            "required": false
        },
        "options": {
            "fields": {
                "device": {
                    "label": "Device:",
                    "datasource": "namespaces",
                    "field": "optionLabels",
                    "optionLabels": "namespaces:devices_switchBinary:deviceName,namespaces:devices_switchMultilevel:deviceName"
                }, "timeout": {"label": "Timeout in seconds:"}
            }
        },
        "id": "AutoOff",
        "className": "AutoOff",
        "created": false
    }, {
        "singleton": true,
        "dependencies": ["Cron"],
        "category": "scheduling",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "state": "hidden",
        "icon": "icon.png",
        "moduleName": "BatteryPolling",
        "version": "2.0.1",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Battery Polling",
            "description": "Set up an interval that regularly polls the battery status of a battery devices.",
            "launchWeekDay": 0,
            "warningLevel": 20
        },
        "schema": {
            "type": "object",
            "properties": {
                "launchWeekDay": {"type": "number", "required": true, "enum": [-1, 1, 2, 3, 4, 5, 6, 0]},
                "warningLevel": {"type": "select", "required": true, "enum": [5, 10, 15, 20]}
            },
            "required": false
        },
        "options": {
            "fields": {
                "launchWeekDay": {
                    "label": "Do battery polling on",
                    "optionLabels": ["Every Day", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
                },
                "warningLevel": {
                    "label": "Warning Level",
                    "helper": "Warn if device's battery is below this level",
                    "optionLabels": ["5%", "10%", "15%", "20%"]
                }
            }
        },
        "id": "BatteryPolling",
        "className": "BatteryPolling",
        "created": false
    }, {
        "singleton": false,
        "dependencies": [],
        "category": "automation",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "BindDevices",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "If -> Then Relation",
            "description": "One or more devices are switched if one event has happened. This event could for example caused by a motion / door sensor that was turned on or by the status change of a switch.",
            "sourceDevices": [],
            "targetDevices": []
        },
        "schema": {
            "type": "object",
            "properties": {
                "sourceDevices": {
                    "type": "array",
                    "items": {
                        "field": "enum",
                        "datasource": "namespaces",
                        "enum": "namespaces:devices_switchControl:deviceId,namespaces:devices_switchBinary:deviceId,namespaces:devices_switchMultilevel:deviceId,namespaces:devices_sensorBinary:deviceId",
                        "required": true
                    }
                },
                "targetDevices": {
                    "type": "array",
                    "items": {
                        "field": "enum",
                        "datasource": "namespaces",
                        "enum": "namespaces:devices_switchBinary:deviceId,namespaces:devices_switchMultilevel:deviceId,namespaces:devices_doorlock:deviceId",
                        "required": true
                    }
                }
            },
            "required": false
        },
        "options": {
            "fields": {
                "sourceDevices": {
                    "label": "List of event sources:",
                    "fields": {
                        "item": {
                            "type": "select",
                            "datasource": "namespaces",
                            "field": "optionLabels",
                            "optionLabels": "namespaces:devices_switchControl:deviceName,namespaces:devices_switchBinary:deviceName,namespaces:devices_switchMultilevel:deviceName,namespaces:devices_sensorBinary:deviceName"
                        }
                    }
                },
                "targetDevices": {
                    "label": "List of actors:",
                    "fields": {
                        "item": {
                            "type": "select",
                            "datasource": "namespaces",
                            "field": "optionLabels",
                            "optionLabels": "namespaces:devices_switchBinary:deviceName,namespaces:devices_switchMultilevel:deviceName,namespaces:devices_doorlock:deviceName"
                        }
                    }
                }
            }
        },
        "id": "BindDevices",
        "className": "BindDevices",
        "created": false
    }, {
        "singleton": false,
        "dependencies": [],
        "category": "surveillance",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "state": "camera",
        "icon": "icon.png",
        "moduleName": "Camera",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Web Camera",
            "description": "This module include configuration for a camera and create camera device.",
            "url": "",
            "zoomInUrl": "",
            "zoomOutUrl": "",
            "leftUrl": "",
            "rightUrl": "",
            "upUrl": "",
            "downUrl": "",
            "openUrl": "",
            "closeUrl": "",
            "user": "",
            "password": "",
            "doorDevices": []
        },
        "schema": {
            "type": "object",
            "properties": {
                "url": {"format": "uri", "required": true},
                "zoomInUrl": {"format": "uri", "required": false},
                "zoomOutUrl": {"format": "uri", "required": false},
                "leftUrl": {"format": "uri", "required": false},
                "rightUrl": {"format": "uri", "required": false},
                "upUrl": {"format": "uri", "required": false},
                "downUrl": {"format": "uri", "required": false},
                "openUrl": {"format": "uri", "required": false},
                "closeUrl": {"format": "uri", "required": false},
                "user": {"required": false},
                "password": {"required": false},
                "doorDevices": {
                    "type": "array",
                    "items": {
                        "field": "enum",
                        "datasource": "namespaces",
                        "enum": "namespaces:devices_doorlock:deviceId,namespaces:devices_switchBinary:deviceId",
                        "required": false
                    }
                }
            },
            "required": false
        },
        "options": {
            "fields": {
                "url": {"label": "Camera URL", "type": "url", "required": true},
                "zoomInUrl": {"label": "ZoomIn URL", "type": "url", "required": false},
                "zoomOutUrl": {"label": "ZoomOut URL", "type": "url", "required": false},
                "leftUrl": {"label": "Left URL", "type": "url", "required": false},
                "rightUrl": {"label": "Right URL", "type": "url", "required": false},
                "upUrl": {"label": "Up URL", "type": "url", "required": false},
                "downUrl": {"label": "Down URL", "type": "url", "required": false},
                "openUrl": {"label": "Open URL", "type": "url", "required": false},
                "closeUrl": {"label": "Close URL", "type": "url", "required": false},
                "user": {
                    "label": "Username for HTTP authentication",
                    "helper": "Leave empty if camera is not protected by a password",
                    "required": false
                },
                "password": {
                    "label": "Password for HTTP authentication",
                    "helper": "Leave empty if camera is not protected by a password",
                    "required": false
                },
                "doorDevices": {
                    "label": "Door device",
                    "fields": {
                        "item": {
                            "type": "select",
                            "datasource": "namespaces",
                            "field": "optionLabels",
                            "optionLabels": "namespaces:devices_doorlock:deviceName,namespaces:devices_switchBinary:deviceName"
                        }
                    }
                }
            }
        },
        "id": "Camera",
        "className": "Camera",
        "created": false
    }, {
        "singleton": false,
        "dependencies": [],
        "category": "devices",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "CodeDevice",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Code Device",
            "description": "Create virtual device based on JavaScript code.",
            "deviceType": "",
            "setterOn_toggleButton": "",
            "getter_sensorBinary": "",
            "getterPollInterval_sensortBinary": 0,
            "getter_sensorMultilevel": "",
            "getterPollInterval_sensorMultilevel": 0,
            "scale_sensorMultilevel": "",
            "setterOn_switchBinary": "",
            "setterOff_switchBinary": "",
            "getter_switchBinary": "",
            "getterPollInterval_switchtBinary": 0,
            "setterLevel_switchMultilevel": "",
            "getter_switchMultilevel": "",
            "getterPollInterval_switchtMultilevel": 0
        },
        "schema": {
            "type": "object",
            "properties": {
                "deviceType": {
                    "type": "string",
                    "enum": ["toggleButton", "sensorBinary", "sensorMultilevel", "switchBinary", "switchMultilevel"],
                    "default": "toggleButton",
                    "required": true
                },
                "setterOn_toggleButton": {"type": "string", "required": true, "dependencies": "deviceType"},
                "getter_sensorBinary": {"type": "string", "required": true, "dependencies": "deviceType"},
                "getterPollInterval_sensorBinary": {"type": "integer", "required": false, "dependencies": "deviceType"},
                "getter_sensorMultilevel": {"type": "string", "required": true, "dependencies": "deviceType"},
                "getterPollInterval_sensorMultilevel": {
                    "type": "integer",
                    "required": false,
                    "dependencies": "deviceType"
                },
                "scale_sensorMultilevel": {"type": "string", "required": false, "dependencies": "deviceType"},
                "setterOn_switchBinary": {"type": "string", "required": true, "dependencies": "deviceType"},
                "setterOff_switchBinary": {"type": "string", "required": true, "dependencies": "deviceType"},
                "getter_switchBinary": {"type": "string", "required": false, "dependencies": "deviceType"},
                "getterPollInterval_switchBinary": {"type": "integer", "required": false, "dependencies": "deviceType"},
                "setterLevel_switchMultilevel": {"type": "string", "required": true, "dependencies": "deviceType"},
                "getter_switchMultilevel": {"type": "string", "required": false, "dependencies": "deviceType"},
                "getterPollInterval_switchMultilevel": {
                    "type": "integer",
                    "required": false,
                    "dependencies": "deviceType"
                }
            }
        },
        "options": {
            "fields": {
                "deviceType": {"type": "select"},
                "setterOn_toggleButton": {
                    "label": "Code for action On",
                    "placeholder": "somefunction()",
                    "dependencies": {"deviceType": "toggleButton"}
                },
                "getter_sensorBinary": {
                    "label": "Code to get value",
                    "placeholder": "somefunction()",
                    "helper": "Should return 'on' or 'off' values",
                    "dependencies": {"deviceType": "sensorBinary"}
                },
                "getterPollInterval_sensorBinary": {
                    "label": "Interval in seconds between polling requests",
                    "helper": "Empty or 0 to disable periodical requests (explicit update command will still initiate request process)",
                    "dependencies": {"deviceType": "sensorBinary"}
                },
                "getter_sensorMultilevel": {
                    "label": "Code to get value",
                    "placeholder": "somefunction()",
                    "helper": "Should return number",
                    "dependencies": {"deviceType": "sensorMultilevel"}
                },
                "getterPollInterval_sensorMultilevel": {
                    "label": "Interval in seconds between polling requests",
                    "helper": "Empty or 0 to disable periodical requests (explicit update command will still initiate request process)",
                    "dependencies": {"deviceType": "sensorMultilevel"}
                },
                "scale_sensorMultilevel": {"label": "Sensor scale", "dependencies": {"deviceType": "sensorMultilevel"}},
                "setterOn_switchBinary": {
                    "label": "Code for action On",
                    "placeholder": "somefunction(%%)",
                    "helper": "%% will represent value 'on'",
                    "dependencies": {"deviceType": "switchBinary"}
                },
                "setterOff_switchBinary": {
                    "label": "Code for action Off",
                    "placeholder": "somefunction(%%)",
                    "helper": "%% will represent value 'off'",
                    "dependencies": {"deviceType": "switchBinary"}
                },
                "getter_switchBinary": {
                    "label": "Code to get value",
                    "placeholder": "somefunction()",
                    "helper": "Should return 'on' or 'off' value",
                    "dependencies": {"deviceType": "switchBinary"}
                },
                "getterPollInterval_switchBinary": {
                    "label": "Interval in seconds between polling requests",
                    "helper": "Empty or 0 to disable periodical requests (explicit update command will still initiate request process)",
                    "dependencies": {"deviceType": "switchBinary"}
                },
                "setterLevel_switchMultilevel": {
                    "label": "Code for action",
                    "placeholder": "somefunction(%%)",
                    "helper": "%% will represent value from 0 to 99",
                    "dependencies": {"deviceType": "switchMultilevel"}
                },
                "getter_switchMultilevel": {
                    "label": "Code to get value",
                    "placeholder": "somefunction()",
                    "helper": "Should return value from 0 to 99",
                    "dependencies": {"deviceType": "switchMultilevel"}
                },
                "getterPollInterval_switchMultilevel": {
                    "label": "Interval in seconds between polling requests",
                    "helper": "Empty or 0 to disable periodical requests (explicit update command will still initiate request process)",
                    "dependencies": {"deviceType": "switchMultilevel"}
                }
            }
        },
        "id": "CodeDevice",
        "className": "CodeDevice",
        "created": false
    }, {
        "singleton": true,
        "dependencies": [],
        "category": "scheduling",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "state": "hidden",
        "icon": "icon.png",
        "moduleName": "Cron",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {"title": "System Clock (CRON)", "description": "Scheduler used by other modules"},
        "schema": {},
        "options": {},
        "id": "Cron",
        "className": "Cron",
        "created": true
    }, {
        "singleton": false,
        "dependencies": [],
        "category": "scripting",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "CustomUserCode",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Load custom JavaScript code",
            "description": "Allows to load custom JavaScript code on system load.",
            "customCode": ""
        },
        "schema": {"type": "object", "properties": {"customCode": {"type": "string"}}, "required": false},
        "options": {
            "toolbarSticky": true,
            "fields": {"customCode": {"type": "textarea", "label": "Your JavaScript code:", "cols": 40}}
        },
        "id": "CustomUserCode",
        "className": "CustomUserCode",
        "created": false
    }, {
        "singleton": false,
        "dependencies": [],
        "category": "scripting",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "CustomUserCodeLoader",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Load custom JavaScript file",
            "description": "Allows to load JavaScript files from automation/ folder on system load.",
            "customCodeFiles": []
        },
        "schema": {
            "type": "object",
            "properties": {"customCodeFiles": {"type": "array", "items": {"title": "File name", "type": "string"}}},
            "required": false
        },
        "options": {
            "fields": {
                "customCodeFiles": {
                    "type": "array",
                    "helper": "Add paths to files relative to automation/ folder."
                }
            }
        },
        "id": "CustomUserCodeLoader",
        "className": "CustomUserCodeLoader",
        "created": false
    }, {
        "singleton": false,
        "dependencies": [],
        "category": "scenes",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "DelayedScene",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Delayed Action",
            "description": "Activate scene after a defined timeout.",
            "singleTimer": true,
            "triggerScene": "",
            "delayedScene": ""
        },
        "schema": {
            "type": "object",
            "properties": {
                "singleTimer": {"type": "boolean"},
                "triggerScene": {
                    "field": "enum",
                    "datasource": "namespaces",
                    "enum": "namespaces:devices_toggleButton:deviceId",
                    "required": true
                },
                "delayedScene": {
                    "field": "enum",
                    "datasource": "namespaces",
                    "enum": "namespaces:devices_toggleButton:deviceId",
                    "required": true
                },
                "delay": {"type": "integer", "minimum": 1}
            },
            "required": false
        },
        "options": {
            "fields": {
                "singleTimer": {
                    "label": "",
                    "rightLabel": "Restart timer on trigger instead of starting new timer"
                },
                "triggerScene": {
                    "label": "Scene that trigger timer start",
                    "type": "select",
                    "datasource": "namespaces",
                    "field": "optionLabels",
                    "optionLabels": "namespaces:devices_toggleButton:deviceName"
                },
                "delayedScene": {
                    "label": "Delayed scene:",
                    "type": "select",
                    "datasource": "namespaces",
                    "field": "optionLabels",
                    "optionLabels": "namespaces:devices_toggleButton:deviceName"
                },
                "delay": {"label": "Delay in seconds:", "type": "integer"}
            }
        },
        "id": "DelayedScene",
        "className": "DelayedScene",
        "created": false
    }, {
        "singleton": true,
        "dependencies": ["Cron"],
        "category": "scheduling",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "DeviceHistory",
        "version": "1.0.0",
        "maturity": "alpha",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "24 Hours Device History",
            "description": "Creates a module that stores 24h data of all devices.",
            "devices": []
        },
        "schema": {
            "properties": {
                "devices": {
                    "type": "array",
                    "items": {
                        "field": "enum",
                        "datasource": "namespaces",
                        "enum": "namespaces:devices_switchControl:deviceId,namespaces:devices_switchBinary:deviceId,namespaces:devices_switchMultilevel:deviceId,namespaces:devices_sensorBinary:deviceId,namespaces:devices_sensorMultilevel:deviceId,namespaces:devices_sensorMultiline:deviceId,namespaces:devices_toggleButton:deviceId,namespaces:devices_fan:deviceId,namespaces:devices_doorLock:deviceId,namespaces:devices_thermostat:deviceId",
                        "required": false
                    }
                }
            }
        },
        "options": {
            "fields": {
                "devices": {
                    "label": "Do not track devices marked below:",
                    "fields": {
                        "item": {
                            "type": "select",
                            "datasource": "namespaces",
                            "field": "optionLabels",
                            "optionLabels": "namespaces:devices_switchControl:deviceName,namespaces:devices_switchBinary:deviceName,namespaces:devices_switchMultilevel:deviceName,namespaces:devices_sensorBinary:deviceName,namespaces:devices_sensorMultilevel:deviceName,namespaces:devices_sensorMultiline:deviceName,namespaces:devices_toggleButton:deviceName,namespaces:devices_fan:deviceName,namespaces:devices_doorLock:deviceName,namespaces:devices_thermostat:deviceName"
                        }
                    },
                    "helper": "With simultaneous use of the app 'Periodical Sensor Polling', note the following: One there from the polling excluded device cannot create a history."
                }
            }
        },
        "id": "DeviceHistory",
        "className": "DeviceHistory",
        "created": false
    }, {
        "singleton": false,
        "dependencies": [],
        "category": "devices",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "DummyDevice",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {"title": "Dummy Device", "description": "Create a Dummy device.", "deviceType": "switchBinary"},
        "schema": {
            "type": "object",
            "properties": {
                "deviceType": {
                    "type": "string",
                    "enum": ["switchBinary", "switchMultilevel"],
                    "default": "switchBinary",
                    "required": true
                }
            }
        },
        "options": {
            "fields": {
                "deviceType": {
                    "label": "Select device type",
                    "type": "select",
                    "optionLabels": ["Binary switch", "Multilevel switch"]
                }
            }
        },
        "id": "DummyDevice",
        "className": "DummyDevice",
        "created": false
    }, {
        "dependencies": [],
        "singleton": true,
        "category": "peripherals",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "state": "hidden",
        "icon": "icon.png",
        "moduleName": "EnOcean",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "EnOcean Network Access",
            "description": "Allows accessing EnOcean devices from attached EnOcean transceiver.",
            "name": "zeno",
            "port": "/dev/ttyUSB0",
            "enableAPI": true,
            "publicAPI": true,
            "createVDev": true,
            "config": "config"
        },
        "schema": {
            "type": "object",
            "properties": {
                "port": {"type": "string", "required": true},
                "name": {"type": "string", "required": true},
                "enableAPI": {"type": "boolean", "default": true},
                "publicAPI": {"type": "boolean", "default": true},
                "createVDev": {"type": "boolean", "default": true},
                "config": {"type": "string", "required": true}
            },
            "required": false
        },
        "options": {
            "fields": {
                "port": {"label": "Serial port to EnOcean dongle"},
                "name": {
                    "label": "Internal name",
                    "helper": "Should be a valid JS key string. Don't change unless you know what you are doing"
                },
                "enableAPI": {
                    "type": "checkbox",
                    "rightLabel": "Enable EnOcean API",
                    "helper": "Handler HTTP requests to /EnOcean/* and /EnOcean/<internal zway name>/*"
                },
                "publicAPI": {
                    "type": "checkbox",
                    "rightLabel": "Allow public access to EnOcean API",
                    "helper": "Do not ask for authentication to access EnOcean API"
                },
                "createVDev": {
                    "type": "checkbox",
                    "rightLabel": "Create virtual devices in Home Automation engine",
                    "helper": "Without this EnOcean devices will be visible only in Expert UI and via EnOcean API"
                },
                "config": {
                    "hidden": true,
                    "label": "Path to config folder",
                    "helper": "Don't change unless you know what you are doing"
                }
            }
        },
        "id": "EnOcean",
        "className": "EnOcean",
        "created": false
    }, {
        "singleton": false,
        "dependencies": [],
        "category": "surveillance",
        "author": "Z-Wave.Me",
        "homepage": "http://www.foscam.com/",
        "state": "camera",
        "icon": "icon.png",
        "moduleName": "FosCam9805",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "FosCam FI9805",
            "description": "Support the FosCam Outdoor Cameras (FI9805W,FI8905W,FI9805E)",
            "url": "",
            "doorDevices": []
        },
        "schema": {
            "type": "object",
            "properties": {
                "url": {"required": true},
                "user": {"required": false},
                "password": {"required": false},
                "doorDevices": {
                    "type": "array",
                    "items": {
                        "field": "enum",
                        "datasource": "namespaces",
                        "enum": "namespaces:devices_doorlock:deviceId,namespaces:devices_switchBinary:deviceId",
                        "required": false
                    }
                }
            },
            "required": false
        },
        "options": {
            "fields": {
                "url": {
                    "label": "Camera IP URL",
                    "helper": "in the format 'http://IPADDRESS:PORT'",
                    "required": true
                },
                "user": {
                    "label": "Username",
                    "helper": "This is the username that was set up during camera configuration",
                    "required": false
                },
                "password": {
                    "label": "Password",
                    "helper": "This is the password that was set up during camera configuration",
                    "required": false
                },
                "doorDevices": {
                    "label": "Door device",
                    "fields": {
                        "item": {
                            "type": "select",
                            "datasource": "namespaces",
                            "field": "optionLabels",
                            "optionLabels": "namespaces:devices_doorlock:deviceName,namespaces:devices_switchBinary:deviceName"
                        }
                    }
                }
            }
        },
        "id": "FosCam9805",
        "className": "FosCam9805",
        "created": false
    }, {
        "singleton": false,
        "dependencies": [],
        "category": "surveillance",
        "author": "Z-Wave.Me",
        "homepage": "http://www.foscam.com/",
        "state": "camera",
        "icon": "icon.png",
        "moduleName": "FosCam9821",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "FosCam FI9821",
            "description": "Support the FosCam Indoor Cameras without Zoom (FI9821, FI9831, FI8910)",
            "url": "",
            "doorDevices": []
        },
        "schema": {
            "type": "object",
            "properties": {
                "url": {"required": true},
                "user": {"required": false},
                "password": {"required": false},
                "doorDevices": {
                    "type": "array",
                    "items": {
                        "field": "enum",
                        "datasource": "namespaces",
                        "enum": "namespaces:devices_doorlock:deviceId,namespaces:devices_switchBinary:deviceId",
                        "required": false
                    }
                }
            },
            "required": false
        },
        "options": {
            "fields": {
                "url": {
                    "label": "Camera IP URL",
                    "helper": "in the format 'http://IPADDRESS:PORT'",
                    "required": true
                },
                "user": {
                    "label": "Username",
                    "helper": "This is the username that was set up during camera configuration",
                    "required": false
                },
                "password": {
                    "label": "Password",
                    "helper": "This is the password that was set up during camera configuration",
                    "required": false
                },
                "doorDevices": {
                    "label": "Door device",
                    "fields": {
                        "item": {
                            "type": "select",
                            "datasource": "namespaces",
                            "field": "optionLabels",
                            "optionLabels": "namespaces:devices_doorlock:deviceName,namespaces:devices_switchBinary:deviceName"
                        }
                    }
                }
            }
        },
        "id": "FosCam9821",
        "className": "FosCam9821",
        "created": false
    }, {
        "singleton": false,
        "dependencies": [],
        "category": "surveillance",
        "author": "Z-Wave.Me",
        "homepage": "http://www.foscam.com/",
        "state": "camera",
        "icon": "icon.png",
        "moduleName": "FosCam9826",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "FosCam FI9826",
            "description": "Support the FosCam Indoor Zoom Cameras (FI9826W)",
            "url": "",
            "doorDevices": []
        },
        "schema": {
            "type": "object",
            "properties": {
                "url": {"required": true},
                "user": {"required": false},
                "password": {"required": false},
                "doorDevices": {
                    "type": "array",
                    "items": {
                        "field": "enum",
                        "datasource": "namespaces",
                        "enum": "namespaces:devices_doorlock:deviceId,namespaces:devices_switchBinary:deviceId",
                        "required": false
                    }
                }
            },
            "required": false
        },
        "options": {
            "fields": {
                "url": {
                    "label": "Camera IP URL",
                    "helper": "in the format 'http://IPADDRESS:PORT'",
                    "required": true
                },
                "user": {
                    "label": "Username",
                    "helper": "This is the username that was set up during camera configuration",
                    "required": false
                },
                "password": {
                    "label": "Password",
                    "helper": "This is the password that was set up during camera configuration",
                    "required": false
                },
                "doorDevices": {
                    "label": "Door device",
                    "fields": {
                        "item": {
                            "type": "select",
                            "datasource": "namespaces",
                            "field": "optionLabels",
                            "optionLabels": "namespaces:devices_doorlock:deviceName,namespaces:devices_switchBinary:deviceName"
                        }
                    }
                }
            }
        },
        "id": "FosCam9826",
        "className": "FosCam9826",
        "created": false
    }, {
        "singleton": false,
        "dependencies": [],
        "category": "surveillance",
        "author": "Z-Wave.Me",
        "homepage": "http://www.foscam.com/",
        "state": "camera",
        "icon": "icon.png",
        "moduleName": "FosCam9828",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "FosCam FI9828",
            "description": "Support the FosCam dome Outdoor Cameras (FI9828, FI9819)",
            "url": "",
            "doorDevices": []
        },
        "schema": {
            "type": "object",
            "properties": {
                "url": {"required": true},
                "user": {"required": false},
                "password": {"required": false},
                "doorDevices": {
                    "type": "array",
                    "items": {
                        "field": "enum",
                        "datasource": "namespaces",
                        "enum": "namespaces:devices_doorlock:deviceId,namespaces:devices_switchBinary:deviceId",
                        "required": false
                    }
                }
            },
            "required": false
        },
        "options": {
            "fields": {
                "url": {
                    "label": "Camera IP URL",
                    "helper": "in the format 'http://IPADDRESS:PORT'",
                    "required": true
                },
                "user": {
                    "label": "Username",
                    "helper": "This is the username that was set up during camera configuration",
                    "required": false
                },
                "password": {
                    "label": "Password",
                    "helper": "This is the password that was set up during camera configuration",
                    "required": false
                },
                "doorDevices": {
                    "label": "Door device",
                    "fields": {
                        "item": {
                            "type": "select",
                            "datasource": "namespaces",
                            "field": "optionLabels",
                            "optionLabels": "namespaces:devices_doorlock:deviceName,namespaces:devices_switchBinary:deviceName"
                        }
                    }
                }
            }
        },
        "id": "FosCam9828",
        "className": "FosCam9828",
        "created": false
    }, {
        "singleton": false,
        "dependencies": [],
        "category": "devices",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "GlobalCache",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Global Caché",
            "description": "Create toggle device that sends a command to Global Caché device.",
            "host": "",
            "data": ""
        },
        "schema": {
            "type": "object",
            "properties": {"host": {"type": "string", "required": true}, "data": {"type": "string", "required": true}}
        },
        "options": {
            "fields": {
                "host": {"label": "Global Caché IP or hostname", "placeholder": "192.168.0.100 or hostname"},
                "data": {
                    "label": "Command to send",
                    "placeholder": "sendir,1:1,7,35874,1,1,.......,2500",
                    "helper": "Command as reported by Global Caché IR Learning Utility WITHOUT final new line symbols (\r\n\r\n)."
                }
            }
        },
        "id": "GlobalCache",
        "className": "GlobalCache",
        "created": false
    }, {
        "singleton": false,
        "dependencies": [],
        "category": "devices",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "GroupDevices",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Group devices",
            "description": "Groups multiple devices in one element. Also light scenes could be added.",
            "isDimmable": false,
            "devices": [],
            "scenesOn": [],
            "scenesOff": []
        },
        "schema": {
            "type": "object",
            "properties": {
                "isDimmable": {"type": "boolean"},
                "devices": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "device": {
                                "field": "enum",
                                "datasource": "namespaces",
                                "enum": "namespaces:devices_switchBinary:deviceId,namespaces:devices_switchMultilevel:deviceId,namespaces:devices_doorlock:deviceId",
                                "required": true
                            }, "invert": {"type": "boolean", "default": false}
                        }
                    }
                },
                "scenesOn": {
                    "type": "array",
                    "items": {
                        "field": "enum",
                        "datasource": "namespaces",
                        "enum": "namespaces:devices_toggleButton:deviceId",
                        "required": true
                    }
                },
                "scenesOff": {
                    "type": "array",
                    "items": {
                        "field": "enum",
                        "datasource": "namespaces",
                        "enum": "namespaces:devices_toggleButton:deviceId",
                        "required": true
                    }
                }
            },
            "required": false
        },
        "options": {
            "fields": {
                "isDimmable": {"label": "", "rightLabel": "Dimmable"},
                "devices": {
                    "label": "Group devices",
                    "fields": {
                        "item": {
                            "fields": {
                                "device": {
                                    "label": "",
                                    "datasource": "namespaces",
                                    "field": "optionLabels",
                                    "optionLabels": "namespaces:devices_switchBinary:deviceName,namespaces:devices_switchMultilevel:deviceName,namespaces:devices_doorlock:deviceName"
                                }, "invert": {"type": "checkbox", "rightLabel": "Invert action"}
                            }
                        }
                    }
                },
                "scenesOn": {
                    "label": "List of scenes to activate on On action",
                    "fields": {
                        "item": {
                            "datasource": "namespaces",
                            "field": "optionLabels",
                            "optionLabels": "namespaces:devices_toggleButton:deviceName"
                        }
                    }
                },
                "scenesOff": {
                    "label": "List of scenes to activate on Off action",
                    "fields": {
                        "item": {
                            "datasource": "namespaces",
                            "field": "optionLabels",
                            "optionLabels": "namespaces:devices_toggleButton:deviceName"
                        }
                    }
                }
            }
        },
        "id": "GroupDevices",
        "className": "GroupDevices",
        "created": false
    }, {
        "singleton": false,
        "dependencies": [],
        "category": "devices",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "HTTPDevice",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "HTTP Device",
            "description": "Create virtual device based on HTTP data.",
            "deviceType": "",
            "setterOn_toggleButton": "",
            "getter_sensorBinary": "",
            "getterParser_sensorBinary": "",
            "getterPollInterval_sensorBinary": 0,
            "getter_sensorMultilevel": "",
            "getterParser_sensorMultilevel": "",
            "getterPollInterval_sensorMultilevel": 0,
            "scale_sensorMultilevel": "",
            "setterOn_switchBinary": "",
            "setterOff_switchBinary": "",
            "getter_switchBinary": "",
            "getterParser_switchBinary": "",
            "getterPollInterval_switchBinary": 0,
            "setterLevel_switchMultilevel": "",
            "getter_switchMultilevel": "",
            "getterParser_switchMultilevel": "",
            "getterPollInterval_switchMultilevel": 0,
            "method": "GET"
        },
        "schema": {
            "type": "object",
            "properties": {
                "deviceType": {
                    "type": "string",
                    "enum": ["toggleButton", "sensorBinary", "sensorMultilevel", "switchBinary", "switchMultilevel"],
                    "default": "toggleButton",
                    "required": true
                },
                "setterOn_toggleButton": {"type": "string", "required": true, "dependencies": "deviceType"},
                "getter_sensorBinary": {"type": "string", "required": true, "dependencies": "deviceType"},
                "getterParser_sensorBinary": {"type": "string", "required": false, "dependencies": "deviceType"},
                "getterPollInterval_sensorBinary": {"type": "integer", "required": false, "dependencies": "deviceType"},
                "getter_sensorMultilevel": {"type": "string", "required": true, "dependencies": "deviceType"},
                "getterParser_sensorMultilevel": {"type": "string", "required": false, "dependencies": "deviceType"},
                "getterPollInterval_sensorMultilevel": {
                    "type": "integer",
                    "required": false,
                    "dependencies": "deviceType"
                },
                "scale_sensorMultilevel": {"type": "string", "required": false, "dependencies": "deviceType"},
                "setterOn_switchBinary": {"type": "string", "required": true, "dependencies": "deviceType"},
                "setterOff_switchBinary": {"type": "string", "required": true, "dependencies": "deviceType"},
                "getter_switchBinary": {"type": "string", "required": false, "dependencies": "deviceType"},
                "getterParser_switchBinary": {"type": "string", "required": false, "dependencies": "deviceType"},
                "getterPollInterval_switchBinary": {"type": "integer", "required": false, "dependencies": "deviceType"},
                "setterLevel_switchMultilevel": {"type": "string", "required": true, "dependencies": "deviceType"},
                "getter_switchMultilevel": {"type": "string", "required": false, "dependencies": "deviceType"},
                "getterParser_switchMultilevel": {"type": "string", "required": false, "dependencies": "deviceType"},
                "getterPollInterval_switchMultilevel": {
                    "type": "integer",
                    "required": false,
                    "dependencies": "deviceType"
                },
                "method": {"type": "string", "required": true, "enum": ["GET", "POST"]}
            }
        },
        "options": {
            "fields": {
                "deviceType": {"type": "select"},
                "setterOn_toggleButton": {
                    "label": "URL for action On",
                    "placeholder": "http://192.168.0.100/action/on",
                    "dependencies": {"deviceType": "toggleButton"}
                },
                "getter_sensorBinary": {
                    "label": "URL to get value",
                    "placeholder": "http://192.168.0.100/get/value",
                    "dependencies": {"deviceType": "sensorBinary"}
                },
                "getterParser_sensorBinary": {
                    "label": "Inline Javascript to parse incoming data to 'on'/'off' strings",
                    "helper": "Can be empty to use string as is. Example: $.split(':')[1] or $.data.metrics.level or $ === 'ON' ? 'on' : 'off'",
                    "dependencies": {"deviceType": "sensorBinary"}
                },
                "getterPollInterval_sensorBinary": {
                    "label": "Interval in seconds between polling requests",
                    "helper": "Empty or 0 to disable periodical requests (explicit update command will still initiate request process)",
                    "dependencies": {"deviceType": "sensorBinary"}
                },
                "getter_sensorMultilevel": {
                    "label": "URL to get value",
                    "placeholder": "http://192.168.0.100/get/value",
                    "dependencies": {"deviceType": "sensorMultilevel"}
                },
                "getterParser_sensorMultilevel": {
                    "label": "Inline Javascript to parse incoming data to number",
                    "helper": "Can be empty to use parseFloat() function. Example: $.split(':')[1] or parseInt($, 16) or $.data.metrics.level or parseFloat($.findOne('/A/B[C='123']/D/text()'))",
                    "dependencies": {"deviceType": "sensorMultilevel"}
                },
                "getterPollInterval_sensorMultilevel": {
                    "label": "Interval in seconds between polling requests",
                    "helper": "Empty or 0 to disable periodical requests (explicit update command will still initiate request process)",
                    "dependencies": {"deviceType": "sensorMultilevel"}
                },
                "scale_sensorMultilevel": {"label": "Sensor scale", "dependencies": {"deviceType": "sensorMultilevel"}},
                "setterOn_switchBinary": {
                    "label": "URL for action On",
                    "placeholder": "http://192.168.0.100/action/on",
                    "dependencies": {"deviceType": "switchBinary"}
                },
                "setterOff_switchBinary": {
                    "label": "URL for action Off",
                    "placeholder": "http://192.168.0.100/action/off",
                    "dependencies": {"deviceType": "switchBinary"}
                },
                "getter_switchBinary": {
                    "label": "URL to get value",
                    "placeholder": "http://192.168.0.100/get/value",
                    "dependencies": {"deviceType": "switchBinary"}
                },
                "getterParser_switchBinary": {
                    "label": "Inline Javascript to parse incoming data to 'on'/'off' strings",
                    "helper": "Can be empty to use string as is. Example: $.split(':')[1] or $.data.metrics.level or $ === 'ON' ? 'on' : 'off'",
                    "dependencies": {"deviceType": "switchBinary"}
                },
                "getterPollInterval_switchBinary": {
                    "label": "Interval in seconds between polling requests",
                    "helper": "Empty or 0 to disable periodical requests (explicit update command will still initiate request process)",
                    "dependencies": {"deviceType": "switchBinary"}
                },
                "setterLevel_switchMultilevel": {
                    "label": "URL for action",
                    "placeholder": "http://192.168.0.100/action/set/$",
                    "helper": "$ is used to represent level in the URL. For example: http://host/dimmer/level/$/set",
                    "dependencies": {"deviceType": "switchMultilevel"}
                },
                "getter_switchMultilevel": {
                    "label": "URL to get value",
                    "placeholder": "http://192.168.0.100/get/value",
                    "dependencies": {"deviceType": "switchMultilevel"}
                },
                "getterParser_switchMultilevel": {
                    "label": "Inline Javascript to parse incoming data to number",
                    "helper": "Can be empty to use parseFloat() function. Example: $.split(':')[1] or parseInt($, 16) or $.data.metrics.level or parseFloat($.findOne('/A/B[C='123']/D/text()'))",
                    "dependencies": {"deviceType": "switchMultilevel"}
                },
                "getterPollInterval_switchMultilevel": {
                    "label": "Interval in seconds between polling requests",
                    "helper": "Empty or 0 to disable periodical requests (explicit update command will still initiate request process)",
                    "dependencies": {"deviceType": "switchMultilevel"}
                },
                "method": {"label": "HTTP method to use", "type": "select"}
            }
        },
        "id": "HTTPDevice",
        "className": "HTTPDevice",
        "created": false
    }, {
        "singleton": true,
        "dependencies": [],
        "category": "peripherals",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "HomeKitGate",
        "version": "1.0.1",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Apple HomeKit Gate",
            "description": "Announces all widgets to Apple HomeKit.",
            "name": "RaZberry"
        },
        "schema": {"type": "object", "properties": {"name": {"type": "string", "required": true}}, "required": false},
        "options": {"fields": {"name": {"label": "Name as it appears in iOS devices"}}},
        "id": "HomeKitGate",
        "className": "HomeKitGate",
        "created": false
    }, {
        "dependencies": [],
        "singleton": false,
        "category": "peripherals",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "ImportRemoteHA",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Include devices from an other Z-Way HA",
            "description": "The devices of an other Z-Way HA will be shown on this gateway and could be controlled directly. Also that makes it possible to create scenes with devices from different Z-Way HA.",
            "url": "",
            "dT": 500,
            "skipDevices": [],
            "renderDevices": []
        },
        "schema": {
            "type": "object",
            "properties": {
                "url": {"type": "string", "required": true},
                "dT": {"type": "number", "required": true},
                "skipDevices": {
                    "type": "array",
                    "items": {
                        "field": "enum",
                        "datasource": "namespaces",
                        "enum": "namespaces:devices_all:deviceId",
                        "required": true
                    }
                },
                "renderDevices": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "deviceId": {
                                "field": "enum",
                                "datasource": "namespaces",
                                "enum": "namespaces:devices_all:deviceId",
                                "required": true
                            }, "deviceType": {"type": "string", "required": true}
                        }
                    }
                }
            }
        },
        "options": {
            "fields": {
                "url": {"label": "URL to remote side", "placeholder": "http://192.168.0.100:8083"},
                "dT": {"label": "Update period (in milliseconds)"},
                "skipDevices": {
                    "label": "List of devices not to import from remote side",
                    "fields": {
                        "item": {
                            "type": "select",
                            "datasource": "namespaces",
                            "field": "optionLabels",
                            "optionLabels": "namespaces:devices_all:deviceName"
                        }
                    }
                },
                "renderDevices": {
                    "label": "List of devices imported from remote side (filled automatically)",
                    "fields": {
                        "item": {
                            "fields": {
                                "deviceId": {
                                    "type": "select",
                                    "readonly": true,
                                    "datasource": "namespaces",
                                    "field": "optionLabels",
                                    "optionLabels": "namespaces:devices_all:deviceName"
                                }, "deviceType": {"readonly": true}
                            }
                        }
                    }
                }
            }
        },
        "id": "ImportRemoteHA",
        "className": "ImportRemoteHA",
        "created": false
    }, {
        "singleton": true,
        "dependencies": [],
        "category": "notifications",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "InbandNotifications",
        "version": "1.0.4",
        "maturity": "beta",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Inband Notifier",
            "description": "Creates and records the presentation of events in the event list (Eventlog)."
        },
        "schema": {},
        "options": {},
        "id": "InbandNotifications",
        "className": "InbandNotifications",
        "created": true
    }, {
        "singleton": true,
        "dependencies": [],
        "category": "devices",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "InfoWidget",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Information Widget",
            "description": "This Module creates an information widget.",
            "widgets": []
        },
        "schema": {
            "type": "object",
            "properties": {"widgets": {"type": "array", "items": {"$ref": "#/definitions/widget"}}},
            "definitions": {
                "widget": {
                    "type": "object",
                    "properties": {
                        "headline": {"type": "string", "required": true},
                        "text": {"type": "string", "required": true},
                        "imgURI": {"type": "string", "format": "uri", "required": false}
                    }
                }
            }
        },
        "options": {
            "fields": {
                "widgets": {
                    "label": "Create one or nore Information Widgets",
                    "helper": "Click to create a widget"
                }
            },
            "definitions": {
                "fields": {
                    "widget": {
                        "fields": {
                            "headline": {
                                "label": "Enter your headline:",
                                "placeholder": "Headline",
                                "type": "text"
                            },
                            "text": {"label": "Enter your text:", "placeholder": "Text...", "type": "textarea"},
                            "imgURI": {
                                "label": "URL of your image (optional):",
                                "placeholder": "e.g. 'http://www.images.com/nature/tree_xy.jpg'",
                                "type": "url"
                            }
                        }
                    }
                }
            }
        },
        "id": "InfoWidget",
        "className": "InfoWidget",
        "created": true
    }, {
        "dependencies": [],
        "singleton": false,
        "category": "scenes",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "LightScene",
        "version": "1.0.1",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Light Scene",
            "description": "With Light Scene choosen switches, dimmers and motor controllers could be controlled together with just one element. Per device all statuses could be adjusted differently.",
            "switches": [],
            "dimmers": [],
            "scenes": []
        },
        "schema": {
            "type": "object",
            "properties": {
                "switches": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "device": {
                                "field": "enum",
                                "datasource": "namespaces",
                                "enum": "namespaces:devices_switchBinary:deviceId",
                                "required": true
                            }, "status": {"type": "integer", "required": true, "enum": ["off", "on"]}
                        }
                    }
                },
                "dimmers": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "device": {
                                "field": "enum",
                                "datasource": "namespaces",
                                "enum": "namespaces:devices_switchMultilevel:deviceId",
                                "required": true
                            }, "status": {"type": "integer", "minimum": 0, "maximum": 99, "required": true}
                        }
                    }
                },
                "scenes": {
                    "type": "array",
                    "items": {
                        "field": "enum",
                        "datasource": "namespaces",
                        "enum": "namespaces:devices_toggleButton:deviceId",
                        "required": true
                    }
                }
            },
            "required": false
        },
        "options": {
            "fields": {
                "switches": {
                    "label": "List of switches:",
                    "fields": {
                        "item": {
                            "fields": {
                                "device": {
                                    "label": "",
                                    "type": "select",
                                    "datasource": "namespaces",
                                    "field": "optionLabels",
                                    "optionLabels": "namespaces:devices_switchBinary:deviceName"
                                }, "status": {"label": "", "optionLabels": ["Off", "On"]}
                            }
                        }
                    }
                },
                "dimmers": {
                    "label": "List of dimmers:",
                    "fields": {
                        "item": {
                            "fields": {
                                "device": {
                                    "label": "",
                                    "type": "select",
                                    "datasource": "namespaces",
                                    "field": "optionLabels",
                                    "optionLabels": "namespaces:devices_switchMultilevel:deviceName"
                                }, "status": {"label": "Level"}
                            }
                        }
                    }
                },
                "scenes": {
                    "label": "List of scenes to activate:",
                    "fields": {
                        "item": {
                            "type": "select",
                            "datasource": "namespaces",
                            "field": "optionLabels",
                            "optionLabels": "namespaces:devices_toggleButton:deviceName"
                        }
                    }
                }
            }
        },
        "id": "LightScene",
        "className": "LightScene",
        "created": false
    }, {
        "dependencies": [],
        "singleton": false,
        "category": "automation",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "LogicalRules",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Logical Rule",
            "description": "Control one or more actuators due to an event, which can be further restricted by other conditions.",
            "triggerOnDevicesChange": true,
            "eventSource": [],
            "logicalOperator": "and",
            "tests": [],
            "action": {}
        },
        "schema": {
            "type": "object",
            "properties": {
                "triggerOnDevicesChange": {"type": "boolean", "default": true},
                "eventSource": {
                    "type": "array",
                    "items": {
                        "field": "enum",
                        "datasource": "namespaces",
                        "enum": "namespaces:devices_toggleButton:deviceId",
                        "required": true
                    }
                },
                "logicalOperator": {"type": "string", "enum": ["and", "or"], "default": "and", "required": true},
                "tests": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "testType": {
                                "type": "string",
                                "enum": ["binary", "multilevel", "remote", "time", "nested"],
                                "required": true,
                                "default": "binary"
                            },
                            "testBinary": {
                                "type": "object",
                                "dependencies": "testType",
                                "properties": {
                                    "device": {
                                        "field": "enum",
                                        "datasource": "namespaces",
                                        "enum": "namespaces:devices_sensorBinary:deviceId,namespaces:devices_switchBinary:deviceId",
                                        "required": true
                                    }, "testValue": {"type": "string", "enum": ["off", "on"], "required": true}
                                }
                            },
                            "testMultilevel": {
                                "type": "object",
                                "dependencies": "testType",
                                "properties": {
                                    "device": {
                                        "field": "enum",
                                        "datasource": "namespaces",
                                        "enum": "namespaces:devices_sensorMultilevel:deviceId,namespaces:devices_switchMultilevel:deviceId,namespaces:devices_battery:deviceId",
                                        "required": true
                                    },
                                    "testOperator": {
                                        "type": "string",
                                        "enum": ["=", "!=", ">", ">=", "<", "<="],
                                        "required": true
                                    },
                                    "testValue": {"type": "number", "required": true}
                                }
                            },
                            "testRemote": {
                                "type": "object",
                                "dependencies": "testType",
                                "properties": {
                                    "device": {
                                        "field": "enum",
                                        "datasource": "namespaces",
                                        "enum": "namespaces:devices_switchControl:deviceId",
                                        "required": true
                                    },
                                    "testValue": {
                                        "type": "string",
                                        "enum": ["off", "on", "upstart", "upstop", "downstart", "downstop"],
                                        "required": true
                                    }
                                }
                            },
                            "testTime": {
                                "type": "object",
                                "dependencies": "testType",
                                "properties": {
                                    "testOperator": {"type": "string", "enum": [">=", "<="], "required": true},
                                    "testValue": {"type": "string", "required": true}
                                }
                            },
                            "testNested": {
                                "type": "object",
                                "dependencies": "testType",
                                "properties": {
                                    "logicalOperator": {
                                        "type": "string",
                                        "enum": ["and", "or"],
                                        "default": "or",
                                        "required": true
                                    },
                                    "tests": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "testType": {
                                                    "type": "string",
                                                    "enum": ["binary", "multilevel", "remote", "time"],
                                                    "required": true,
                                                    "default": "binary"
                                                },
                                                "testBinary": {
                                                    "type": "object",
                                                    "dependencies": "testType",
                                                    "properties": {
                                                        "device": {
                                                            "field": "enum",
                                                            "datasource": "namespaces",
                                                            "enum": "namespaces:devices_sensorBinary:deviceId,namespaces:devices_switchBinary:deviceId",
                                                            "required": true
                                                        },
                                                        "testValue": {
                                                            "type": "string",
                                                            "enum": ["off", "on"],
                                                            "required": true
                                                        }
                                                    }
                                                },
                                                "testMultilevel": {
                                                    "type": "object",
                                                    "dependencies": "testType",
                                                    "properties": {
                                                        "device": {
                                                            "field": "enum",
                                                            "datasource": "namespaces",
                                                            "enum": "namespaces:devices_sensorMultilevel:deviceId,namespaces:devices_switchMultilevel:deviceId,namespaces:devices_battery:deviceId",
                                                            "required": true
                                                        },
                                                        "testOperator": {
                                                            "type": "string",
                                                            "enum": ["=", "!=", ">", ">=", "<", "<="],
                                                            "required": true
                                                        },
                                                        "testValue": {"type": "number", "required": true}
                                                    }
                                                },
                                                "testRemote": {
                                                    "type": "object",
                                                    "dependencies": "testType",
                                                    "properties": {
                                                        "device": {
                                                            "field": "enum",
                                                            "datasource": "namespaces",
                                                            "enum": "namespaces:devices_switchControl:deviceId",
                                                            "required": true
                                                        },
                                                        "testValue": {
                                                            "type": "string",
                                                            "enum": ["off", "on", "upstart", "upstop", "downstart", "downstop"],
                                                            "required": true
                                                        }
                                                    }
                                                },
                                                "testTime": {
                                                    "type": "object",
                                                    "dependencies": "testType",
                                                    "properties": {
                                                        "testOperator": {
                                                            "type": "string",
                                                            "enum": [">=", "<="],
                                                            "required": true
                                                        }, "testValue": {"type": "string", "required": true}
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "action": {
                    "type": "object",
                    "properties": {
                        "switches": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "device": {
                                        "field": "enum",
                                        "datasource": "namespaces",
                                        "enum": "namespaces:devices_switchBinary:deviceId",
                                        "required": true
                                    }, "status": {"type": "number", "required": true, "enum": ["off", "on"]}
                                }
                            }
                        },
                        "dimmers": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "device": {
                                        "field": "enum",
                                        "datasource": "namespaces",
                                        "enum": "namespaces:devices_switchMultilevel:deviceId",
                                        "required": true
                                    }, "status": {"required": true, "minimum": 0, "maximum": 99}
                                }
                            }
                        },
                        "locks": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "device": {
                                        "field": "enum",
                                        "datasource": "namespaces",
                                        "enum": "namespaces:devices_doorlock:deviceId",
                                        "required": true
                                    }, "status": {"type": "number", "required": true, "enum": ["close", "open"]}
                                }
                            }
                        },
                        "scenes": {
                            "type": "array",
                            "items": {
                                "field": "enum",
                                "datasource": "namespaces",
                                "enum": "namespaces:devices_toggleButton:deviceId",
                                "required": true
                            }
                        }
                    },
                    "required": false
                }
            }
        },
        "options": {
            "renderform": "true",
            "fields": {
                "triggerOnDevicesChange": {
                    "type": "checkbox",
                    "rightLabel": "Start scene on change of any device mentioned in condition."
                },
                "eventSource": {
                    "label": "List of scenes to activate:",
                    "datasource": "namespaces",
                    "fields": {
                        "item": {
                            "type": "select",
                            "datasource": "namespaces",
                            "field": "optionLabels",
                            "optionLabels": "namespaces:devices_toggleButton:deviceName"
                        }
                    }
                },
                "logicalOperator": {"label": "Boolean operator", "type": "select"},
                "tests": {
                    "label": "Conditions",
                    "fields": {
                        "item": {
                            "fields": {
                                "testType": {"type": "select", "default": ""},
                                "testBinary": {
                                    "label": "Binary condition",
                                    "dependencies": {"testType": "binary"},
                                    "fields": {
                                        "device": {
                                            "label": "",
                                            "type": "select",
                                            "datasource": "namespaces",
                                            "field": "optionLabels",
                                            "optionLabels": "namespaces:devices_sensorBinary:deviceName,namespaces:devices_switchBinary:deviceName"
                                        }
                                    }
                                },
                                "testMultilevel": {
                                    "label": "Multilevel condition",
                                    "dependencies": {"testType": "multilevel"},
                                    "fields": {
                                        "device": {
                                            "label": "",
                                            "type": "select",
                                            "datasource": "namespaces",
                                            "field": "optionLabels",
                                            "optionLabels": "namespaces:devices_sensorMultilevel:deviceName,namespaces:devices_switchMultilevel:deviceName,namespaces:devices_battery:deviceName"
                                        },
                                        "testOperator": {
                                            "type": "select",
                                            "optionLabels": ["=", "≠", ">", "≥", "<", "≤"]
                                        }
                                    }
                                },
                                "testRemote": {
                                    "label": "Remote condition",
                                    "dependencies": {"testType": "remote"},
                                    "fields": {
                                        "device": {
                                            "label": "",
                                            "type": "select",
                                            "datasource": "namespaces",
                                            "field": "optionLabels",
                                            "optionLabels": "namespaces:devices_switchControl:deviceName"
                                        }
                                    }
                                },
                                "testTime": {
                                    "label": "Time condition",
                                    "dependencies": {"testType": "time"},
                                    "fields": {
                                        "testOperator": {"type": "select", "optionLabels": ["≥", "≤"]},
                                        "testValue": {
                                            "type": "time",
                                            "maskString": "99:99",
                                            "timeFormat": "hh:mm",
                                            "timeFormatRegex": "/^(([0-1][0-9])|([2][0-3])):([0-5][0-9])$/"
                                        }
                                    }
                                },
                                "testNested": {
                                    "label": "Nested conditions",
                                    "dependencies": {"testType": "nested"},
                                    "fields": {
                                        "logicalOperator": {"label": "Boolean operator", "type": "select"},
                                        "tests": {
                                            "fields": {
                                                "item": {
                                                    "fields": {
                                                        "testType": {
                                                            "label": "Boolean operator",
                                                            "type": "select",
                                                            "default": ""
                                                        },
                                                        "testBinary": {
                                                            "label": "Binary condition",
                                                            "dependencies": {"testType": "binary"},
                                                            "fields": {
                                                                "device": {
                                                                    "label": "",
                                                                    "type": "select",
                                                                    "datasource": "namespaces",
                                                                    "field": "optionLabels",
                                                                    "optionLabels": "namespaces:devices_sensorBinary:deviceName,namespaces:devices_switchBinary:deviceName"
                                                                }
                                                            }
                                                        },
                                                        "testMultilevel": {
                                                            "label": "Multilevel condition",
                                                            "dependencies": {"testType": "multilevel"},
                                                            "fields": {
                                                                "device": {
                                                                    "label": "",
                                                                    "type": "select",
                                                                    "datasource": "namespaces",
                                                                    "field": "optionLabels",
                                                                    "optionLabels": "namespaces:devices_sensorMultilevel:deviceName,namespaces:devices_switchMultilevel:deviceName,namespaces:devices_battery:deviceName"
                                                                },
                                                                "testOperator": {
                                                                    "type": "select",
                                                                    "optionLabels": ["=", "≠", ">", "≥", "<", "≤"]
                                                                }
                                                            }
                                                        },
                                                        "testRemote": {
                                                            "label": "Remote condition",
                                                            "dependencies": {"testType": "remote"},
                                                            "fields": {
                                                                "device": {
                                                                    "label": "",
                                                                    "type": "select",
                                                                    "datasource": "namespaces",
                                                                    "field": "optionLabels",
                                                                    "optionLabels": "namespaces:devices_switchControl:deviceName"
                                                                }
                                                            }
                                                        },
                                                        "testTime": {
                                                            "label": "Time condition",
                                                            "dependencies": {"testType": "time"},
                                                            "fields": {
                                                                "testValue": {
                                                                    "type": "time",
                                                                    "maskString": "99:99",
                                                                    "timeFormat": "hh:mm",
                                                                    "timeFormatRegex": "/^(([0-1][0-9])|([2][0-3])):([0-5][0-9])$/"
                                                                },
                                                                "testOperator": {
                                                                    "type": "select",
                                                                    "optionLabels": ["≥", "≤"]
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "action": {
                    "label": "Actions",
                    "fields": {
                        "switches": {
                            "label": "List of switches:",
                            "fields": {
                                "item": {
                                    "fields": {
                                        "device": {
                                            "label": "",
                                            "type": "select",
                                            "datasource": "namespaces",
                                            "field": "optionLabels",
                                            "optionLabels": "namespaces:devices_switchBinary:deviceName"
                                        }, "status": {"label": "", "optionLabels": ["Off", "On"]}
                                    }
                                }
                            }
                        },
                        "dimmers": {
                            "label": "List of dimmers:",
                            "fields": {
                                "item": {
                                    "fields": {
                                        "device": {
                                            "label": "",
                                            "type": "select",
                                            "datasource": "namespaces",
                                            "field": "optionLabels",
                                            "optionLabels": "namespaces:devices_switchMultilevel:deviceName"
                                        }, "status": {"label": "Level", "type": "integer"}
                                    }
                                }
                            }
                        },
                        "locks": {
                            "label": "List of locks:",
                            "fields": {
                                "item": {
                                    "fields": {
                                        "device": {
                                            "label": "",
                                            "type": "select",
                                            "datasource": "namespaces",
                                            "field": "optionLabels",
                                            "optionLabels": "namespaces:devices_doorlock:deviceName"
                                        }, "status": {"label": "", "optionLabels": ["Close", "Open"]}
                                    }
                                }
                            }
                        },
                        "scenes": {
                            "label": "List of scenes to activate:",
                            "fields": {
                                "item": {
                                    "type": "select",
                                    "datasource": "namespaces",
                                    "field": "optionLabels",
                                    "optionLabels": "namespaces:devices_toggleButton:deviceName"
                                }
                            }
                        }
                    }
                }
            }
        },
        "id": "LogicalRules",
        "className": "LogicalRules",
        "created": false
    }, {
        "singleton": false,
        "dependencies": [],
        "category": "devices",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "MultilineSensor",
        "version": "1.0.0",
        "maturity": "alpha",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Combine a count of sensors into one virtual device",
            "description": "With this app you can combine up to 10 semsors into one virtual device.",
            "devices": []
        },
        "schema": {
            "properties": {
                "devices": {
                    "type": "array",
                    "items": {"maxItems": 10, "required": true, "$ref": "#/definitions/device"}
                }
            },
            "definitions": {
                "device": {
                    "type": "object",
                    "properties": {
                        "selectedDevice": {
                            "field": "enum",
                            "datasource": "namespaces",
                            "enum": "namespaces:devices_sensorBinary:deviceId,namespaces:devices_sensorMultilevel:deviceId"
                        }, "visible": {"type": "boolean", "dependencies": "selectedDevice", "required": false}
                    }
                }
            }
        },
        "options": {
            "fields": {
                "devices": {
                    "label": "Create a new virtual device with the sensors choosen below:",
                    "helper": "You can only combine up to 10 sensors with each other."
                }
            },
            "definitions": {
                "fields": {
                    "device": {
                        "fields": {
                            "selectedDevice": {
                                "type": "select",
                                "datasource": "namespaces",
                                "field": "optionLabels",
                                "optionLabels": "namespaces:devices_sensorBinary:deviceName,namespaces:devices_sensorMultilevel:deviceName"
                            }, "visible": {"type": "checkbox", "rightLabel": "Do not show device in elements view"}
                        }
                    }
                }
            }
        },
        "id": "MultilineSensor",
        "className": "MultilineSensor",
        "created": false
    }, {
        "dependencies": [],
        "singleton": false,
        "category": "notifications",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "state": "hidden",
        "icon": "icon.png",
        "moduleName": "Notification",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Email&SMS Notification",
            "description": "Scene of send email or sms.",
            "message": "",
            "phone": "",
            "api_key_sms": "",
            "email": "",
            "api_key_email": ""
        },
        "schema": {
            "type": "object",
            "properties": {
                "message": {"type": "string", "required": true},
                "phone": {"required": false, "pattern": "[1-9][0-9]*"},
                "api_key_sms": {
                    "required": false,
                    "pattern": "[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{8}"
                },
                "email": {"type": "string", "required": false},
                "api_key_email": {
                    "required": false,
                    "pattern": "[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{8}"
                }
            },
            "required": false
        },
        "options": {
            "fields": {
                "message": {"label": "Text message"},
                "phone": {"label": "Phone number to send SMS. In form of 79261234567"},
                "api_key_sms": {
                    "label": "API key from http://sms.ru",
                    "helper": "After registration on the right you will see api_id (looks like: a43f6376-f57d-27e4-5981-ec48945d871f)"
                },
                "email": {"label": "Email that will be notified"},
                "api_key_email": {
                    "label": "API key from https://mandrillapp.com",
                    "helper": "After registration email on the tab Setting create a key (looks like: VFfeEspkFL1YqVSihhfqHw)"
                }
            }
        },
        "id": "Notification",
        "className": "Notification",
        "created": false
    }, {
        "dependencies": [],
        "singleton": false,
        "category": "notifications",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "NotificationSMSru",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "SMS.ru Notifications",
            "description": "Sends all notifications via free SMS proxy SMS.ru.",
            "api_key": "",
            "phone": "",
            "prefix": "Z-Way notification:"
        },
        "schema": {
            "description": "Send SMS via SMS.ru gateway. To register enter your phone number, name and password on http://sms.ru/?panel=register and confirm your phone number with a code.",
            "type": "object",
            "properties": {
                "phone": {"required": true, "pattern": "[1-9][0-9]*"},
                "prefix": {"required": false},
                "api_key": {
                    "required": true,
                    "pattern": "[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{8}"
                }
            },
            "required": false
        },
        "options": {
            "fields": {
                "phone": {"label": "Phone number to send SMS. In form of 79261234567"},
                "prefix": {"label": "Prefix for all messages"},
                "api_key": {
                    "label": "API key from SMS.ru",
                    "helper": "After registration on the right you will see api_id (looks like a43f6376-f57d-27e4-5981-ec48945d871f)"
                }
            }
        },
        "id": "NotificationSMSru",
        "className": "NotificationSMSru",
        "created": false
    }, {
        "dependencies": [],
        "singleton": true,
        "category": "peripherals",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "OpenRemoteHelpers",
        "version": "1.01.02",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {"title": "OpenRemote Helper", "description": "Set of helpers for OpenRemote server."},
        "schema": {},
        "options": {},
        "id": "OpenRemoteHelpers",
        "className": "OpenRemoteHelpers",
        "created": false
    }, {
        "dependencies": [],
        "singleton": false,
        "category": "environment",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "OpenWeather",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Local Weather",
            "description": "Weather informer provided by OpenWeatherMap.org",
            "units": "celsius",
            "city": "",
            "country": ""
        },
        "schema": {
            "type": "object",
            "properties": {
                "city": {"type": "string", "required": true},
                "country": {"type": "string", "required": true},
                "units": {"type": "select", "enum": ["celsius", "fahrenheit"], "required": true}
            },
            "required": true
        },
        "options": {
            "fields": {
                "city": {"label": "City", "placeholder": "London"},
                "country": {"label": "Country", "placeholder": "England"},
                "units": {"label": "Units", "optionLabels": ["°C", "°F"]}
            }
        },
        "id": "OpenWeather",
        "className": "OpenWeather",
        "created": false
    }, {
        "singleton": false,
        "dependencies": [],
        "category": "surveillance",
        "author": "Z-Wave.Me",
        "homepage": "http://www.foscam.com/",
        "state": "camera",
        "icon": "icon.png",
        "moduleName": "PoppCam",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {"title": "PoppCam", "description": "Support the PoppCam", "url": "", "doorDevices": []},
        "schema": {
            "type": "object",
            "properties": {
                "url": {"required": true},
                "user": {"required": false},
                "password": {"required": false},
                "doorDevices": {
                    "type": "array",
                    "items": {
                        "field": "enum",
                        "datasource": "namespaces",
                        "enum": "namespaces:devices_doorlock:deviceId,namespaces:devices_switchBinary:deviceId",
                        "required": false
                    }
                }
            },
            "required": false
        },
        "options": {
            "fields": {
                "url": {
                    "label": "Camera IP URL",
                    "helper": "in the format 'http://IPADDRESS:PORT'. Default Port is 81",
                    "required": true
                },
                "user": {
                    "label": "Username",
                    "helper": "This is the username that was set up during camera configuration. Default is 'admin'",
                    "required": false
                },
                "password": {
                    "label": "Password",
                    "helper": "This is the password that was set up during camera configuration. Default is 'admin'",
                    "required": false
                },
                "doorDevices": {
                    "label": "Door device",
                    "fields": {
                        "item": {
                            "type": "select",
                            "datasource": "namespaces",
                            "field": "optionLabels",
                            "optionLabels": "namespaces:devices_doorlock:deviceName,namespaces:devices_switchBinary:deviceName"
                        }
                    }
                }
            }
        },
        "id": "PoppCam",
        "className": "PoppCam",
        "created": false
    }, {
        "dependencies": [],
        "singleton": false,
        "category": "devices",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "RGB",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "RGB Light from 3 Dimmers",
            "description": "Creates RGB device based on three different dimmers. This app is required if an RGB light can not be configured by normal color control.",
            "red": null,
            "green": null,
            "blue": null
        },
        "schema": {
            "type": "object",
            "properties": {
                "red": {
                    "field": "enum",
                    "datasource": "namespaces",
                    "enum": "namespaces:devices_switchMultilevel:deviceId",
                    "required": true
                },
                "green": {
                    "field": "enum",
                    "datasource": "namespaces",
                    "enum": "namespaces:devices_switchMultilevel:deviceId",
                    "required": true
                },
                "blue": {
                    "field": "enum",
                    "datasource": "namespaces",
                    "enum": "namespaces:devices_switchMultilevel:deviceId",
                    "required": true
                }
            },
            "required": true
        },
        "options": {
            "fields": {
                "red": {
                    "label": "Red",
                    "type": "select",
                    "datasource": "namespaces",
                    "field": "optionLabels",
                    "optionLabels": "namespaces:devices_switchMultilevel:deviceName"
                },
                "green": {
                    "label": "Green",
                    "type": "select",
                    "datasource": "namespaces",
                    "field": "optionLabels",
                    "optionLabels": "namespaces:devices_switchMultilevel:deviceName"
                },
                "blue": {
                    "label": "Blue",
                    "type": "select",
                    "datasource": "namespaces",
                    "field": "optionLabels",
                    "optionLabels": "namespaces:devices_switchMultilevel:deviceName"
                }
            }
        },
        "id": "RGB",
        "className": "RGB",
        "created": false
    }, {
        "singleton": true,
        "dependencies": [],
        "category": "security",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "RemoteAccess",
        "version": "1.0.0",
        "state": "hidden",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Remote Access",
            "description": "Is necessary to configure remote access in SmartHome UI.",
            "path": "",
            "userId": "",
            "actStatus": "",
            "sshStatus": "",
            "zbwStatus": "",
            "pass": "",
            "lastChange": {}
        },
        "schema": {"type": "object", "properties": {"path": {"required": false}}, "required": false},
        "options": {
            "fields": {
                "path": {
                    "label": "Absolute path to ZBWConnect on server:",
                    "helper": "e.g. /etc/zbw or ./zbw - not necessary on raspberry",
                    "required": false
                }
            }
        },
        "id": "RemoteAccess",
        "className": "RemoteAccess",
        "created": true
    }, {
        "dependencies": [],
        "singleton": false,
        "category": "scenes",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "RoundRobinScenes",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Round Robin Scene Switcher",
            "description": "Activate scenes in round robin policy.",
            "scenes": []
        },
        "schema": {
            "type": "object",
            "properties": {
                "scenes": {
                    "type": "array",
                    "items": {
                        "field": "enum",
                        "datasource": "namespaces",
                        "enum": "namespaces:devices_toggleButton:deviceId",
                        "required": true
                    }
                }
            },
            "required": true
        },
        "options": {
            "fields": {
                "scenes": {
                    "label": "List of scenes to activate",
                    "fields": {
                        "item": {
                            "type": "select",
                            "datasource": "namespaces",
                            "field": "optionLabels",
                            "optionLabels": "namespaces:devices_toggleButton:deviceName"
                        }
                    }
                }
            }
        },
        "id": "RoundRobinScenes",
        "className": "RoundRobinScenes",
        "created": false
    }, {
        "singleton": false,
        "category": "scheduling",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "ScheduledScene",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Scheduled Scene",
            "description": "Executes an already defined scene at a certain point in time.",
            "weekdays": [1, 2, 3, 4, 5, 6, 0],
            "time": "00:00",
            "scene": ""
        },
        "schema": {
            "type": "object",
            "properties": {
                "weekdays": {"type": "array", "enum": [1, 2, 3, 4, 5, 6, 0], "required": true},
                "time": {"type": "string", "required": true},
                "scene": {
                    "field": "enum",
                    "datasource": "namespaces",
                    "enum": "namespaces:devices_toggleButton:deviceId",
                    "required": true
                }
            },
            "required": true
        },
        "options": {
            "fields": {
                "weekdays": {
                    "type": "checkbox",
                    "optionLabels": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
                },
                "time": {
                    "type": "time",
                    "maskString": "99:99",
                    "timeFormat": "hh:mm",
                    "timeFormatRegex": "/^(([0-1][0-9])|([2][0-3])):([0-5][0-9])$/"
                },
                "scene": {
                    "label": "Activate scene",
                    "type": "select",
                    "datasource": "namespaces",
                    "field": "optionLabels",
                    "optionLabels": "namespaces:devices_toggleButton:deviceName"
                }
            }
        },
        "id": "ScheduledScene",
        "className": "ScheduledScene",
        "created": false
    }, {
        "singleton": false,
        "category": "security",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "SecurityMode",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Security Mode",
            "description": "Security mode allows to switch sensors in security mode to trigger security scenes and devices, e.g. sirens.",
            "tests": [],
            "action": {"api_key": "", "phone": "", "message": "Alert!"}
        },
        "schema": {
            "type": "object",
            "properties": {
                "tests": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "testType": {
                                "type": "string",
                                "enum": ["binary", "multilevel", "remote"],
                                "required": true,
                                "default": "binary"
                            },
                            "testBinary": {
                                "type": "object",
                                "dependencies": "testType",
                                "properties": {
                                    "device": {
                                        "field": "enum",
                                        "datasource": "namespaces",
                                        "enum": "namespaces:devices_sensorBinary:deviceId,namespaces:devices_switchBinary:deviceId",
                                        "required": true
                                    },
                                    "testValue": {
                                        "type": "string",
                                        "enum": ["on", "off"],
                                        "required": true,
                                        "default": "on"
                                    }
                                }
                            },
                            "testMultilevel": {
                                "type": "object",
                                "dependencies": "testType",
                                "properties": {
                                    "device": {
                                        "field": "enum",
                                        "datasource": "namespaces",
                                        "enum": "namespaces:devices_sensorMultilevel:deviceId,namespaces:devices_switchMultilevel:deviceId",
                                        "required": true
                                    },
                                    "testOperator": {
                                        "type": "string",
                                        "enum": ["=", "!=", ">", ">=", "<", "<="],
                                        "required": true
                                    },
                                    "testValue": {"type": "number", "required": true}
                                }
                            },
                            "testRemote": {
                                "type": "object",
                                "dependencies": "testType",
                                "properties": {
                                    "device": {
                                        "field": "enum",
                                        "datasource": "namespaces",
                                        "enum": "namespaces:devices_switchControl:deviceId",
                                        "required": true
                                    },
                                    "testValue": {
                                        "type": "string",
                                        "enum": ["on", "off", "upstart", "upstop", "downstart", "downstop"],
                                        "required": true
                                    }
                                }
                            }
                        }
                    }
                },
                "action": {
                    "type": "object",
                    "properties": {
                        "phone": {"required": false, "pattern": "[1-9][0-9]*"},
                        "message": {"required": false},
                        "api_key": {
                            "required": false,
                            "pattern": "[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{8}"
                        },
                        "switches": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "device": {
                                        "field": "enum",
                                        "datasource": "namespaces",
                                        "enum": "namespaces:devices_switchBinary:deviceId",
                                        "required": true
                                    },
                                    "status": {
                                        "type": "number",
                                        "required": true,
                                        "enum": ["on", "off"],
                                        "default": true
                                    }
                                }
                            }
                        },
                        "dimmers": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "device": {
                                        "field": "enum",
                                        "datasource": "namespaces",
                                        "enum": "namespaces:devices_switchMultilevel:deviceId",
                                        "required": true
                                    }, "status": {"required": true, "minimum": 0, "maximum": 99}
                                }
                            }
                        },
                        "locks": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "device": {
                                        "field": "enum",
                                        "datasource": "namespaces",
                                        "enum": "namespaces:devices_doorlock:deviceId",
                                        "required": true
                                    }, "status": {"type": "number", "required": true, "enum": ["open", "close"]}
                                }
                            }
                        },
                        "scenes": {
                            "type": "array",
                            "items": {
                                "field": "enum",
                                "datasource": "namespaces",
                                "enum": "namespaces:devices_toggleButton:deviceId",
                                "required": true
                            }
                        }
                    },
                    "required": false
                }
            }
        },
        "options": {
            "fields": {
                "tests": {
                    "label": "Sensors:",
                    "fields": {
                        "item": {
                            "fields": {
                                "testType": {"type": "select", "default": ""},
                                "testBinary": {
                                    "label": "Binary condition",
                                    "dependencies": {"testType": "binary"},
                                    "fields": {
                                        "device": {
                                            "label": "",
                                            "type": "select",
                                            "datasource": "namespaces",
                                            "field": "optionLabels",
                                            "optionLabels": "namespaces:devices_sensorBinary:deviceName,namespaces:devices_switchBinary:deviceName"
                                        }
                                    }
                                },
                                "testMultilevel": {
                                    "label": "Multilevel condition",
                                    "dependencies": {"testType": "multilevel"},
                                    "fields": {
                                        "device": {
                                            "label": "",
                                            "type": "select",
                                            "datasource": "namespaces",
                                            "field": "optionLabels",
                                            "optionLabels": "namespaces:devices_sensorMultilevel:deviceName,namespaces:devices_switchMultilevel:deviceName"
                                        },
                                        "testOperator": {
                                            "type": "select",
                                            "optionLabels": ["=", "≠", ">", "≥", "<", "≤"]
                                        }
                                    }
                                },
                                "testRemote": {
                                    "label": "Remote condition",
                                    "dependencies": {"testType": "remote"},
                                    "fields": {
                                        "device": {
                                            "label": "",
                                            "type": "select",
                                            "datasource": "namespaces",
                                            "field": "optionLabels",
                                            "optionLabels": "namespaces:devices_switchControl:deviceName"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "action": {
                    "label": "Actions",
                    "fields": {
                        "phone": {"label": "Phone number to send SMS. In form of 79261234567"},
                        "message": {"label": "Message"},
                        "api_key": {
                            "label": "API key from SMS.ru",
                            "helper": "After registration on the right you will see api_id (looks like a43f6376-f57d-27e4-5981-ec48945d871f)"
                        },
                        "switches": {
                            "label": "List of switches:",
                            "fields": {
                                "item": {
                                    "fields": {
                                        "device": {
                                            "label": "",
                                            "type": "select",
                                            "datasource": "namespaces",
                                            "field": "optionLabels",
                                            "optionLabels": "namespaces:devices_switchBinary:deviceName"
                                        }, "status": {"label": "", "optionLabels": ["On", "Off"]}
                                    }
                                }
                            }
                        },
                        "dimmers": {
                            "label": "List of dimmers:",
                            "fields": {
                                "item": {
                                    "fields": {
                                        "device": {
                                            "label": "",
                                            "type": "select",
                                            "datasource": "namespaces",
                                            "field": "optionLabels",
                                            "optionLabels": "namespaces:devices_switchMultilevel:deviceName"
                                        }, "status": {"label": "Level", "type": "integer"}
                                    }
                                }
                            }
                        },
                        "locks": {
                            "label": "List of locks:",
                            "fields": {
                                "item": {
                                    "fields": {
                                        "device": {
                                            "label": "",
                                            "type": "select",
                                            "datasource": "namespaces",
                                            "field": "optionLabels",
                                            "optionLabels": "namespaces:devices_doorlock:deviceName"
                                        }, "status": {"label": "", "optionLabels": ["Open", "Close"]}
                                    }
                                }
                            }
                        },
                        "scenes": {
                            "label": "List of scenes to activate:",
                            "fields": {
                                "item": {
                                    "type": "select",
                                    "datasource": "namespaces",
                                    "field": "optionLabels",
                                    "optionLabels": "namespaces:devices_toggleButton:deviceName"
                                }
                            }
                        }
                    }
                }
            }
        },
        "id": "SecurityMode",
        "className": "SecurityMode",
        "created": false
    }, {
        "dependencies": [],
        "singleton": false,
        "category": "logging",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "SensorValueLogging",
        "version": "1.0.1",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Sensor Values Logging",
            "description": "Store sensor values in JSON file or via HTTP requests to your server.",
            "device": ""
        },
        "schema": {
            "type": "object",
            "properties": {
                "device": {
                    "field": "enum",
                    "datasource": "namespaces",
                    "enum": "namespaces:devices_sensorBinary:deviceId,namespaces:devices_sensorMultilevel:deviceId,namespaces:devices_switchBinary:deviceId,namespaces:devices_switchMultilevel:deviceId,namespaces:devices_doorlock:deviceId,namespaces:devices_switchControl:deviceId",
                    "required": true
                },
                "logTo": {"enum": ["JSONFile", "HTTPGET"], "required": true},
                "url": {"type": "string", "depends": "logTo", "required": true, "dependencies": "logTo"}
            },
            "required": false
        },
        "options": {
            "fields": {
                "device": {
                    "label": "Sensor to log",
                    "datasource": "namespaces",
                    "field": "optionLabels",
                    "optionLabels": "namespaces:devices_sensorBinary:deviceName,namespaces:devices_sensorMultilevel:deviceName,namespaces:devices_switchBinary:deviceName,namespaces:devices_switchMultilevel:deviceName,namespaces:devices_doorlock:deviceName,namespaces:devices_switchControl:deviceName"
                },
                "logTo": {
                    "label": "How to store:",
                    "optionLables": ["to JSON file in storage", "send via HTTP request"]
                },
                "url": {
                    "label": "HTTP request to do. Strings ${id} and ${value} are replaced by sensor ID and value correspondingly",
                    "helper": "Example: http://mydomainname.org/path/to/something/${id}?myval=${value}",
                    "dependencies": {"logTo": "HTTPGET"}
                }
            }
        },
        "id": "SensorValueLogging",
        "className": "SensorValueLogging",
        "created": false
    }, {
        "dependencies": ["Cron"],
        "singleton": true,
        "category": "scheduling",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "state": "hidden",
        "icon": "icon.png",
        "moduleName": "SensorsPolling",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Periodical Sensor Polling",
            "description": "Queries in an adjustable interval all measurement sensors. It can be entered a list of sensors, which should not be queried.",
            "devices": [],
            "period": 60
        },
        "schema": {
            "type": "object",
            "properties": {
                "devices": {
                    "type": "array",
                    "items": {
                        "field": "enum",
                        "datasource": "namespaces",
                        "enum": "namespaces:devices_sensorBinary:deviceId,namespaces:devices_sensorMultilevel:deviceId",
                        "required": false
                    }
                },
                "period": {
                    "type": "select",
                    "required": true,
                    "enum": [1, 2, 5, 10, 20, 30, 60, 120, 240, 360, 720, 1440, 10080]
                }
            },
            "required": false
        },
        "options": {
            "fields": {
                "devices": {
                    "label": "Do not poll this devices:",
                    "fields": {
                        "item": {
                            "type": "select",
                            "datasource": "namespaces",
                            "field": "optionLabels",
                            "optionLabels": "namespaces:devices_sensorBinary:deviceName,namespaces:devices_sensorMultilevel:deviceName"
                        }
                    }
                },
                "period": {
                    "label": "Poll period for other devices:",
                    "optionLabels": ["1 minute", "2 minute", "5 minute", "10 minute", "20 minute", "30 minute", "1 hour", "2 hours", "4 hours", "6 hours", "12 hours", "daily", "weekly"]
                }
            }
        },
        "id": "SensorsPolling",
        "className": "SensorsPolling",
        "created": false
    }, {
        "autoload": false,
        "singleton": true,
        "userView": true,
        "icon": "icon.png",
        "moduleName": "SensorsPollingLogging",
        "defaults": {
            "title": "Poll sensors and log values periodically",
            "description": "Regular sensors polling and logging",
            "devices": [],
            "period": 60
        },
        "schema": {
            "type": "object",
            "properties": {
                "devices": {
                    "type": "array",
                    "items": {
                        "field": "enum",
                        "datasource": "namespaces",
                        "enum": "namespaces:devices_sensorBinary:deviceId,namespaces:devices_sensorMultilevel:deviceId",
                        "required": true
                    }
                },
                "period": {
                    "type": "select",
                    "required": true,
                    "enum": [1, 2, 5, 10, 20, 30, 60, 120, 240, 360, 720, 1440, 10080]
                },
                "polling": {
                    "type": "select",
                    "required": true,
                    "enum": [1, 2, 5, 10, 30, 60, 120, 300, 600, 1200, 2400, 3600]
                },
                "logTo": {"enum": ["JSONFile", "HTTPGET"], "required": true},
                "url": {"type": "string", "depends": "logTo", "required": true, "dependencies": "logTo"}
            },
            "required": false
        },
        "options": {
            "fields": {
                "devices": {
                    "label": "Sensors to poll:",
                    "fields": {
                        "item": {
                            "type": "select",
                            "datasource": "namespaces",
                            "field": "optionLabels",
                            "optionLabels": "namespaces:devices_sensorBinary:deviceName,namespaces:devices_sensorMultilevel:deviceName"
                        }
                    }
                },
                "period": {
                    "label": "Poll period",
                    "optionLabels": ["1 minute", "2 minute", "5 minute", "10 minute", "20 minute", "30 minute", "1 hour", "2 hours", "4 hours", "6 hours", "twice per day", "daily", "weekly"]
                },
                "polling": {
                    "label": "Poll timeout",
                    "helper": "Polling will issue 'update' command to the items and then wait for a while untill it's value changed. This timeout limits the time of waiting",
                    "optionLabels": ["1 second", "2 seconds", "5 seconds", "10 seconds", "30 seconds", "1 minute", "2 minutes", "5 minutes", "10 minutes", "20 minutes", "40 minutes", "1 hour"]
                },
                "logTo": {
                    "label": "How to store:",
                    "optionLables": ["to JSON file in storage", "send via HTTP request"]
                },
                "url": {
                    "label": "HTTP request to do. Strings ${id} and ${value} are replaced by sensor ID and value correspondingly",
                    "helper": "Example: http://mydomainname.org/path/to/something/${id}?myval=${value}",
                    "dependencies": {"logTo": "HTTPGET"}
                }
            }
        },
        "id": "SensorsPollingLogging",
        "className": "SensorsPollingLogging",
        "created": false
    }, {
        "dependencies": [],
        "singleton": false,
        "category": "automation",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "SmartLight",
        "version": "1.1.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Smart Light",
            "description": "In the daytime light is switched on for 100%, at night the light turns on for 20%. If you select the button dimmer, when you press the dimmer button up - light will turn on for 100%, if press button down - light will turn off and one minute will not respond to the motion sensor.",
            "MotionSensor": null,
            "Dimmer": null,
            "Level": {"DayLevel": "99", "NightLevel": "20"},
            "Day": {"DayTimeStart": "07:00", "DayTimeEnd": "23:59"},
            "DimmerButton": null
        },
        "schema": {
            "type": "object",
            "properties": {
                "MotionSensor": {
                    "field": "enum",
                    "datasource": "namespaces",
                    "enum": "namespaces:devices_sensorBinary:deviceId",
                    "required": true
                },
                "Dimmer": {
                    "field": "enum",
                    "datasource": "namespaces",
                    "enum": "namespaces:devices_switchMultilevel:deviceId",
                    "required": true
                },
                "Level": {
                    "type": "object",
                    "properties": {
                        "DayLevel": {"type": "integer", "minimum": 0, "maximum": 99, "required": true},
                        "NightLevel": {"type": "integer", "minimum": 0, "maximum": 99, "required": true}
                    }
                },
                "Day": {
                    "type": "object",
                    "properties": {
                        "DayTimeStart": {"type": "string", "required": true},
                        "DayTimeEnd": {"type": "string", "required": true}
                    }
                },
                "DimmerButton": {
                    "field": "enum",
                    "datasource": "namespaces",
                    "enum": "namespaces:devices_switchControl:deviceId",
                    "required": false
                }
            },
            "required": true
        },
        "options": {
            "fields": {
                "MotionSensor": {
                    "label": "Motion Sensor",
                    "type": "select",
                    "datasource": "namespaces",
                    "field": "optionLabels",
                    "optionLabels": "namespaces:devices_sensorBinary:deviceName"
                },
                "Dimmer": {
                    "label": "Dimmer",
                    "type": "select",
                    "datasource": "namespaces",
                    "field": "optionLabels",
                    "optionLabels": "namespaces:devices_switchMultilevel:deviceName"
                },
                "Level": {
                    "label": "Dimmer levels for day and night",
                    "fields": {"DayLevel": {"label": "Day Level"}, "NightLevel": {"label": "Night Level"}}
                },
                "Day": {
                    "label": "The time interval when the light is switched on for Day Level",
                    "fields": {
                        "DayTimeStart": {
                            "label": "Start",
                            "type": "time",
                            "maskString": "99:99",
                            "timeFormat": "hh:mm",
                            "timeFormatRegex": "/^(([0-1][0-9])|([2][0-3])):([0-5][0-9])$/"
                        },
                        "DayTimeEnd": {
                            "label": "End",
                            "type": "time",
                            "maskString": "99:99",
                            "timeFormat": "hh:mm",
                            "timeFormatRegex": "/^(([0-1][0-9])|([2][0-3])):([0-5][0-9])$/"
                        }
                    }
                },
                "DimmerButton": {
                    "label": "Dimmer Button",
                    "type": "select",
                    "datasource": "namespaces",
                    "field": "optionLabels",
                    "optionLabels": "namespaces:devices_switchControl:deviceName",
                    "helper": "To generate dimmer button activate module SwitchControlGenerator and then press dimmer button"
                }
            }
        },
        "id": "SmartLight",
        "className": "SmartLight",
        "created": false
    }, {
        "singleton": false,
        "dependencies": [],
        "category": "devices",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "Sonos",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Sonos",
            "description": "Create toggle device for Sonos Play, Pause, Forward, Backward and Volume controls.",
            "households": []
        },
        "schema": {
            "type": "object",
            "properties": {"households": {"type": "array", "items": {"type": "string"}, "required": true}}
        },
        "options": {"fields": {"households": {"fields": {"item": {"label": "Sonos household (filled automatically on Mute + Volume Up key press)"}}}}},
        "id": "Sonos",
        "className": "Sonos",
        "created": false
    }, {
        "dependencies": [],
        "singleton": true,
        "category": "peripherals",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "SwitchControlGenerator",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Trap events from Remotes and Sensors",
            "description": "Generates new widgets on the fly for Remote Switch Controls and other devices sending control commands to controller.",
            "trapNew": true,
            "generated": [],
            "banned": []
        },
        "schema": {
            "type": "object",
            "properties": {
                "trapNew": {"type": "boolean"},
                "banned": {
                    "type": "array",
                    "items": {
                        "field": "enum",
                        "datasource": "namespaces",
                        "enum": "namespaces:devices_switchControl:deviceId",
                        "required": true
                    }
                },
                "generated": {
                    "type": "array",
                    "items": {
                        "field": "enum",
                        "datasource": "namespaces",
                        "enum": "namespaces:devices_switchControl:deviceId",
                        "required": true
                    }
                }
            },
            "required": false
        },
        "options": {
            "fields": {
                "trapNew": {
                    "label": "",
                    "rightLabel": "Create control device for new remote controls and switches"
                },
                "banned": {
                    "label": "List of remotes and switches not to instantiate",
                    "fields": {
                        "item": {
                            "type": "select",
                            "datasource": "namespaces",
                            "field": "optionLabels",
                            "optionLabels": "namespaces:devices_switchControl:deviceName"
                        }
                    }
                },
                "generated": {
                    "label": "List of remotes and switches to instantiate (filled automatically)",
                    "fields": {
                        "item": {
                            "type": "select",
                            "readonly": true,
                            "datasource": "namespaces",
                            "field": "optionLabels",
                            "optionLabels": "namespaces:devices_switchControl:deviceName"
                        }
                    }
                }
            }
        },
        "id": "SwitchControlGenerator",
        "className": "SwitchControlGenerator",
        "created": false
    }, {
        "dependencies": ["Cron"],
        "singleton": true,
        "category": "scheduling",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "SwitchPolling",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Periodical Switch Polling",
            "description": "Regular switch polling",
            "devices": [],
            "period": 60
        },
        "schema": {
            "type": "object",
            "properties": {
                "devices": {
                    "type": "array",
                    "items": {
                        "field": "enum",
                        "datasource": "namespaces",
                        "enum": "namespaces:devices_switchBinary:deviceId,namespaces:devices_switchMultilevel:deviceId",
                        "required": false
                    }
                },
                "period": {
                    "type": "select",
                    "required": true,
                    "enum": [1, 2, 5, 10, 20, 30, 60, 120, 240, 360, 720, 1440, 10080]
                }
            },
            "required": false
        },
        "options": {
            "fields": {
                "devices": {
                    "label": "Switches excluded from polling:",
                    "fields": {
                        "item": {
                            "type": "select",
                            "datasource": "namespaces",
                            "field": "optionLabels",
                            "optionLabels": "namespaces:devices_switchBinary:deviceName,namespaces:devices_switchMultilevel:deviceName"
                        }
                    }
                },
                "period": {
                    "label": "Poll period",
                    "optionLabels": ["1 minute", "2 minute", "5 minute", "10 minute", "20 minute", "30 minute", "1 hour", "2 hours", "4 hours", "6 hours", "twice per day", "daily", "weekly"]
                }
            }
        },
        "id": "SwitchPolling",
        "className": "SwitchPolling",
        "created": false
    }, {
        "dependencies": [],
        "singleton": true,
        "category": "tagging",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "TagOnOff",
        "version": "1.1.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Tag devices with On/Off",
            "description": "Mark devices with On/Off tags depending on their state.",
            "tagOn": "On",
            "tagOff": "Off"
        },
        "schema": {
            "type": "object",
            "properties": {
                "tagOn": {"type": "string", "required": true},
                "tagOff": {"type": "string", "required": true}
            }
        },
        "options": {"fields": {"tagOn": {"label": "Tag for On state"}, "tagOff": {"label": "Tag for Off state"}}},
        "id": "TagOnOff",
        "className": "TagOnOff",
        "created": false
    }, {
        "dependencies": [],
        "singleton": false,
        "category": "climate",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "ThermostatDevice",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Virtual Thermostat",
            "description": "Create thermostat devices based on a switch and temperature sensor.",
            "switch": "",
            "sensor": "",
            "heaton": true
        },
        "schema": {
            "type": "object",
            "properties": {
                "switch": {
                    "field": "enum",
                    "datasource": "namespaces",
                    "enum": "namespaces:devices_switchBinary:deviceId",
                    "required": true
                },
                "sensor": {
                    "field": "enum",
                    "datasource": "namespaces",
                    "enum": "namespaces:devices_sensorMultilevel:deviceId",
                    "required": true
                },
                "heaton": {"enum": [true, false], "required": true},
                "hysteresis": {"minimum": 0, "maximum": 5, "required": true}
            },
            "required": false
        },
        "options": {
            "fields": {
                "switch": {
                    "label": "Switch",
                    "type": "select",
                    "datasource": "namespaces",
                    "field": "optionLabels",
                    "optionLabels": "namespaces:devices_switchBinary:deviceName"
                },
                "sensor": {
                    "label": "Temperature sensor",
                    "type": "select",
                    "datasource": "namespaces",
                    "field": "optionLabels",
                    "optionLabels": "namespaces:devices_sensorMultilevel:deviceName"
                },
                "heaton": {"label": "Mode", "type": "select", "optionLabels": ["Heat", "Cool"]},
                "hysteresis": {
                    "label": "Hysteresis",
                    "type": "number",
                    "helper": "Maximal delta between current and target temperature after which thermostat should turn on/off"
                }
            }
        },
        "id": "ThermostatDevice",
        "className": "ThermostatDevice",
        "created": false
    }, {
        "singleton": false,
        "dependencies": [],
        "category": "surveillance",
        "author": "Z-Wave.Me",
        "homepage": "http://www.foscam.com/",
        "state": "camera",
        "icon": "icon.png",
        "moduleName": "VistaCam",
        "version": "1.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {"title": "VisaCam", "description": "Support the MIOS VistaCam", "url": "", "doorDevices": []},
        "schema": {
            "type": "object",
            "properties": {
                "url": {"required": true},
                "doorDevices": {
                    "type": "array",
                    "items": {
                        "field": "enum",
                        "datasource": "namespaces",
                        "enum": "namespaces:devices_doorlock:deviceId,namespaces:devices_switchBinary:deviceId",
                        "required": false
                    }
                }
            },
            "required": false
        },
        "options": {
            "fields": {
                "url": {
                    "label": "Camera IP URL",
                    "helper": "in the format 'http://IPADDRESS:PORT'",
                    "required": true
                },
                "doorDevices": {
                    "label": "Door device",
                    "fields": {
                        "item": {
                            "type": "select",
                            "datasource": "namespaces",
                            "field": "optionLabels",
                            "optionLabels": "namespaces:devices_doorlock:deviceName,namespaces:devices_switchBinary:deviceName"
                        }
                    }
                }
            }
        },
        "id": "VistaCam",
        "className": "VistaCam",
        "created": false
    }, {
        "singleton": false,
        "category": "environment",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "icon": "icon.png",
        "moduleName": "YandexProbki",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {"title": "Yandex Probki", "description": "Traffic Jam provided by Yandex.ru", "city": ""},
        "schema": {
            "type": "object",
            "properties": {
                "city": {
                    "type": "string",
                    "enum": ["Moscow", "Saint Petersburg", "Kaluga", "Kursk", "Lipetsk", "Orel", "Ryazan", "Tver", "Tula", "Yaroslavl", "Vologda", "Kaliningrad", "Murmansk", "Veliky Novgorod", "Pskov", "Krasnodar", "Stavropol", "Astrahan", "Volgograd", "Rostov-na-Donu", "Saransk", "Kazan", "Izhevsk", "Kirov", "Nizhny Novgorod", "Orenburg", "Penza", "Perm", "Samara", "Yekaterinburg", "Tyumen", "Chelyabinsk", "Krasnoyarsk", "Irkutsk", "Kemerovo", "Novosibirsk", "Omsk", "Tomsk", "Vladivostok", "Khabarovsk", "Dnipropetrovsk", "Donetsk", "Kyiv", "Lvov", "Odessa", "Simferopol", "Kharkiv", "Nikolaev", "Minsk", "Almaty", "Astana", "Ufa", "Vladimir", "Voronezh", "Saratov", "Ulyanovsk", "Barnaul", "Luhansk", "Naberezhnie Chelny", "Sochi", "Zaporizhia", "Khmelnitsky", "Kherson", "Vinnytsia", "Poltava", "Sumy", "Chernihiv", "Cherepovets", "Novorossiysk", "Taganrog", "Tuapse", "Anapa", "Kryvyi Rih", "Rovno", "Ternopol", "Uzhgorod", "Cherkassi", "Mariupol", "Bila Tserkva", "Gelendgik", "Adana", "Ankara", "Bursa", "İzmir", "Istanbul", "Antalya", "Kirovohrad", "Lutck", "Kremenchuk", "Horlivka", "Konya", "Gaziantep"],
                    "default": "Moscow",
                    "required": true
                }
            },
            "required": true
        },
        "options": {"fields": {"city": {"type": "select"}}},
        "id": "YandexProbki",
        "className": "YandexProbki",
        "created": false
    }, {
        "dependencies": [],
        "singleton": true,
        "category": "peripherals",
        "author": "Z-Wave.Me",
        "homepage": "http://razberry.z-wave.me",
        "state": "hidden",
        "icon": "icon.png",
        "moduleName": "ZWave",
        "version": "2.0.0",
        "maturity": "stable",
        "repository": {"type": "git", "source": "https://github.com/Z-Wave-Me/home-automation"},
        "defaults": {
            "title": "Z-Wave Network Access",
            "description": "Allows accessing Z-Wave devices from attached Z-Wave transceiver.",
            "name": "zway",
            "port": "/dev/ttyACM0",
            "enableAPI": true,
            "publicAPI": true,
            "createVDev": true,
            "config": "config",
            "translations": "translations",
            "ZDDX": "ZDDX"
        },
        "schema": {
            "type": "object",
            "properties": {
                "port": {"type": "string", "required": true},
                "name": {"type": "string", "required": true},
                "enableAPI": {"type": "boolean", "default": true},
                "publicAPI": {"type": "boolean", "default": true},
                "createVDev": {"type": "boolean", "default": true},
                "config": {"type": "string", "required": true},
                "translations": {"type": "string", "required": true},
                "ZDDX": {"type": "string", "required": true}
            },
            "required": false
        },
        "options": {
            "fields": {
                "port": {"label": "Serial port to Z-Wave dongle"},
                "name": {
                    "label": "Internal name",
                    "helper": "Should be a valid JS key string. Don't change unless you know what you are doing"
                },
                "enableAPI": {
                    "type": "checkbox",
                    "rightLabel": "Enable Z-Wave API",
                    "helper": "Handler HTTP requests to /ZWaveAPI/* and /ZWave/<internal zway name>/*"
                },
                "publicAPI": {
                    "type": "checkbox",
                    "rightLabel": "Allow public access to Z-Wave API",
                    "helper": "Do not ask for authentication to access Z-Wave API"
                },
                "createVDev": {
                    "type": "checkbox",
                    "rightLabel": "Create virtual devices in Home Automation engine",
                    "helper": "Without this Z-Wave devices will be visible only in Expert UI and via Z-Wave API"
                },
                "config": {
                    "hidden": true,
                    "label": "Path to config folder",
                    "helper": "Don't change unless you know what you are doing"
                },
                "translations": {
                    "hidden": true,
                    "label": "Path to dictionaries folder",
                    "helper": "Don't change unless you know what you are doing"
                },
                "ZDDX": {
                    "hidden": true,
                    "label": "Path to ZDDX database",
                    "helper": "Don't change unless you know what you are doing"
                }
            }
        },
        "id": "ZWave",
        "className": "ZWave",
        "created": true
    }], "code": 200, "message": "200 OK", "error": null
};
exports.instances = {
    "data": [{
        "id": 1,
        "moduleId": "ZWave",
        "params": {
            "name": "zway",
            "port": "/dev/ttyAMA0",
            "enableAPI": true,
            "publicAPI": false,
            "createVDev": true,
            "config": "config",
            "translations": "translations",
            "ZDDX": "ZDDX"
        },
        "active": true,
        "state": "hidden",
        "title": "Z-Wave Network Access",
        "description": "Allows accessing Z-Wave devices from attached Z-Wave transceiver.\n(Added by default)",
        "module": "Z-Wave Network Access"
    }, {
        "id": 2,
        "moduleId": "Cron",
        "params": {},
        "active": true,
        "title": "System Clock (CRON)",
        "state": "hidden",
        "description": "Scheduler used by other modules\n(Added by default)",
        "module": "System Clock (CRON)"
    }, {
        "id": 3,
        "moduleId": "InbandNotifications",
        "params": {},
        "active": true,
        "state": null,
        "title": "Inband Notifier",
        "description": "Creates and records the presentation of events in the event list (Eventlog).\n(Added by default)",
        "module": "Inband Notifier"
    }, {
        "id": 4,
        "moduleId": "RemoteAccess",
        "active": true,
        "title": "Remote Access",
        "description": "Is necessary to configure remote access in SmartHome UI.\n(Added by default)",
        "params": {
            "path": "",
            "userId": "",
            "actStatus": true,
            "sshStatus": false,
            "zbwStatus": true,
            "pass": "",
            "lastChange": {}
        },
        "state": "hidden",
        "module": "Remote Access"
    }, {
        "moduleId": "InfoWidget",
        "active": "true",
        "title": "Information for Expert Users",
        "description": "This is an Information for Expert Users.",
        "params": {
            "widgets": [{
                "headline": "Dear Expert User",
                "text": "If you still want to use ExpertUI please use this link <strong> >> <a href=\"/expert\">Go to Expert UI!</a> << </strong> <br>\nor call after you are successfully logged in <strong> 'http://MYRASP:8083/expert'</strong> in your browser. <br> <br>\nYou could hide or remove this widget in menu \"Apps > Active Tab\". \n",
                "imgURI": "/expert/app/images/zplus.jpg"
            }]
        },
        "id": 5,
        "state": null,
        "module": "Informations Widget"
    }], "code": 200, "message": "200 OK", "error": null
};
exports.instance1 = {
    "data": {
        "id": 1,
        "moduleId": "ZWave",
        "params": {
            "name": "zway",
            "port": "/dev/ttyAMA0",
            "enableAPI": true,
            "publicAPI": false,
            "createVDev": true,
            "config": "config",
            "translations": "translations",
            "ZDDX": "ZDDX"
        },
        "active": true,
        "state": "hidden",
        "title": "Z-Wave Network Access",
        "description": "Allows accessing Z-Wave devices from attached Z-Wave transceiver.\n(Added by default)",
        "module": "Z-Wave Network Access"
    }, "code": 200, "message": "200 OK", "error": null
};
exports.devices = {
    "data": {
        "structureChanged": true,
        "updateTime": 1440013653,
        "devices": [{
            "creatorId": 5,
            "deviceType": "text",
            "h": -385669735,
            "hasHistory": false,
            "id": "InfoWidget_5_0",
            "location": 2,
            "metrics": {
                "title": "Dear Expert User",
                "text": "If you still want to use ExpertUI please use this link <strong> >> <a href=\"/expert\">Go to Expert UI!</a> << </strong> <br>\nor call after you are successfully logged in <strong> 'http://MYRASP:8083/expert'</strong> in your browser. <br> <br>\nYou could hide or remove this widget in menu \"Apps > Active Tab\". \n",
                "img": "/expert/app/images/zplus.jpg"
            },
            "permanently_hidden": false,
            "tags": [],
            "visibility": true,
            "updateTime": 1439781434
        }, {
            "creatorId": 1,
            "deviceType": "thermostat",
            "h": 1078450008,
            "hasHistory": false,
            "id": "ZWayVDev_zway_2-0-67",
            "location": "2",
            "metrics": {
                "scaleTitle": "°C",
                "level": 18,
                "min": 5,
                "max": 40,
                "icon": "thermostat",
                "title": "Thermostat 2-0 Danfoss Couloir"
            },
            "permanently_hidden": false,
            "tags": [],
            "visibility": true,
            "updateTime": 1440013489
        }, {
            "creatorId": 1,
            "deviceType": "battery",
            "h": -927793024,
            "hasHistory": false,
            "id": "ZWayVDev_zway_2-0-128",
            "location": "2",
            "metrics": {
                "probeTitle": "Battery",
                "scaleTitle": "%",
                "level": 97,
                "icon": "battery",
                "title": "Battery 2-0 Danfoss Couloir"
            },
            "permanently_hidden": false,
            "tags": [],
            "visibility": true,
            "updateTime": 1440013489
        }]
    }, "code": 200, "message": "200 OK", "error": null
};
exports.device1 = {
    "data": {
        "creatorId": 1,
        "deviceType": "battery",
        "h": -927793024,
        "hasHistory": false,
        "id": "ZWayVDev_zway_2-0-128",
        "location": "2",
        "metrics": {
            "probeTitle": "Battery",
            "scaleTitle": "%",
            "level": 97,
            "icon": "battery",
            "title": "Battery 2-0 Danfoss Couloir"
        },
        "permanently_hidden": false,
        "tags": [],
        "visibility": true,
        "updateTime": 1440013489
    }, "code": 200, "message": "200 OK", "error": null
};
exports.locations = {
    "data": [{
        "id": 1,
        "title": "Bureau",
        "user_img": "",
        "default_img": "living_room.jpg",
        "img_type": "default"
    }, {"id": 2, "title": "Couloir", "user_img": "", "default_img": "kitchen.jpg", "img_type": "default"}],
    "code": 200,
    "message": "200 OK",
    "error": null
};
exports.locations1 = {
    "data": {
        "id": 1,
        "title": "Bureau",
        "user_img": "",
        "default_img": "living_room.jpg",
        "img_type": "default"
    }, "code": 200, "message": "200 OK", "error": null
};
exports.profiles = {
    "data": [{
        "id": 1,
        "name": "Administrator",
        "lang": "en",
        "color": "#dddddd",
        "dashboard": ["ZWayVDev_zway_2-0-67"],
        "interval": 2000,
        "rooms": [0],
        "hide_all_device_events": false,
        "hide_system_events": false,
        "hide_single_device_events": []
    }, {
        "id": 2,
        "name": "Local User",
        "lang": "en",
        "color": "#dddddd",
        "dashboard": [],
        "interval": 2000,
        "rooms": [0],
        "hide_all_device_events": false,
        "hide_system_events": false,
        "hide_single_device_events": []
    }], "code": 200, "message": "200 OK", "error": null
};
exports.profiles1 = {
    "data": {
        "id": 1,
        "role": 1,
        "login": "admin",
        "password": "admin",
        "name": "Administrator",
        "lang": "en",
        "color": "#dddddd",
        "dashboard": ["ZWayVDev_zway_2-0-67"],
        "interval": 2000,
        "rooms": [0],
        "hide_all_device_events": false,
        "hide_system_events": false,
        "hide_single_device_events": []
    }, "code": 200, "message": "200 OK", "error": null
};
exports.notifications = {
    "data": {
        "updateTime": 1440014086,
        "notifications": [{
            "id": 1439782282,
            "timestamp": "2015-08-17T03:31:22.272Z",
            "level": "device-info",
            "message": {"dev": "Thermostat 2-0 Danfoss Couloir", "l": "18 °C"},
            "type": "device-status",
            "source": "ZWayVDev_zway_2-0-67",
            "redeemed": false,
            "h": 1078450008
        }]
    }, "code": 200, "message": "200 OK", "error": null
};


exports.movies = [
    {
        id: 1,
        title: "Avatar",
        category: 'Sciences Fictions',
        releaseYear: "2010",
        poster: "img/avatar.jpg",
        directors: "James Cameron",
        actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, Michelle Rodriguez",
        synopsis: "Sur la lointaine planète de Pandora, Jake Sully, un héros malgré lui, " +
        "se lance dans une quête de rédemption, de découverte, d'amour inattendu, dont l'issue sera un " +
        "combat héroïque pour sauver toute une civilisation.",
        rate: 3,
        lastViewDate: new Date(2013, 3, 1, 12, 4, 50),
        price: 25.46
    },
    {
        id: 2,
        title: "Seigneur des Anneaux : La Communauté de l'Anneau",
        category: 'Sciences Fictions',
        releaseYear: "2001",
        poster: "img/seigneurdesanneaux1.jpg",
        directors: "Peter Jackson",
        actors: "Elijah Wood, Sean Astin, Ian McKellen, Sala Baker, Viggo Mortensen",
        synopsis: "Frodon le Hobbit hérite de l'Anneau Unique, un instrument de pouvoir absolu" +
        "qui permettrait à Sauron, le Seigneur des ténèbres, de régner sur la Terre du Milieu." +
        " Commence alors un vaste périple visant à la destruction de l'objet.",
        rate: 5,
        lastViewDate: new Date(2012, 5, 13, 9, 30, 45),
        price: 34.76
    },
    {
        id: 3,
        title: "The Grudge",
        category: 'Horreur',
        releaseYear: "2004",
        poster: "img/thegrudge.jpg",
        directors: "Takashi Shimizu",
        actors: "Sarah Michelle Gellar, Jason Behr, Clea DuVall, Kadee Strickland, Bill Pullman",
        synopsis: "Dans ce qui paraît être une paisible maison de Tokyo se cache un épouvantable fléau. " +
        "Quiconque franchit le seuil de la demeure est aussitôt frappé par une malédiction qui ne tardera " +
        "pas à le tuer dans un sentiment d'indicible rage...",
        rate: 4,
        lastViewDate: new Date(2006, 11, 28, 6, 3, 5),
        price: 15.23
    },
    {
        id: 4,
        title: "Yip Man 2",
        category: 'Art Martial',
        releaseYear: "2010",
        poster: "img/yipman.jpg",
        directors: "Wilson Yip",
        actors: "Donnie Yen, Sammo Hung Kam-Bo, Simon Yam, Lynn Hung, Xiaoming Huang",
        synopsis: "Film biographique sur la vie de Ip Man, pionnier du Wing Chun et maitre de Bruce Lee.",
        rate: 5,
        lastViewDate: new Date(2011, 2, 24, 1, 2, 4),
        price: 23.56
    },
    {
        id: 5,
        title: "[REC]",
        category: 'Horreur',
        releaseYear: "2008",
        poster: "img/rec.jpg",
        directors: "Paco Plaza, Jaume Balagueró",
        actors: "Manuela Velasco, Ferran Terraza, Jorge Yamam, Carlos Lasarte, Pablo Rosso",
        synopsis: "Alors qu'ils suivent des pompiers lors d'une intervention, une reporter et son caméraman " +
        "restent coincés dans un immeuble placé sous quarantaine. A l'intérieur, ils font face à d'étranges " +
        "créatures...",
        rate: 3,
        lastViewDate: new Date(2009, 7, 30, 20, 30, 32),
        price: 12.05
    },
    {
        id: 6,
        title: "Resident Evil",
        category: 'Horreur',
        releaseYear: "2002",
        poster: "img/residentevil.jpg",
        directors: "Paul W.S. Anderson",
        actors: "Milla Jovovich, Eric Mabius, Michelle Rodriguez, James Purefoy, Liz May Brice",
        synopsis: "Un virus mortel s'est propagé dans un laboratoire souterrain et a mis fin à toute vie humaine. " +
        "Alice et Matt doivent suivre un groupe d'intervention militaire, chargé de neutraliser le super-ordinateur " +
        "que l'on tient pour responsable du désastre.",
        rate: 4,
        lastViewDate: new Date(2005, 6, 3, 8, 12, 34),
        price: 45.23
    },
    {
        id: 7,
        title: "Seigneur des Anneaux : les deux Tours",
        category: 'Sciences Fictions',
        releaseYear: "2002",
        poster: "img/seigneurdesanneaux2.jpg",
        directors: "Peter Jackson",
        actors: "Elijah Wood, Sean Astin, Ian McKellen, Sala Baker, Viggo Mortensen",
        synopsis: "Frodon Sacquet, le Hobbit, doit braver de terribles dangers pour tenter de détruire " +
        "l'Anneau Unique, convoité par Sauron, le Seigneur des ténèbres. De leur côté, Gimli, Legolas et Aragorn " +
        "doivent sauver Pippin et Merry, capturés par les Orques...",
        rate: 3,
        lastViewDate: new Date(2005, 11, 12, 15, 34, 34),
        price: 14.23
    },
    {
        id: 8,
        title: "Seigneur des Anneaux : le retour du Roi",
        category: 'Sciences Fictions',
        releaseYear: "2003",
        poster: "img/seigneurdesanneaux3.jpg",
        directors: "Peter Jackson",
        actors: "Elijah Wood, Sean Astin, Ian McKellen, Sala Baker, Viggo Mortensen",
        synopsis: "Tandis que les ténèbres se répandent sur la Terre du Milieu, Aragorn se révèle être l'héritier " +
        "caché des rois antiques. Quant à Frodon, toujours tenté par l'Anneau, il voyage à travers les contrées " +
        "ennemies, se reposant sur Sam et Gollum...",
        rate: 4,
        lastViewDate: new Date(2004, 6, 17, 15, 23, 34),
        price: 24.56
    },
    {
        id: 9,
        title: "Crazy Kung Fu",
        category: 'Art Martial',
        releaseYear: "2005",
        poster: "img/crazykungfu.jpg",
        directors: "Stephen Chow",
        actors: "Stephen Chow, Wah Yuen, Leung Siu Lung, Dong Zhi Hua, Chiu Chi Ling",
        synopsis: "Sing, un prétendu gangster, doit surmonter son incapacité à manier le sabre et démontrer " +
        "qu'il a toutes les qualités requises pour appartenir au prestigieux gang de Axe. Au même moment, " +
        "ce gang veut régner en maître sur une rue sacrée...",
        rate: 5,
        lastViewDate: new Date(2009, 10, 20, 13, 34, 23),
        price: 10.50
    }
];
