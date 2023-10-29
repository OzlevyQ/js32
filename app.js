const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/yadbarzel/feed.xml', createProxyMiddleware({ 
  target: 'https://media.rss.com', 
  changeOrigin: true 
}));

app.listen(3000);
