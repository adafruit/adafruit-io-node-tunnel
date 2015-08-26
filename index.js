var tunnel = require('./lib/tunnel');

// proxy http connections
var http = tunnel({
  host: 'io.adafruit.com',
  port: 443
});

http.listen(80);

// proxy mqtt connections
var mqtt = tunnel({
  host: 'io.adafruit.com',
  port: 8883
});

mqtt.listen(1883);
