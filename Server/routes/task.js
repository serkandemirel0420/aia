var express = require('express');
var router = express.Router();
let pool = require("../db/db").pool;

let validate = require('express-validation');
let validation = require('../validation/validation');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/testGet', async function testinsert(req, res, next) {

  try {


    let result = await pool.query("SELECT * FROM aia.task;");

    if (result) {
      return res.status(200).send({
        result
      });
    }

  } catch (error) {

    return next(error);

  }


})

module.exports = router;