'use strict'
require('dotenv').config();
const express      = require('express');
const logger       = require('morgan');
const path         = require('path');
const bodyParser   = require('body-parser');
const secret       = process.env.SECRET;
const expressJWT   = require('express-jwt');
const guestRoutes  = require( path.join(__dirname, '/routes/guests'));
const userRoutes   = require( path.join(__dirname, '/routes/users'));
const exerciseRoutes = require( path.join(__dirname, '/routes/exercises'));
const recipeRoutes   = require( path.join(__dirname, '/routes/recipes'));

const _port        = process.argv[2]|| process.env.port||3000;
const app          = express();


app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes
app.use('/api/guests', guestRoutes);
app.use('/api/users',expressJWT({secret:secret}),userRoutes);
app.use('/api/exercises',expressJWT({secret:secret}),exerciseRoutes);
app.use('/api/recipes',expressJWT({secret:secret}),recipeRoutes);

// Entry Point Route
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'views/index.html')));


app.listen(_port, () => console.log('Server up and running Captain Walker @', Date()));