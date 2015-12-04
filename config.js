module.exports = {
  // HTTP server responds with 404's.  Configure to respond with 307 redirect
  redirectLocation: process.env.WEBRTC_REDIRECT,
  // Passed to socketIO server
  logLevel: process.env.WEBRTC_LOGLEVEL || 3,
  // Secure server by downgrading to username groupname (set both or none)
  uid: process.env.WEBRTC_NEWUID || 'nobody',
  gid: process.env.WEBRTC_NEWGID || 'nobody',
  // Configure signalmaster server
  rooms: {
    maxClients: process.env.WEBRTC_MAXROOMS || 0  // 0 means no maximum
  }
};
