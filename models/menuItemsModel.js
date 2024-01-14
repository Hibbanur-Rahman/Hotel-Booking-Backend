const mongoose = require("mongoose");

const MenuItemsSchema = new mongoose.Schema(
  {
    Id: {
      type: Number,
      required: true,
    },
    HotelId: {
      type: Number,
      required: true,
    },
    ItemName: {
      type: String,
      required: true,
    },
    ItemCategory: {
      type: String,
      required: true,
    },
    ItemPrice: {
      type: Number,
      required: true,
    },
    ItemDescription: {
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("MenuItems", MenuItemsSchema);
