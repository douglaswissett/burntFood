'use strict'

const express     = require('express');
const users       = express.Router();
const bodyParser  = require('body-parser');
const db          = require('../db/pg/users');
const secret      = process.env.SECRET;
const expressJWT  = require('express-jwt');
const jwt         = require('jsonwebtoken');
const request     = require('request');

users.use(function(error, request, response, next) {
  if(error.name === 'UnauthorizredError') {
    response.status(401).json({message: 'you need an authoriation token to view condifential information'});
  }
});

users.post('/yummly', (req, res) => {
  let allowed = req.body.qs.split('+');
  allowed = allowed.join('&allowedIngredient[]=');

  request(`http:/\/api.yummly.com/v1/api/recipes?_app_id=${process.env.YUMMLY_APP_ID}&_app_key=${process.env.YUMMLY_APIKEY}&allowedIngredient[]=${allowed}&maxResult=1`, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });

  // res.send('Out of order');
})

users.get('/yummly/:id', (req, res) => {

  request(`http:/\/api.yummly.com/v1/api/recipe/${req.params.id}?_app_id=${process.env.YUMMLY_APP_ID}&_app_key=${process.env.YUMMLY_APIKEY}`, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
  // res.send('Out of order');
})



module.exports = users;