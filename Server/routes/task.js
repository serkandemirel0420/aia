var express = require('express');
var router = express.Router();
let pool = require("../db/db").pool;

let validate = require('express-validation');
let validation = require('../validation/validation');


//let wrap = fn => (...args) => fn(...args).catch(args[2])
let wrap = function (fn) {
  return function (...args) {
    fn(...args)
      .catch(
        // next() function call iwth default params,
        // also can be  args[2]("Custom error message")
        args[2]
      )
  }
}




/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});




router.get('/testGet', wrap(async function (req, res, next) {

  let result = await pool.query("SELECT * FRdOM aia.task;");
  return res.status(200).send({
    result
  });

}))





router.use(function (err, req, res, next) {
  debugger
  return next(err.message) // oh no!
})

module.exports = router;