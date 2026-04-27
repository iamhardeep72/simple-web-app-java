const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <html>
      <head>
        <title>Welcome</title>
      </head>
      <body style="font-family: Arial; text-align: center; margin-top: 50px;">
        <h1>🚀 Welcome to My Node.js App</h1>
        <p>Your deployment is working successfully!</p>
      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
