const httpStatusCodes = require("../constants/httpStatusCodes");
const Hotel = require("../models/hotelsModel");

module.exports.addHotel = async (req, res) => {
  try {
    const {  name, categories,HotelKeyword, description, createdAt } = req.body;

    console.log(req.body);
    const hotelId=101;
    const pin=847301;
    const imageHotel='new added a hotel';
    // Validation
    if ( !name || !categories|| !HotelKeyword || !description) {
      return res.status(httpStatusCodes.BAD_REQUEST).json({
        success: false,
        message: "Missing required fields",
        requestData: req.body,
      });
    }

    // Create a new hotel using Mongoose
    const newHotel = await Hotel.create({
      hotelId,
      name,
      categories,
      HotelKeyword,
      pin,
      imageHotel,
      description,
      createdAt,
    });

    // Respond with success message and hotel information
    res.status(httpStatusCodes.OK).json({
      success: true,
      message: "Hotel Added Successfully",
      data: { hotelInfo: newHotel },
    });
  } catch (error) {
    console.error("Something went wrong!", error);
    // Respond with an internal server error message
    res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
