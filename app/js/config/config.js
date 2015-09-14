/**
 * Application configuration
 */
var configurationData = {
    'config': {
        'appName': 'DomoWaveZ',
        'appVersion': '0.0.1'
    }
};

/**
 * Devices configuration and available data
 * @type {{PROBE_TITLE: string, SCALE_TITLE: string, LEVEL: string, ICON: string, TITLE: string}}
 */
var batteryMetrics = {
    PROBE_TITLE: 'probeTitle',
    SCALE_TITLE: 'scaleTitle',
    LEVEL: 'level',
    ICON: 'icon',
    TITLE: 'title'
};

var batteryCommands = {};

var doorlockMetrics = {
    LEVEL: 'level',
    ICON: 'icon',
    TITLE: 'title',
    MODE: 'mode',
    MODES: 'modes'
};

var doorlockCommands = {
    OPEN: 'open',
    CLOSE: 'close'
};

var thermostatMetrics = {
    LEVEL: 'level',
    ICON: 'icon',
    TITLE: 'title',
    MODE: 'mode',
    MODES: 'modes'
};

var thermostatCommands = {
    SET_MODE: 'setMode?mode=',
    SET_TEMP: 'setTemp?temp='
};

var switchBinaryMetrics = {
    LEVEL: 'level',
    ICON: 'icon',
    TITLE: 'title'
};

var switchBinaryCommands = {
    ON: 'on',
    OFF: 'off',
    UPDATE: 'update'
};

var switchMultilevelMetrics = {
    LEVEL: 'level',
    ICON: 'icon',
    TITLE: 'title'
};

var switchMultilevelCommands = {
    ON: 'on',
    OFF: 'off',
    MIN: 'min',
    MAX: 'max',
    UPDATE: 'update',
    EXACT: 'exact?level='
};

var sensorBinaryMetrics = {
    PROBE_TITLE: 'probeTitle',
    LEVEL: 'level',
    ICON: 'icon',
    TITLE: 'title'
};

var sensorBinaryCommands = {
    UPDATE: 'update'
};

var sensorMultilevelMetrics = {
    PROBE_TITLE: 'probeTitle',
    SCALE_TITLE: 'scaleTitle',
    LEVEL: 'level',
    ICON: 'icon',
    TITLE: 'title'
};

var sensorMultilevelCommands = {
    UPDATE: 'update'
};

var switchToggleMetrics = {
    LEVEL: 'level',
    ICON: 'icon',
    TITLE: 'title'
};

var switchToggleCommands = {
    ON: 'on'
};

/**
 * Enum for devices types
 */
var deviceTypesData = {
    BATTERY: {
        id: 'battery',
        metrics: batteryMetrics,
        commands: batteryCommands
    },
    DOORLOCK: {
        id: 'doorlock',
        metrics: doorlockMetrics,
        commands: batteryCommands
    },
    THERMOSTAT: {
        id: 'thermostat',
        metrics: thermostatMetrics,
        commands: thermostatCommands
    },
    SWITCH_BINARY: {
        id: 'switchBinary',
        metrics: switchBinaryMetrics,
        commands: switchBinaryCommands
    },
    SWITCH_MULTILEVEL: {
        id: 'switchMultilevel',
        metrics: switchMultilevelMetrics,
        commands: switchMultilevelCommands
    },
    SENSOR_BINARY: {
        id: 'sensorBinary',
        metrics: sensorBinaryMetrics,
        commands: sensorBinaryCommands
    },
    SENSOR_MULTILEVEL: {
        id: 'sensorMultilevel',
        metrics: sensorMultilevelMetrics,
        commands: sensorMultilevelCommands
    },
    SWITCH_TOGGLE: {
        id: 'switchToggle',
        metrics: switchToggleMetrics,
        commands: switchToggleCommands
    }
};