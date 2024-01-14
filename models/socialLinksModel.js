const mongoose = require("mongoose");

const SocialLinkScheme = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    HotelId: {
      type: String,
      required: true,
    },
    facebook: {
      type: String,
      required: true,
    },
    twitter: {
      type: String,
      required: true,
    },
    instagram: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
      required: true,
    },
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

module.exports = mongoose.model("socialLink", SocialLinkScheme);
