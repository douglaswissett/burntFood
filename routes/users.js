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
  console.log('yummly api route');
  
  var allowed = req.body.qs.split('+');
  allowed = allowed.join('&allowedIngredient[]=');
  console.log(allowed);


  request(`http:/\/api.yummly.com/v1/api/recipes?_app_id=${process.env.YUMMLY_APP_ID}&_app_key=${process.env.YUMMLY_APIKEY}&q=${req.body.qs}&allowedIngredient[]=${allowed}`, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
})



module.exports = users;