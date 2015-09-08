/**
 * GET /ZAutomation/api/v1/profiles HTTP/1.1
 *
 * [{
    "data":[
        "{"id":1,"name":"Default","description":"This is default profile. Default profile created automatically.","widgets":[],"active":true}",
    ],
    "error": null,
    "message": null,
    "code": "200 OK"
}]
 */
exports.profiles = {
    data: [{
        id: 1,
        name: "Administrator",
        lang: "en",
        color: "#dddddd",
        dashboard: ["ZWayVDev_zway_2-0-67"],
        interval: 2000,
        rooms: [0],
        hide_all_device_events: false,
        hide_system_events: false,
        hide_single_device_events: []
    }, {
        id: 2,
        name: "Local User",
        lang: "en",
        color: "#dddddd",
        dashboard: [],
        interval: 2000,
        rooms: [0],
        hide_all_device_events: false,
        hide_system_events: false,
        hide_single_device_events: []
    }],
    code: 200,
    message: "200 OK",
    error: null
};

exports.profiles1 = {
    data: {
        id: 1,
        role: 1,
        login: "admin",
        password: "admin",
        name: "Administrator",
        lang: "en",
        color: "#dddddd",
        dashboard: ["ZWayVDev_zway_2-0-67"],
        interval: 2000,
        rooms: [0],
        hide_all_device_events: false,
        hide_system_events: false,
        hide_single_device_events: []
    },
    code: 200,
    message: "200 OK",
    error: null
};