var express = require('express');
var router = express.Router();

var Record = require('../models/weightRecord');

router.get('/', function(req, res, next) {
  Record.readAll(function(docs, json) {
    res.render('record', {
      title: 'Weight Record',
      items: docs,
      json: JSON.stringify(json)
    });
  });
});

router.get('/index', function(req, res, next) {
  Record.readAll(function(docs, json) {
    for (i = 0; i < docs.length; i++) {
      docs[i].id = docs[i]._id;
      delete docs[i]._id;
    }
    res.send({ data : docs });
  });
});

router.post('/create', function(req, res, next) {
  var w = req.param('weight');
  var f = req.param('fat');
  var d = req.param('date');

  console.log(req.body);

  if (req.body) {
    w = req.body.weight;
    f = req.body.fat;
    d = req.body.date;
  }

  // TODO: 重複排除する

  Record.create(w, f, d, function(result) {
    res.send({ result: result });
  });
});

module.exports = router;
