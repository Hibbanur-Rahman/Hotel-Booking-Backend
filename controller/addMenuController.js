const httpStatusCodes=require('../constants/httpStatusCodes');
const MenuItemsModel=require('../models/menuItemsModel');


module.exports.AddMenuItem=async (req,res)=>{
    try{
         // Assuming req.body is an array of form data objects
         const formDataArray = req.body;

        const Id=1001;
        const HotelId=101;
    
        // //Validation
        // if(!ItemName || !ItemCategory|| !ItemPrice || !ItemDescription){
        //     res.status(httpStatusCodes.BAD_REQUEST).json({
        //         success: false,
        //         message: "Missing required fields",
        //         requestData: req.body,
        //     });
        // }
    
       
        // Map the form data to the MongoDB model
        const menuItems = formDataArray.map(formData => ({
            Id: Id,
            HotelId: HotelId,
            ItemName: formData.ItemName,
            ItemCategory: formData.ItemCategory,
            ItemPrice: formData.ItemPrice,
            ItemDescription: formData.ItemDescription,
        }));

        const insertedMenuItems = await MenuItemsModel.insertMany(menuItems);

        res.status(httpStatusCodes.OK).json({
            success: true,
            message: "Menu Items Added Successfully",
            data: { menuItems: insertedMenuItems },
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