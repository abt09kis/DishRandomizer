var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		Resturant = require('./restaurantSchema');

//Creation of user schema.
var dishSchema = new Schema({
	restaurant:{type: mongoose.Schema.Types.ObjectId, ref: 'Resturant'},
	name: String,
	price: Number
});

var Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;