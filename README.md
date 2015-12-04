# simplewebrtc-signalserver

This is a refactored version of: https://github.com/andyet/signalmaster

A signalling server designed to work with: https://github.com/andyet/SimpleWebRTC

This version is designed to:

 * configured through environment variables
 * work behind nginx (removed https)
 * redirect http requests instead of 404 (if configured)
 * not set STUN/TURN (my app server logic configured that)
 * simplified for my needs (maybe not yours)

Thanks very much to [Henrik Joreteg](https://github.com/HenrikJoreteg) and the [&yet team](https://github.com/andyet) for the original.
