const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/LoginHtotelUser", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("MongoDB connected successfully");
});

const HotelBookingSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  firstName:{
    type:String,
  },
  lastName:{
    type:String,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const HotelBookingModel = mongoose.model("LoginUserHotelBooking", HotelBookingSchema);

module.exports = HotelBookingModel;
