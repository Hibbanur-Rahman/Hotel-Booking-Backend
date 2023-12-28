const httpStatusCodes = require("../constants/httpStatusCodes");
const locality = require("../models/localityModel");

module.exports.AddLocality = async (req, res) => {
    try {
        const {
            lattitude,
            longitude,
            city,
            address,
            pin,
            state,
            mobile,
            email,
            website,
            createdAt,
        } = req.body;

        const localityId=10001;
        if (
            !lattitude ||
            !longitude ||
            !city ||
            !address ||
            !pin ||
            !state ||
            !mobile ||
            !email ||
            !website
        ) {
            return res.status(httpStatusCodes.BAD_REQUEST).json({
                success: false,
                message: "Missing required fields",
                requestData: req.body,
            });
            
        }

        const newLocality = await locality.create({
            localityId,
            lattitude,
            longitude,
            city,
            address,
            pin,
            state,
            mobile,
            email,
            website,
            createdAt
        });

        // Respond with success message and hotel information
    res.status(httpStatusCodes.OK).json({
        success: true,
        message: "Hotel Added Successfully",
        data: { localityInfo:newLocality },
      });

    } catch (error) {
        console.log("something went wrong", error);
        return res.status(httpStatusCodes.NOT_FOUND).json({
            success: false,
            message: "Missing required fields",
            error: error.message,
        });
    }

};
