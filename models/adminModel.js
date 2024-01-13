const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
    },
    dateOfBirth: {
      type: Date,
    },
    hotelId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "hotels",
      },
    ],
  },
  { timestamps: true }
);

const AdminModel = mongoose.model("Admin", adminSchema);

module.exports = AdminModel;
