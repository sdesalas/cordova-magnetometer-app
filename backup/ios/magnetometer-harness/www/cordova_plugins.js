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
    "cordova-plugin-vibration": "1.0.0",
    "cordova-plugin-magnetometer": "1.0.0"
}
// BOTTOM OF METADATA
});