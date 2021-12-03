var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OfftopicSchema = new Schema(
  {
    username: {type: String, required: true},
    message: {type: String, required: true},
  }
);

OfftopicSchema
.virtual('url')
.get(function () {
  return '/catalog/offtopic/' + this._id;
});

module.exports = mongoose.model('Offtopic', OfftopicSchema);

