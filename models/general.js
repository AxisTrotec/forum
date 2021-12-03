var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GeneralSchema = new Schema(
  {
    username: {type: String, required: true},
    message: {type: String, required: true},
  }
);

GeneralSchema
.virtual('url')
.get(function () {
  return '/catalog/general/' + this._id;
});

module.exports = mongoose.model('General', GeneralSchema);

