const httpStatusCodes = require('../constants/httpStatusCodes');
const hotel = require('../models/hotelsModel');

module.exports.addHotel = async (req, res) => {
  try {
    const { hotelId, name, pin, imageHotel, description, createdAt } = req.body;
    // const hotelId=req.body.hotelId;
    // const name= req.body.name;
    // const pin= req.body.pin;
    // const imageHotel=req.body.imageHotel;
    // const description=req.body.description;
    // const createdAt=req.body.createdAt;


    // Validation
    if (!hotelId || !name || !pin || !imageHotel || !description) {
      return res
        .status(httpStatusCodes.BAD_REQUEST)
        .json({
          success: false,
          message: "Missing required fields",
          hotelId: hotelId,
          name: name,
          pin: pin,
          imageHotel: imageHotel,
          description: description,
        });
    }

    // Create a new hotel using Mongoose
    const newHotel = await hotel.create({
      hotelId,
      name,
      pin,
      imageHotel,
      description,
      createdAt,
    });

    // Respond with success message and hotel information
    res
      .status(httpStatusCodes.OK)
      .json({
        success: true,
        message: "Hotel Added Successfully",
        data: { hotelInfo: newHotel },
      });

  } catch (error) {
    console.error("Something went wrong!", error);
    // Respond with an internal server error message
    res
      .status(httpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: "Internal Server Error",error });
  }
};
