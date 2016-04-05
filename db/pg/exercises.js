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

module.exports.getExerciseType = getExerciseType;