const mongoose = require("mongoose");

const roomFacilitySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  roomId: {
    type: String,
    required: true,
  },
  amentitiesId: {
    type: String,
    required: true,
  },
});

module.exports=mongoose.model('roomFacility',roomFacilitySchema);