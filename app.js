const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(express.static('dist'))
app.use('/yadbarzel/feed.xml', createProxyMiddleware({ 
  target: 'https://media.rss.com', 
  changeOrigin: true 
}));

app.listen(8080, () => {
  console.log("Server is running and serving the site from 'dist' directory on port 8080");
  console.log("Access the site at: http://localhost:8080");
});