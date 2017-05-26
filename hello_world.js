'use strict';

const express = require('express');
const app = express();

app.get('/home', (req, res) => {
  res.end('Hello World!');
}).listen(process.argv[2]);
