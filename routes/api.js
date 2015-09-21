"use strict";

var _ = require('lodash'),
    DEVICES = require('./data/devices').devices,
    LOCATIONS = require('./data/locations').locations,
    NAMESPACES = require('./data/namespaces').namespaces,
    INSTANCES = require('./data/instances').instances,
    MODULES = require('./data/modules').modules,
    NOTIFICATIONS = require('./data/notifications').notifications,
    PROFILES = require('./data/profiles').profiles,
    STATUSUNAVAILABLE = require('./data/status').statusServiceUnAvailable
    ;

/**
 * Get platform status
 */
exports.platformAvailability = function (req, res) {
    var status = STATUSUNAVAILABLE;
    return res.jsonp(status);
};

/**
 * Fetch all the devices
 */
exports.fetchDevices = function (req, res) {
    var devices = DEVICES;
    return res.json(devices);
};

/**
 * Fetch all the locations
 */
exports.fetchLocations = function (req, res) {
    var locations = LOCATIONS;
    return res.json(locations);
};

/**
 * Fetch all the namespaces
 */
exports.fetchNamespaces = function (req, res) {
    var namespaces = NAMESPACES;
    return res.json(namespaces);
};

/**
 * Fetch all the instances
 */
exports.fetchInstances = function (req, res) {
    var instances = INSTANCES;
    return res.json(instances);
};

/**
 * Fetch all the modules
 */
exports.fetchModules = function (req, res) {
    var modules = MODULES;
    return res.json(modules);
};

/**
 * Fetch all the namespaces
 */
exports.fetchNotifications = function (req, res) {
    var notifications = NOTIFICATIONS;
    return res.json(notifications);
};

/**
 * Fetch all the profiles
 */
exports.fetchProfiles = function (req, res) {
    var profiles = PROFILES;
    return res.json(profiles);
};