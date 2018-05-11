var express = require('express');
var router = express.Router();

var knex = require("../db/db").knex;
var pool = require("../db/db").pool;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).json({
    'version': 1.1,
    "aia": "hey ho!"
  });
});

module.exports = router;