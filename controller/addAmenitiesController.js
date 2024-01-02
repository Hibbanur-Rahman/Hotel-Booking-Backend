const httpStatusCodes = require("../constants/httpStatusCodes");
const AmenitiesModel = require("../models/amenitiesModel");

module.exports.AddAmenities = async (req, res) => {
  try {
    const { 
        HealthScore,
        Reservations, 
        VegetarianOptions, 
        ModerateNoise, 
        GoodForKids,
        PrivateLotParking,
        BeerWine,
        TVServices,
        PetsAllow,
        OffersDelivery,
        StaffWearsMasks,
        AcceptsCreditCards,
        OffersCatering,
        GoodforBreakfast,
        WaiterService,
        DriveThru,
        OutdoorSeating,
        OffersTakeout,
        VeganOptions,
        Casual,
        GoodForGroups,
        BrunchLunchDinner,
        FreeWiFi,
        WheelchairAccessible
    } = req.body;

    const id=100;
    const info=[ HealthScore,
        Reservations, 
        VegetarianOptions, 
        ModerateNoise, 
        GoodForKids,
        PrivateLotParking,
        BeerWine,
        TVServices,
        PetsAllow,
        OffersDelivery,
        StaffWearsMasks,
        AcceptsCreditCards,
        OffersCatering,
        GoodforBreakfast,
        WaiterService,
        DriveThru,
        OutdoorSeating,
        OffersTakeout,
        VeganOptions,
        Casual,
        GoodForGroups,
        BrunchLunchDinner,
        FreeWiFi,
        WheelchairAccessible];

    const Amenities= await AmenitiesModel.create({
        id,
        info,
        displayImage:"impty image",

    });

    return res.status(httpStatusCodes.OK).json({
        success: true,
        message:"insert successfully",
        data: Amenities,
    });
    
  } catch (error) {
    return res.status(httpStatusCodes.BAD_REQUEST).json({
        success:false,
        message:"someThing went wrong!!",
        error:error.message,
    });
  }
};
