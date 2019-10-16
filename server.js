const http = require('http')
const PORT = 8124

const store = require('./lib/node.js')

const server = http.createServer(function (req, res) {
  req.store = store(req)
  console.log(req.headers.cookie)
  const $ = { cookie: req.store.cookie }
  let name = $.cookie('name')
  console.log({ name })
  req.store.cookie('name', 'server')
  let name2 = $.cookie('name')
  console.log({ name2 })
  $.cookie('man', 'no')
  $.cookie('new', 'this')
  res.setHeader('set-cookie', req.store.cookies)
  res.setHeader('content-type', 'text/html')
  res.end('Done.')
})
server.listen(PORT)

console.log(`Server running at port ${PORT}`)
