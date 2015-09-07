/**
 * GET /ZAutomation/api/v1/status HTTP/1.1
 * Accept: application/json
 *
 * Resource for checking the Platform availability.
 */

/**
 * Response 200 (OK)
 *
 * {
    "type": "object",
    "required": false,
    "properties": {
        "error": {
            "type": ["string", "null"],
            "required": true
        },
        "data"
            "type": ["string", "null"],
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
exports.statusOk = {
    data: "OK",
    code: 200,
    message: "200 OK",
    error: null
};

/**
 * Response 503 (Service Unavailable)
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
            "type": ["string", "null"],
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
exports.statusServiceUnAvailable = {
    data: null,
    code: 503,
    message: "Service Unavailable",
    error: "Internal server error. Please fill in bug report with request_id='" + this.error + "'"
};