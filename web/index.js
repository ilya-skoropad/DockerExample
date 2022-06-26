const http = require('http');
const { Client } = require('pg')
const port = 3000;

const client = new Client({
  user: 'postgres',
  host: '127.0.0.1:5432',
  database: 'app',
  port: 5432,
});

let msg = '';
client.connect(function(err) {
  if (err) msg = 'error';
  msg = 'connected';
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running`);
});