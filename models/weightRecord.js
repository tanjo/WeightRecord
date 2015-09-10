var MongoUtils = require('../utils/mongoutils');
var DateUtils = require('../utils/dateutils');

/**
 * Create
 * @param w {Number} 体重
 * @param f {Number} 体脂肪率
 * @param d {String} 日付 [YYYY-MM-DD]
 * @param callback {Function(result)}
 */
var create = function(w, f, d, callback) {
  var dd = null;
  if (d) {
    dd = d;
  } else {
    dd = DateUtils.formatDate(new Date(), 'YYYY-MM-DD');
  }
  MongoUtils.insert({
    weight: w,
    fat: f,
    date: dd
  }, function(result) {
    callback(result);
  });
}

/**
 * Delete
 */
var del = function() {
  console.log('delete');
}

/**
 * Update
 */
var update = function() {
  console.log('update');
}

/**
 * Read All
 * @param {Function(docs, json)} callback
 */
var readAll = function(callback) {
  MongoUtils.findAll(function(docs) {
    var json = [];
    for (i = 0; i < docs.length; i++) {
      var item = [docs[i].date, docs[i].weight, docs[i].fat];
      json.push(item);
    }
    callback(docs, json);
  });
}

module.exports.create = create;
module.exports.readAll = readAll;
