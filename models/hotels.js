const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    
  },
});
