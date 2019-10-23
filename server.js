const http = require('http')
const PORT = 8124

const cookie = require('./index.js')

const server = http.createServer(function (req, res) {
  // This is received from the browser
  console.log(req.headers.cookie)

  // Enable cookies
  cookie(req)

  // Set a cookie
  req.cookie('hello', 'cookie')

  // Send cookie headers back to browser if any
  if (req.cookieJar.length) {
    res.setHeader('set-cookie', req.cookieJar.headers)
  }

  res.setHeader('content-type', 'text/html')
  res.end('Done.')
})
server.listen(PORT)

console.log(`Server running at port ${PORT}`)
