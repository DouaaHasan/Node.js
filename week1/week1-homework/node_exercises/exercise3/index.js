'use strict';

const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  switch (req.url) {
    // html
    case '/':
      // res.setHeader('Content-Type': 'text/html')
      // res.statusCode = 200
      // better to use writeHead() because it can take multiple headers
      res.writeHead(200, {
        'Content-Type': 'text/html',
      });
      res.write(
        `<html>
          <head>
            <title>My First Web Server</title>
            <link rel="stylesheet" type="text/css" href="style.css" />
          </head>
          <body>
            <h1>Hello, anyone there?</h1>
            <div id="content"></div>
            <script src="script.js"></script>
          </body>
        </html>`,
      );
      break;
    // js
    case '/script.js':
      res.writeHead(200, {
        'Content-Type': 'text/javascript',
      });
      res.write(`
        document
          .getElementById('content')
          .appendChild(document.createTextNode('Welcome to Server-land!'));
      `);
      break;
    // css
    case '/style.css':
      res.writeHead(200, {
        'Content-Type': 'text/stylesheet',
      });
      res.write(`
        #content { color: blue }
      `);
      break;
    // error
    default:
      res.writeHead(404, {
        'Content-Type': 'text/plain',
      });
      res.write('Page Not Found!');
  }
  res.end();
});

server.listen(PORT, () => {
  console.log(`This server is listening on the port: ${PORT}`);
});
