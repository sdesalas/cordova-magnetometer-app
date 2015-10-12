cordova-plugin-magnetometer
====================

A magnetic field detector plugin. 

It displays the raw x, y, and z magnetometer values and a computed magnitude of the magnetic field.

- iOS Support by [Rameez Raja](https://github.com/mrameezraja)
- Android Support by [Steven de Salas](https://github.com/sdesalas)

Installation
------------

<code> cordova plugin add https://github.com/sdesalas/cordova-plugin-magnetometer </code>


Methods
-------
- cordova.plugins.magnetometer.getReading
- cordova.plugins.magnetometer.watchReadings
- cordova.plugins.magnetometer.stop


cordova.plugins.magnetometer.getReading
-------------------------------------------

Gets a single reading from the magenetometer sensor.

<pre>
<code>
  cordova.plugins.magnetometer.getReading(
    function success(reading){
      console.log(JSON.stringify(reading)); 
      // Output: {x: 23.113, y:-37.110, z:6.1120, magnitude: 42.2623}
    }, 
    function error(message){
     console.log(message);
    }
  )
</code>
</pre>

Reading result properties:
- x 
- y
- z
- magnitude (calculated total - always positive)


cordova.plugins.magnetometer.watchReadings
-------------------------------------------

Gets regular magnetometer readings sent by the internal sensor, will fire success callback repeatedly.

<pre>
<code>
  var watchID = cordova.plugins.magnetometer.watchReading(function(reading){
    function success(reading){
      console.log(JSON.stringify(reading)); 
      // Output: {x: 23.113, y:-37.110, z:6.1120, magnitude: 42.2623}
    }, 
    function error(message){
     console.log(message);
    }
  )
</code>
</pre>

Reading result properties:
- x
- y
- z
- magnitude (calculated total - always positive)

cordova.plugins.magnetometer.stop
--------------------------------

Stops getting readings from the magnetometer sensor. Optional watchID parameter.

<pre>
<code>
  cordova.plugins.magnetometer.stop([watchID])
</code>
</pre>

Supported Platforms
-------------------

- iOS
- Android 

