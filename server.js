const http = require('http')
const PORT = 8124

const cookies = require('./lib/node.js')

const server = http.createServer(function (req, res) {
  // This is received from the browser
  console.log(req.headers.cookie)

  // Set a cookie
  req.cookie('hello', 'cookie')

  // Send cookie headers back to browser if any
  const cookieHeaders = req.cookieJar.headers
  if (cookieHeaders.length) {
    res.setHeader('set-cookie', cookieHeaders)
  }

  res.setHeader('content-type', 'text/html')
  res.end('Done.')
})
server.listen(PORT)

console.log(`Server running at port ${PORT}`)
