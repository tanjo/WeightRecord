var express = require('express');
var router = express.Router();

var Record = require('../models/weightRecord');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', items: null });
});

router.get('/record', function(req, res, next) {
  Record.findJson(function(docs) {
    res.render('index', {
      title: 'Weight Record',
      items: docs,
      json: JSON.stringify(docs)
    });
  });
});

module.exports = router;
