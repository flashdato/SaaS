const express = require('express');
const request = require('request');

const app = express();

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  next();
});

app.options('*', (req, res) => {
  res.sendStatus(200);
});

app.use('/', (req, res) => {
  const url = 'https://script.google.com/macros/s/AKfycbxr2VgE1aBRoBgzdruq0AtulIkYRykacK7ISOMi3rWMl6yCZCED-iCXhAjEjvUkNtMrPw/exec' + req.url;
  
  req.pipe(request(url)).pipe(res);
});

app.listen(3000, () => {
  console.log('Proxy server is running on port 3000');
});
