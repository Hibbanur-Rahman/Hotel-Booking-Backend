const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema({
  Id: {
    type: String,
    required: true,
  },
  HotelId: {
    type: String,
    required: true,
  },
  name: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Image", GallerySchema);
