var express = require('express');
var router = express.Router();
let pool = require("../db/db").pool;

let validate = require('express-validation');
let validation = require('../validation/validation');


let wrap = function fn(fn) {
  return function (...args) {

    fn(...args)
      .catch(args[2])
  }
}



/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});




router.get('/testGet', wrap(async function (req, res, next) {

  let result = await pool.query("SELECT * FROM aia.task;");
  return res.status(200).send({
    result
  });

}))





router.use(function (err, req, res, next) {
  return next(err.message) // oh no!
})

module.exports = router;