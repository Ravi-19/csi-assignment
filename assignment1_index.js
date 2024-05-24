///here is a quick demo for simple hello world app 
// 
const http = require('http');

http.createServer( (req, res)=> {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(4000);