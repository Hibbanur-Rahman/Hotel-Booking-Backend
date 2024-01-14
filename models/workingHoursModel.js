const mongoose = require("mongoose");

const WorkingHoursSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    HotelId: {
      type: String,
      required: true,
    },
    Monday: [
      {
        opening: String,
        closing: String,
      },
    ],
    Tuesday: [
      {
        opening: String,
        closing: String,
      },
    ],
    Wednesday: [
      {
        opening: String,
        closing: String,
      },
    ],
    Thursday: [
      {
        opening: String,
        closing: String,
      },
    ],
    Friday: [
      {
        opening: String,
        closing: String,
      },
    ],
    Saturday: [
      {
        opening: String,
        closing: String,
      },
    ],
    Sunday: [
      {
        opening: String,
        closing: String,
      },
    ],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hotels",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("WorkingHours", WorkingHoursSchema);
