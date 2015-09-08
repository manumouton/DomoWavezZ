/**
 * GET /ZAutomation/api/v1/notifications?since=%3Fsince%3D1387881635 HTTP/1.1
 *
 * 200 (OK)
 Content-Type: application/json
 {"error":null,
   "data":{
     "updateTime":1387884437,
     "notifications":[
       {"id":"1387199352223","timestamp":"2013-12-16T13:09:12.223Z","level":"error","message":"Cannot remove location 54545 - doesn't exist","redeemed":true},
       {"id":"1387200419730","timestamp":"2013-12-16T13:26:59.730Z","level":"error","message":"Cannot remove location 54545 - doesn't exist","redeemed":true}
     ]
   }
 }
 */
exports.notifications = {
    data: {
        updateTime: 1440014086,
        notifications: [{
            id: 1439782282,
            timestamp: "2015-08-17T03:31:22.272Z",
            level: "device-info",
            message: {
                dev: "Thermostat 2-0 Danfoss Couloir",
                l: "18 °C"
            },
            type: "device-status",
            source: "ZWayVDev_zway_2-0-67",
            redeemed: false,
            h: 1078450008
        }]
    },
    code: 200,
    message: "200 OK",
    error: null
};