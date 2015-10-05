cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "id": "cordova-plugin-vibration.notification",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device-orientation/www/CompassError.js",
        "id": "cordova-plugin-device-orientation.CompassError",
        "clobbers": [
            "CompassError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device-orientation/www/CompassHeading.js",
        "id": "cordova-plugin-device-orientation.CompassHeading",
        "clobbers": [
            "CompassHeading"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device-orientation/www/compass.js",
        "id": "cordova-plugin-device-orientation.compass",
        "clobbers": [
            "navigator.compass"
        ]
    },
    {
        "file": "plugins/cordova-plugin-magnetometer/www/magnetometer.js",
        "id": "cordova-plugin-magnetometer.main",
        "clobbers": [
            "cordova.plugins.magnetometer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-vibration": "2.0.0-dev",
    "cordova-plugin-device-orientation": "1.0.2-dev",
    "cordova-plugin-magnetometer": "1.0.0"
}
// BOTTOM OF METADATA
});