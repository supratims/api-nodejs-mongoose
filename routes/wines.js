// Connection to mongodb. Could move this into a more central place

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/xshop');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to xshop database');
});

// Router code starts

// First get a handle of our model
var Wine = require('../models/wines');

// Routes, that do real work to serve our APIs.

exports.findAll = function(req, res){
  Wine.find({}, function (err, docs){
    res.send(docs);
  });
}

exports.addWine = function(req, res){
  var wine = new Wine({ name: req.body.name, description: req.body.description});
  wine.save(function (err, entity) {
    if (err) res.send({'error':err});
    res.send(entity);
    // saved!
  })
}
