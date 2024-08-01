# Wcookie
Server cookie handling for Node.js.

### Install
```
npm i wscookie
```

### Usage
Check out `server.js` in the source code for a running server example.
```js
// Server setup
var http = require('http')
var cookie = require('wcookie')

http.createServer(function (req, res) {
  // Enable cookies
  cookie(req)

  // Get cookie
  var name = req.cookie('name')

  // Set cookie
  req.cookie('name', 'hello')

  // Delete cookie
  req.cookie('name', null)

  // Set response cookie headers
  if (req.cookieJar.length) {
    res.setHeader('set-cookie', req.cookieJar.headers)
  }

}).listen(8124)
```
ISC licensed. Enjoy!

Created by [Eldøy Projects](https://eldoy.com)
