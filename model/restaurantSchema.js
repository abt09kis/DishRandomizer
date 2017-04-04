var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

//Creation of user schema.
var restaurantSchema = new Schema({
	name: String
});

var Restaurant = mongoose.model('Restaurant', userSchema);

module.exports = Restaurant;