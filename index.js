var Client = require("node-rest-client").Client;

var client = new Client();

(function() {
    restaurantsInPostalCode("11628");
})();

/*
 * Trying to recieve some rudamentary api calls using postal code 11628 - compare with browser. 
 * Using a registeredMethod in accordance to the node-rest-client spec..
 */
function restaurantsInPostalCode(postalCode) {
    client.registerMethod("getRestaurantJSON", "https://api.hungrig.se/restaurants/search?deliveryType=1&zip=" + postalCode, "GET");
    
    client.methods.getRestaurantJSON((data , response) => {

        // data partition of JSON string contains all available restaurants.
        console.log(data.data.length);

        var randomNbr = getRandomIntInc(0, data.data.length);

        console.log(randomNbr);
        console.log(data.data[randomNbr].restaurantName);
        var clientKey = data.data[randomNbr].clientKey;

        getRandomizedRestaurant(clientKey);

    });
}

function getRandomizedRestaurant(clientKey) {
    client.registerMethod("randomRestaurant", "https://api.hungrig.se/foodcategories/" + clientKey + "/foodcourses?deliveryType=1", "GET");


    // Plats 0 är alltid förrätter ? 
    // Köra switch på index beroende på alternativ ?  => Switch på 
    client.methods.randomDish( (data, response) => {
        console.log(data.data[0]);
        //
        switch ('') {
            case value:
                
                break;
        
            default:
                break;
        }

    });
}

function getRandomIntInc(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1 )) + min;
}