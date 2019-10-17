# Wstore
Server and browser cookie handling for Node.js.

### Install
```bash
npm i wstore
```

### Usage
In the browser include the script found in `lib/browser.js`. On the server you require the `node` version.

Check out `server.js` in the source code for a running server example.
```javascript
// Get cookie in the browser
const name = cookie('name')

// Set cookie in the browser
cookie('name', 'hello')

// Delete cookie in the browser
cookie('name', '', -1)

// On the server
const http = require('http')
const cookie = require('wcookie').node

http.createServer(function (req, res) {
  // Enable cookies
  cookie(req)

  // Get cookie
  const name = req.cookie('name')

  // Set cookie
  req.cookie('name', 'hello')

  // Delete cookie
  req.cookie('name', '', -1)

  // Set response cookie headers
  res.setHeader('set-cookie', req.cookieJar.headers)

}).listen(8124)
```
MIT licensed. Enjoy!