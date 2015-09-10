var express = require('express');
var router = express.Router();

var Record = require('../models/weightRecord');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', items: null });
});

router.get('/record', function(req, res, next) {
  Record.readAll(function(docs, json) {
    res.render('index', {
      title: 'Weight Record',
      items: docs,
      json: JSON.stringify(json)
    });
  });
});

router.get('/record/index', function(req, res, next) {
  Record.readAll(function(docs, json) {
    for (i = 0; i < docs.length; i++) {
      docs[i].id = docs[i]._id;
      delete docs[i]._id;
    }
    res.send({ data : docs });
  });
});

router.post('/record/create', function(req, res, next) {
  var w = req.param('weight');
  var f = req.param('fat');
  var d = req.param('date');

  console.log(req.body);

  if (req.body) {
    w = req.body.weight;
    f = req.body.fat;
    d = req.body.date;
  }

  Record.create(w, f, d, function(result) {
    res.send({ result: result });
  });
});

module.exports = router;
