'use strict';
const pgp = require('pg-promise')({});

if(process.env.ENVIRONMENT === 'production') {
  var cn = process.env.DATABASE_URL;
} else {
  var cn = {
      host: 'localhost', // server name or IP address;
      port: 5432,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
  };
}


const db = pgp(cn)



function insertRecipe(req, res, next) {
  req.body.user_id = req.user.user_id;

  db.none(`INSERT INTO recipes (recipe, img_url, calories, user_id, exercise_id, yummly_id) 
    VALUES ($/recipe/, $/img_url/, $/calories/, $/user_id/, $/exercise_id/, $/yummly_id/);`,
      req.body )
  .then((data) => {
    next();
  })
  .catch((err) => {
    console.error('error inserting recipe ', err);
    next();
  })
}

function getUserRecipes(req, res, next) {

  db.any(`SELECT r.*, e.exercise, e.duration, e.status from recipes as r 
    LEFT JOIN exercises as e ON r.exercise_id = e.exercise_id WHERE r.user_id = $1;`,
    [req.user.user_id])
  .then((data) => {
    res.data = data;
    next();
  })
  .catch((err) => {
    console.error('error getting user recipes&exercises ', err);
    next();
  })
}

module.exports.insertRecipe = insertRecipe;
module.exports.getUserRecipes = getUserRecipes;