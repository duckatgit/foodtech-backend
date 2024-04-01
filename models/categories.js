const mongoose = require("mongoose")
const { Schema } = mongoose;

const categoriesSchema = new Schema({
    category_name: {type: String, required: true},   
    cuisine:{type:String,required:true},
    restaurant_id:{type:String}
  }, {timestamps: true});
const categories = mongoose.model('categories', categoriesSchema);
module.exports = categories;