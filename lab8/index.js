const http = require('http') 
const port = process.env.PORT || 3000 
 
const fs = require('fs') 

function serveStaticFile(res, path, contentType,
    responseCode = 200) {
    fs.readFile(__dirname + path, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            return res.end('500 - Internal Error')
        }
        res.writeHead(responseCode, {
            'Content-Type':
                contentType
        })
        res.end(data)
    })
} 

const server = http.createServer((req,res) => {
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    switch(path) {
      case '':
        serveStaticFile(res, '/public/home.html', 'text/html')
        break
      case '/about':
        serveStaticFile(res, '/public/about.html', 'text/html')
        break
      case '/birds':
        serveStaticFile(res, '/public/birds.html', 'text/html')
        break
      case '/dogs':
        serveStaticFile(res, '/public/dogs.html', 'text/html')
        break
      case '/cats':
        serveStaticFile(res, '/public/cats.html', 'text/html')
        break
      case '/img/panda-logo.png':
        serveStaticFile(res, '/public/img/panda-logo.png', 'image/png')
        break
      case '/img/bird1.jpeg':
        serveStaticFile(res, '/public/img/bird1.jpeg', 'image/jpeg')
        break
      case '/img/bird2.jpeg':
        serveStaticFile(res, '/public/img/bird2.jpeg', 'image/jpeg')
        break
      case '/img/cat1.jpeg':
        serveStaticFile(res, '/public/img/cat1.jpeg', 'image/jpeg')
        break
      case '/img/cat2.jpeg':
        serveStaticFile(res, '/public/img/cat2.jpeg', 'image/jpeg')
        break
      case '/img/dog1.jpeg':
        serveStaticFile(res, '/public/img/dog1.jpeg', 'image/jpeg')
        break
      case '/img/dog2.jpeg':
        serveStaticFile(res, '/public/img/dog2.jpeg', 'image/jpeg')
        break
      default:
        serveStaticFile(res, '/public/404.html', 'text/html', 404)
        break
    }
  })

server.listen(port, () => console.log(`server started on 
port ${port}; ` + 'press Ctrl-C to terminate....'))


