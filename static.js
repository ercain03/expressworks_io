'use strict';

const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(process.argv[3]));
app.listen(process.argv[2]);
