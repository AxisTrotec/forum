var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TechnologySchema = new Schema(
  {
    username: {type: String, required: true},
    message: {type: String, required: true},
  }
);

TechnologySchema
.virtual('url')
.get(function () {
  return '/catalog/technology/' + this._id;
});

module.exports = mongoose.model('Technology', TechnologySchema);