const mongoose = require("mongoose")
const { Schema } = mongoose;


const userSchema = new Schema({
    phone_number: {type: Number, required: true,unique:true},
    name: {type: String, required: true},
    email: {type: String, required: true,unique:true},
    otp:{type:Number,required:true},
    location:{type:String,required:true}
  }, {timestamps: true});

  const user = mongoose.model('user', userSchema);
module.exports = user;    
  