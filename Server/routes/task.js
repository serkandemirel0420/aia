var express = require('express');
var router = express.Router();
let pool = require("../db/db").pool;

let validate = require('express-validation');
let validation = require('../validation/validation');

let wrapper = require("../helpers").wrapper;


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});



router.get('/testGet', wrapper(async function (req, res, next) {

  let result = await pool.query("SELECT * FRdOM aia.task;");
  return res.status(200).send({
    result
  });

}))




module.exports = router;