const userModel = require("../models/userModel");
const socialLinksModel = require('../models/socialLinksModel');
const httpStatusCodes = require("../constants/httpStatusCodes");

module.exports.EditPersonalInformation = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      mobile,
      dateOfBirth,
      address,
      website,
      aboutSelf,
      facebook,
      twitter,
      instagram,
    } = req.body;

    const user = req.user;
    console.log("admin user:- ", req.user);

    userModel.findOneAndUpdate(
      { email: user.email }, // <-- Corrected the syntax here
      {
        $set: {
          firstName,
          lastName,
          mobile,
          dateOfBirth,
          address,
          website,
          aboutSelf,
          facebook,
          twitter,
          instagram,
        },
      },
      { new: true, useFindAndModify: false },
      (err, doc) => {
        if (err) {
          console.log(err);
        } else {
          console.log(doc);
          // Handle the updated document as needed
          return res.status(httpStatusCodes.OK).json({
            success: true,
            message: "Personal information updated successfully",
            data: doc,
          });
        }
      }
    );
  } catch (error) {
    console.log("error message:", error);
    return res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong!",
      error: error.message,
    });
  }
};
