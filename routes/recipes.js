'use strict'

const express     = require('express');
const recipes     = express.Router();
const bodyParser  = require('body-parser');
const db          = require('../db/pg/recipes');
const secret      = process.env.SECRET;
const expressJWT  = require('express-jwt');
const jwt         = require('jsonwebtoken');



recipes.route('/')
.get((req, res) => {
  // get all recipes
})
.post( db.insertRecipe, (req, res) => {
  // insert a new recipe
  res.send('insert recipe');
})

recipes.get('/saved', db.getUserRecipes, (req, res) => {
  // get user recipes & exercises
  res.json(res.data);
})



module.exports = recipes;