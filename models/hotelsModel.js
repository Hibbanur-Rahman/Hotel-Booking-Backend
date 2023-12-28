const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  hotelId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  categories:{
    type: String,
    required: true,
  },
  HotelKeyword:{
    type: String,
    required: true,
  },
  pin:{
    type: Number,
    required: true,
  },
  imageHotel:{
    type:String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  createdAt:{
    type: Date,
    default: Date.now,
  }
});


module.exports=mongoose.model('hotels',hotelSchema);