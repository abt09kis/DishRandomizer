var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

//Creation of user schema.
var userSchema = new Schema({
	name: String,
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	admin: Boolean,
	created_at: Date,
	updated_at: Date
});

var User = mongoose.model('User', userSchema);

module.exports = User;