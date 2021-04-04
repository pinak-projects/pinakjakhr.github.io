const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'application/javascript' })
  fs.createReadStream('mitm.html').pipe(res)
})

server.listen(process.env.PORT || 3000)