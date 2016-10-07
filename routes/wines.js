var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/xshop');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to xshop database');
});

var Wine = require('../models/wines');

exports.findAll = function(req, res){
  Wine.find({}, function (err, docs){
    res.send(docs);
  });
}

exports.addWine = function(req, res){
  var wine = new Wine({ name: req.params.name, description: req.params.description});
  wine.save(function (err, entity) {
    if (err) res.send({'error':err});
    res.send(entity);
    // saved!
  })
}
