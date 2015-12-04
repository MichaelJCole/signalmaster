/*global console*/
var config = require('./config');
var sockets = require('./sockets');
var port = parseInt(process.env.PORT || config.server.port, 10);

// HTTP server 404/redirects all requests
var httpRequests = function (req, res) {
  if (config.redirectLocation) {
    res.writeHead(307, { 'Location': config.redirectLocation });
  } else {
    res.writeHead(404);
  }
  res.end();
},
server = require('http').Server(httpRequests);
server.listen(port);
console.log('signalmaster: http server started');

// Our Socketio server
sockets(server, config);
console.log('signalmaster: socket io server started');

// Downgrade our user
if (config.uid || config.gid) {
  try {
    process.setgid(config.gid);
    process.setuid(config.uid);
    console.log('signalmaster: user priveledge downgrade ok');
  } catch (e) {
    console.log('ERROR signalmaster: user priveledge downgrade FAILED');
  }
}
