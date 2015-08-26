var net = require('net'),
    tls = require('tls');

exports = module.exports = function(options) {

  var client = tls.connect(options);

  var server = net.createServer(function(socket) {
    client.pipe(socket).pipe(client);
  });

  client.on('error', server.emit.bind(server, 'error'));

  return server;

};

