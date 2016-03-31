'use strict'
const express      = require('express');
const logger       = require('morgan');
const path         = require('path');
const bodyParser   = require('body-parser');

const _port        = process.argv[2]|| process.env.port||3000;
const app          = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Entry Point Route
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'views/index.html')));


app.listen(_port, () => console.log('Server up and running Captain Walker @', Date()));