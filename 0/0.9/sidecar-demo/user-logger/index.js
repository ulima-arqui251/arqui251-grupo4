import http from 'http';
import httpProxy from 'http-proxy';
import fs from 'fs';

let count = 0;

const proxy = httpProxy.createProxyServer({});
const server = http.createServer((req, res) => {
  count++;
  fs.writeFileSync('/logs/users.log', `User Requests: ${count}\n`);
  proxy.web(req, res, { target: 'http://users-service:5001/users' }); // ✅ nombre corregido
});

server.listen(6001, () => {
  console.log("User Logger Sidecar on port 6001");
});