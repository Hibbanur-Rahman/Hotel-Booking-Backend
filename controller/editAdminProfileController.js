const userModel=require('../models/userModel');
const httpStatusCodes = require('../constants/httpStatusCodes');

module.exports.EditPersonalInformation= async (req,res)=>{
    try{
        
    }catch(error){
        console.log("error message:",error);
        return res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Something went wrong!",
            error:error.message
        });
    }
}