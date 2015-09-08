"use strict";

var _ = require('lodash'),
    DEVICES = require('./data/devices').devices;

/**
 * Get platform status
 */
exports.platformAvailability = function (req, res) {
    return res.status(200);
};

/**
 * Get namespaces
 */
exports.namespaces = function (req, res) {
    return res.status(200);
};

/**
 * Fetch all devices
 */
exports.fetchDevices = function (req, res) {
    var devices = DEVICES;
    return res.json(devices);
};