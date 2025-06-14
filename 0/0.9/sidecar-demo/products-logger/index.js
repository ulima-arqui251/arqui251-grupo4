import express from 'express'
import cors from 'cors'
import httpProxy from 'http-proxy'
import fs from 'fs';

const app = express();
const proxy = httpProxy.createProxyServer();

let count = 0;

app.use((req, res) => {
  count++;
  fs.writeFileSync('/logs/products.log', `Product Requests: ${count}\n`);
  proxy.web(req, res, { target: 'http://products-service:5002/products' });
});

app.listen(6002, () => {
  console.log("Product Logger Sidecar on port 6002");
});
