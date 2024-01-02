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
        WheelchairAccessible,

        createdAt
    } = req.body;

    const id=1000001;
    const HotelId=101
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
        HotelId,
        info,
        displayImage:"empty image",
        createdAt,
    });

    return res.status(httpStatusCodes.OK).json({
        success: true,
        message:"insert successfully",
        data: Amenities,
    });
    
  } catch (error) {
    return res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).json({
        success:false,
        message:"someThing went wrong!!",
        error:error.message,
    });
  }
};
