var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		Resturant = require('./restaurantSchema'),
		User = require('./userSchema'),
		Dish = require('./dishSchema');

//Creation of user schema.
var favoriteSchema = new Schema({
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	restaurant: {type: mongoose.Schema.Types.ObjectId, ref: 'Resturant'},
	dish: {type: mongoose.Schema.Types.ObjectId, ref: 'Dish'}
});

var Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;