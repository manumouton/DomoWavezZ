/**
 * GET /ZAutomation/api/v1/instances HTTP/1.1
 *
 * {
    "type": "object",
    "required": true,
    "properties": {
        "error": {
            "type": ["string", "null"],
            "required": true
        },
        "data"
            "type": "array",
            "required": true
        },
        "code": {
            "type": ["integer", "null"],
            "required": true
        },
        "message": {
            "type": ["string", "null"],
            "required": true
        },
    }
 }
 */
exports.instances = {
    data: [{
        id: 1,
        moduleId: "ZWave",
        params: {
            name: "zway",
            port: "/dev/ttyAMA0",
            enableAPI: true,
            publicAPI: false,
            createVDev: true,
            config: "config",
            translations: "translations",
            ZDDX: "ZDDX"
        },
        active: true,
        state: "hidden",
        title: "Z-Wave Network Access",
        description: "Allows accessing Z-Wave devices from attached Z-Wave transceiver.\n(Added by default)",
        module: "Z-Wave Network Access"
    }, {
        id: 2,
        moduleId: "Cron",
        params: {},
        active: true,
        title: "System Clock (CRON)",
        state: "hidden",
        description: "Scheduler used by other modules\n(Added by default)",
        module: "System Clock (CRON)"
    }, {
        id: 3,
        moduleId: "InbandNotifications",
        params: {},
        active: true,
        state: null,
        title: "Inband Notifier",
        description: "Creates and records the presentation of events in the event list (Eventlog).\n(Added by default)",
        module: "Inband Notifier"
    }, {
        id: 4,
        moduleId: "RemoteAccess",
        active: true,
        title: "Remote Access",
        description: "Is necessary to configure remote access in SmartHome UI.\n(Added by default)",
        params: {
            path: "",
            userId: "",
            actStatus: true,
            sshStatus: false,
            zbwStatus: true,
            pass: "",
            lastChange: {}
        },
        state: "hidden",
        module: "Remote Access"
    }, {
        moduleId: "InfoWidget",
        active: "true",
        title: "Information for Expert Users",
        description: "This is an Information for Expert Users.",
        params: {
            widgets: [{
                headline: "Dear Expert User",
                text: "If you still want to use ExpertUI please use this link <strong> >> <a href=\"/expert\">Go to Expert UI!</a> << </strong> <br>\nor call after you are successfully logged in <strong> 'http://MYRASP:8083/expert'</strong> in your browser. <br> <br>\nYou could hide or remove this widget in menu \"Apps > Active Tab\". \n",
                imgURI: "/expert/app/images/zplus.jpg"
            }]
        },
        id: 5,
        state: null,
        module: "Informations Widget"
    }],
    code: 200,
    message: "200 OK",
    error: null
};


exports.instance1 = {
    data: {
        id: 1,
        moduleId: "ZWave",
        params: {
            name: "zway",
            port: "/dev/ttyAMA0",
            enableAPI: true,
            publicAPI: false,
            createVDev: true,
            config: "config",
            translations: "translations",
            ZDDX: "ZDDX"
        },
        active: true,
        state: "hidden",
        title: "Z-Wave Network Access",
        description: "Allows accessing Z-Wave devices from attached Z-Wave transceiver.\n(Added by default)",
        module: "Z-Wave Network Access"
    },
    code: 200,
    message: "200 OK",
    error: null
};