const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { DateTime } = require('luxon');

const MessageSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', require: true},
  title: { type: String, required: true, minlength: 1, maxlength: 50 },
  text: { type: String, required: true, minlength: 1, maxlength: 1500 },
  post_date: { type: Date, default: Date.now }
});

MessageSchema.virtual('post_date_formatted').get(function () {
  return DateTime.fromJSDate(this.post_date).toFormat("yyyy-MM-dd, HH:mm");
})

module.exports = mongoose.model('Message', MessageSchema);