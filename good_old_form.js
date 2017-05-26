'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser());
app.set('views', 'templates');
app.set('view engine', 'pug');
app.engine('.pug', require('pug').__express);

app.get('/form', (req, res) => {
  res.render('form');
});

app.post('/form', (req, res) => {
  res.send(req.body.str.split('').reverse().join(''))
}).listen(process.argv[2]);
