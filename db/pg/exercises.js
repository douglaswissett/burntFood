'use strict';
const pgp = require('pg-promise')({});
const cn = {
    host: process.env.HOST, // server name or IP address;
    port: 5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
}
const db = pgp(cn)


function getExerciseType(req, res, next) {

  db.one(`SELECT * from exercise_categories ORDER BY RANDOM() LIMIT 1;`)
  .then((data) => {
    console.log(data);
    res.data = data;
    next();
  })
  .catch((err) => {
    console.error('error getting exercise type', err);
    next();
  })
}

function insertExercise(req, res, next) {


  db.one(`INSERT INTO exercises (exercise, duration) VALUES ($1, $2) RETURNING exercise_id;`,
    [req.body.exercise, req.body.duration])
  .then((data) => {
    res.data = data;
    next();
  })
  .catch((err) => {
    console.error('error inserting exercise ', err);
    next();
  })
}

function deleteExercise(req, res, next) {

  db.none(`DELETE FROM exercises WHERE exercise_id = $1`,
    [req.params.ex_id])
  .then(next)
  .catch((err) => {
    console.error('error deleting exercise ', err);
    next();
  })
}

function getExerciseById(req, res, next) {

  db.one(`SELECT e.*, r.recipe, r.yummly_id, r.calories, r.created FROM exercises as e 
          LEFT JOIN recipes as r 
          ON r.exercise_id = e.exercise_id 
          WHERE e.exercise_id = $1;`,
          [ req.params.ex_id ])
  .then((data) => {
    console.log(data);
    res.data = data;
    next();
  })
  .catch((err) => {
    console.error('erroring getting exercise by id: ', err);
    next();
  })
}

function trackExercise(req, res, next) {
  console.log('trackExercise pg: ', req.params.ex_id);

  db.none(`UPDATE exercises SET tracking = NOT tracking 
          WHERE exercise_id = $1`,
          [ req.params.ex_id ])
    .then(next)
    .catch((err) => {
      console.error('erroring adding tracker: ', err);
      next();
    })
}

function getTrackedExercises(req, res, next) {

  db.any(`SELECT e.*, r.recipe, r.yummly_id, r.calories, r.created FROM exercises as e 
          LEFT JOIN recipes as r 
          ON r.exercise_id = e.exercise_id 
          WHERE e.tracking = true`)
    .then((data) => {
      console.log(data);
      res.data = data;
      next();
    })
    .catch((err) => {
      console.error('erroring getting tracked exercises: ', err);
      next();
    })
}


module.exports.getExerciseType = getExerciseType;
module.exports.deleteExercise = deleteExercise;
module.exports.insertExercise  = insertExercise;
module.exports.getExerciseById  = getExerciseById;
module.exports.trackExercise  = trackExercise;
module.exports.getTrackedExercises  = getTrackedExercises;