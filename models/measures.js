var mongoose = require('mongoose');

var Measures = mongoose.model('Measures', {
  temperature: Number,
  light: Number
});

module.exports.Measures = Measures;