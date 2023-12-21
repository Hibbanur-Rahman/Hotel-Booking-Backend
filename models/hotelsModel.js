const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required:true,
  },
  pin:{
    type: Number,
    required:true,
  },
  imageHotel:{
    type:String,
    required:true,
  },
  description:{
    type: String,
    required: true,
  },

});


module.exports=mongoose.model('hotels',hotelSchema);