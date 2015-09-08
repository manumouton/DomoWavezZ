"use strict";

var _ = require('lodash'),
    DEVICES = require('./data/devices').devices,
    LOCATIONS = require('./data/locations').locations;

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

/**
 * Fetch all locations
 */
exports.fetchLocations = function (req, res) {
    var locations = LOCATIONS;
    return res.json(locations);
};