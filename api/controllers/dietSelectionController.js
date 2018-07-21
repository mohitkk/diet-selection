'use strict';


var mongoose = require('mongoose'),
  Diets = mongoose.model('DietSchema');

exports.list_all_items = function(req, res) {
  Diets.find({}, function(err, dietItem) {
    if (err)
      res.send(err);
    res.json(dietItem);
  });
};




exports.create_a_item = function(req, res) {
  var new_Diets = new Diets(req.body);
  new_Diets.save(function(err, dietItem) {
    if (err)
      res.send(err);
    res.json(dietItem);
  });
};


exports.read_an_item = function(req, res) {
  Diets.findById(req.params.itemId, function(err, dietItem) {
    if (err)
      res.send(err);
    res.json(dietItem);
  });
};


exports.update_an_item = function(req, res) {
  Diets.findOneAndUpdate({_id: req.params.itemId}, req.body, {new: true}, function(err, dietItem) {
    if (err)
      res.send(err);
    res.json(dietItem);
  });
};


exports.delete_an_item = function(req, res) {


  Diets.remove({
    _id: req.params.itemId
  }, function(err, dietItem) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};