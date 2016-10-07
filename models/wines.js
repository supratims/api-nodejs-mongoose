var mongoose = require('mongoose');

var wineSchema = new mongoose.Schema({
  name:  String,
  permalink: String,
  media: {
    image: String,
    video: String,
  },
  description:   String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Wine', wineSchema);
