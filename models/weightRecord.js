var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var MONGODB_URL = 'mongodb://localhost/weightRecord';


var findDocuments = function(db, callback) {
  var collection = db.collection('weightRecord');

  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    callback(docs);
  });
}

var find = function(callback) {
  MongoClient.connect(MONGODB_URL, function(err, db) {
    assert.equal(null, err);
    findDocuments(db, function(docs) {
      callback(docs);
      db.close();
    });
  });
}

var findJson = function(callback) {
  find(function(docs) {
    var weights = { key: "体重", values: []};
    var fats = { key: "体脂肪率", values: []};

    for (i = 0; i < docs.length; i++) {
      var unixTimestamp = Math.floor( new Date(docs[i].date).getTime() / 1000 );
      var weightItem = [ unixTimestamp, docs[i].weight ];
      var fatItem = [ unixTimestamp, docs[i].fat ];
      weights.values.push(weightItem);
      fats.values.push(fatItem);
    }

    callback([weights, fats]);
  });
}

module.exports.find = find;
module.exports.findJson = findJson;
