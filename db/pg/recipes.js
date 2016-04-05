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



function insertRecipe(req, res, next) {
  req.body.user_id = req.user.user_id;

  db.none(`INSERT INTO recipes (recipe, img_url, calories, user_id, exercise_id) 
    VALUES ($/recipe/, $/img_url/, $/calories/, $/user_id/, $/exercise_id/);`,
      req.body )
  .then((data) => {
    next();
  })
  .catch((err) => {
    console.error('error inserting recipe ', err);
    next();
  })
}

module.exports.insertRecipe = insertRecipe;