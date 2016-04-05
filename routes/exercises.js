'use strict'

const express     = require('express');
const exercises   = express.Router();
const bodyParser  = require('body-parser');
const db          = require('../db/pg/exercises');
const secret      = process.env.SECRET;
const expressJWT  = require('express-jwt');
const jwt         = require('jsonwebtoken');



exercises.get('/random', db.getExerciseType, (req ,res) => {
  console.log(res.data);
  res.json(res.data);
})





module.exports = exercises;