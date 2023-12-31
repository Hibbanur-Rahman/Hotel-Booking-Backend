const mongoose = require("mongoose");
const httpStatusCodes = require("../constants/httpStatusCodes");
const WorkingHoursModel=require('../models/workingHoursModel.js');


module.exports.AddWorkingHours = async (req, res) => {
  try {
    const {
      MondayOpening,
      MondayClosing,
      TuesdayOpening,
      TuesdayClosing,
      WednessdayOpening,
      WednessdayClosing,
      ThursdayOpening,
      ThursdayClosing,
      FridayOpening,
      FridayClosing,
      SaturdayOpening,
      SaturdayClosing,
      SundayOpening,
      SundayClosing,
      createdAt
    } = req.body;

    const HotelId=101;
    //validation for non-empty Value
    if (
      !MondayOpening ||
      !MondayClosing ||
      !TuesdayOpening ||
      !TuesdayClosing ||
      !WednessdayOpening ||
      !WednessdayClosing ||
      !ThursdayOpening ||
      !ThursdayClosing ||
      !FridayClosing ||
      !FridayOpening ||
      !SaturdayOpening ||
      !SaturdayClosing ||
      !SundayOpening ||
      !SundayClosing
    ) {
      return res.status(httpStatusCodes.BAD_REQUEST).json({
        success: false,
        message: "Please enter all the input field",
        data: req.body,
      });
    }


    const workingHours=await WorkingHoursModel.create({
        HotelId,
        Monday:[
            {
                opening: MondayOpening,
                closing: MondayClosing,
            },
        ],
        Tuesday:[
            {
                opening:TuesdayOpening,
                closing:TuesdayClosing,
            },
        ],
        Wednesday:[
            {
                opening:WednessdayOpening,
                closing:WednessdayClosing,
            },
        ],
        Thursday:[
            {
                opening:ThursdayOpening,
                closing: ThursdayClosing,
            },
        ],
        Friday:[
            {
                opening:FridayOpening,
                closing:FridayClosing,
            },
        ],
        Saturday:[
            {
                opening: SaturdayOpening,
                closing:SaturdayClosing,
            },
        ],
        Sunday:[
            {
                opening:SundayOpening,
                closing: SundayClosing,
            },
        ],
        createdAt,
    })

    //Respond with success message and the working hours information
    res.status(httpStatusCodes.OK).json({
        success: true,
        message:"Working Hours Added Successfull",
        data:{workingHoursInfo: workingHours},
    });


  } catch (error) {
    console.error("something went Wrong", error);
    // Respond with an internal server error message
    res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
    });
  }
};
