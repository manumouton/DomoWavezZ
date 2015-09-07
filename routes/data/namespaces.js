/**
 * GET /ZAutomation/api/v1/namespaces HTTP/1.1
 *
 * Read namespaces.
 */

/**
 * Response 200 (OK)
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
            "type": ["array"],
            "required": true
        },
        "code": {
            "type": "integer",
            "required": true
        },
        "message": {
            "type": ["string", "null"],
            "required": true
        },
    }
 }
 */

exports.namespaces = {
    data: [{
        id: "devices_text",
        params: [{
            deviceId: "InfoWidget_5_0",
            deviceName: "Dear Expert User"
        }]
    }, {
        id: "devices_thermostat",
        params: [{
            deviceId: "ZWayVDev_zway_2-0-67",
            deviceName: "Thermostat 2-0 Danfoss Couloir"
        }]
    }, {
        id: "devices_battery",
        params: [{
            deviceId: "ZWayVDev_zway_2-0-128",
            deviceName: "Battery 2-0 Danfoss Couloir"
        }]
    }, {
        id: "devices_all",
        params: [{
            deviceId: "InfoWidget_5_0",
            deviceName: "Dear Expert User"
        }, {
            deviceId: "ZWayVDev_zway_2-0-67",
            deviceName: "Thermostat 2-0 Danfoss Couloir"
        }, {
            deviceId: "ZWayVDev_zway_2-0-128",
            deviceName: "Battery 2-0 Danfoss Couloir"
        }]
    }],
    code: 200,
    message: "200 OK",
    error: null
};