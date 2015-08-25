var mqtts = require('tcp-proxy'),
    https = require('http-proxy');

// proxy http connections
var http = https.createServer({
  target: 'https://io.adafruit.com',
  agent  : require('https').globalAgent,
  headers: {
    host: 'io.adafruit.com'
  }
});

http.listen(80);

// proxy mqtt connections
var mqtt = mqtts.createServer({
  target: {
    host: 'io.adafruit.com',
    port: 8883
  }
});

mqtt.listen(1883);
