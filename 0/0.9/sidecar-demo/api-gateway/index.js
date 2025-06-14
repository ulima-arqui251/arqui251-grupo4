import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors'

const app = express();

app.use(cors());

app.use('/api/users', createProxyMiddleware({
  target: 'http://users-logger:6001',
  changeOrigin: true,
  pathRewrite: { '^/api/users': '' }
}));

app.use('/api/products', createProxyMiddleware({
  target: 'http://products-logger:6002',
  changeOrigin: true,
  pathRewrite: { '^/api/products': '' }
}));

app.listen(5000, () => {
  console.log("API Gateway on port 5000");
});
