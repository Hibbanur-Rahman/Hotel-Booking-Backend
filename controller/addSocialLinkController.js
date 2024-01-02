const httpStatusCodes= require('../constants/httpStatusCodes');
const SocialLinkModel= require('../models/socialLinksModel.js');

module.exports.AddSocialLink=async (req,res)=>{
    try{
        const {facebook,twitter,instagram,linkedin,createdAt}= req.body;

        //validation
        if(!facebook|| !twitter|| !instagram|| !linkedin){
            return res.status(httpStatusCodes.BAD_REQUEST).json({
                success: false,
                message:"all field are required"
            });
        }

        const id=100001;
        const HotelId=100;
        const SocialLink= await SocialLinkModel.create({
            id,
            HotelId,
            facebook,
            twitter,
            instagram,
            linkedin,
            createdAt,
        });

        return res.status(httpStatusCodes.OK).json({
            success: true,
            message:"successfully added social Links",
            data: SocialLink,
        });
    }catch(error){
        return res.status(httpStatusCodes.BAD_REQUEST).json({
            success: false,
            message:"someting went Wrong!!",
            error: error.message,
        });
    }
}