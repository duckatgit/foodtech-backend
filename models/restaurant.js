const mongoose = require("mongoose")
const { Schema } = mongoose;

const restaurantSchema = new Schema({
    restaurant_name: {type: String, required: true},   
    restaurant_location:{type:String,required:true},
    token:{type:String}


  }, {timestamps: true});

const restaurants = mongoose.model('restaurants', restaurantSchema);
module.exports = restaurants;
