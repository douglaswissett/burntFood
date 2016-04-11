'use strict'

const express     = require('express');
const exercises   = express.Router();
const bodyParser  = require('body-parser');
const db          = require('../db/pg/exercises');
const secret      = process.env.SECRET;
const expressJWT  = require('express-jwt');
const jwt         = require('jsonwebtoken');





exercises.route('/')
.get((req, res) => {
  // get all exercises
})
.post( db.insertExercise, (req, res) => {
  // insert exercise
  res.json(res.data);
})

exercises.route('/tracked')
  .get( db.getTrackedExercises, (req, res) => {
    // get all tracked exercises
    res.json(res.data);
  })


exercises.get('/random', db.getExerciseType, (req ,res) => {
  console.log(res.data);
  res.json(res.data);
})

exercises.route('/track/:ex_id')
  .get(db.getExerciseById, (req, res) => {
    // get exercise info by id
    res.json(res.data);
  })
  .put( db.trackExercise, (req, res) => {
    // update tracking boolean
    res.send('adding tracker');
  })


exercises.delete('/delete/:ex_id', db.deleteExercise, (req, res) => {
  // delete exercise
  res.send('deleted exercise ', req.params.ex_id);
});




module.exports = exercises;