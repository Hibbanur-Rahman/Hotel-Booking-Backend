const httpStatusCodes=require('../constants/httpStatusCodes');
const MenuItemCollection=require('../models/menuItemsModel');


module.exports.AddMenuItem=async (req,res)=>{
    try{
        const {ItemName,ItemCategory,ItemPrice,ItemDescription}=req.body;
        const Id=1001;
        const HotelId=101;
    
        //Validation
        if(!ItemName || !ItemCategory|| !ItemPrice || !ItemDescription){
            res.status(httpStatusCodes.BAD_REQUEST).json({
                success: false,
                message: "Missing required fields",
                requestData: req.body,
            });
        }
    
        //create a new hotel using Mongoose
        const newMenu = await MenuItemCollection.create({
            Id,
            HotelId,
            ItemName,
            ItemCategory,
            ItemPrice,
            ItemDescription,
        });

        res.status(httpStatusCodes.OK).json({
            success: true,
            message: "Menu Item Added SuccessFully",
            data :{MenuInfo: newMenu},
        });
    }catch(error){
        console.log("Something went wrong!",error);

        res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
    
}