const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    hotelId: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    categories: {
      type: String,
      required: true,
    },
    HotelKeyword: {
      type: String,
      required: true,
    },
    pin: {
      type: Number,
      required: true,
    },
    imageHotel: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    amenitiesId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'amenities',
    },
    menuItemsId:{
      type: mongoose.Schema.Types.ObjectId,
      ref:'MenuItems',
    },
    workingHoursId:{
      type: mongoose.Schema.Types.ObjectId,
      ref:'WorkingHours',
    },
    socialLinksId:{
      type: mongoose.Schema.ObjectId,
      ref:'socialLink'
    },
    localityId:{
      type: mongoose.Schema.Types.ObjectId,
      ref:'locality'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("hotels", hotelSchema);
