var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

/** @const */
var MONGODB_URL = 'mongodb://localhost/weightRecord';
/** @const */
var MONGODB_COLLECTION = 'weightRecord';

/**
 * @private
 * @param {Function(db.collection)} callback
 */
var connect = function(callback) {
  MongoClient.connect(MONGODB_URL, function(err, db) {
    assert.equal(null, err);
    var collection = db.collection(MONGODB_COLLECTION);
    callback(db, collection);
  });
}

/**
 * Insert
 * @param {PlainObject} data
 * @param {Function(result)} callback
 */
var insert = function(data, callback) {
  connect(function(db, collection) {
    collection.insert(data, function(err, result) {
      assert.equal(err, null);
      callback(result);
      db.close();
    });
  });
}

/**
 * Update
 * @param {Dictionary} query
 * @param {PlainObject} data
 * @param {Function(result)} callback
 */
var update = function(query, data, callback) {
  connect(function(db, collection) {
    collection.update(query, {$set: data}, function(err, result) {
      assert.equal(err, null);
      callback(result);
      db.close();
    });
  });
}

/**
 * Remove
 * @param {Dictionary} query
 * @param {Function(result)} callback
 */
var remove = function(query, callback) {
  connect(function(db, collection) {
    collection.remove(query, function(err, result) {
      assert.equal(err, null);
      callback(result);
      db.close();
    });
  });
}

/**
 * Find ('date' でソート)
 * @param {Dictionary} query
 * @param {Function(docs)} callback
 */
var find = function(query, callback) {
  connect(function(db, collection) {
    collection.find(query).sort({date: -1}).toArray(function(err, docs) {
      assert.equal(err, null);
      callback(docs);
      db.close();
    });
  });
}

/**
 * Find All
 * @param {Function(docs)} callback
 */
var findAll = function(callback) {
  find({}, callback);
}

module.exports.insert = insert;
module.exports.update = update;
module.exports.remove = remove;
module.exports.find = find;
module.exports.findAll = findAll;
