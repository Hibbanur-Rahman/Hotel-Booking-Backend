const multer= require('multer');
const Image= require('../models/ImageModel');
const httpStatusCode=require('../constants/httpStatusCodes')

const storage= multer.memoryStorage();
const upload= multer({
    storage: storage
});

module.exports.UploadImageGallery= async (req,res)=>{
    try{
        const uploadedImages= req.files;

        if(!uploadedImages|| uploadedImages.length==0){
            return res.status(httpStatusCode.BAD_REQUEST).json({
                success: false,
                message:" No images Provided",
            });
        }
        const imageIds= await Promise.all(
            uploadedImages.map(async (file)=>{
                const image= new Image({
                    data: file.buffer,
                    contentType: file.mimetype,
                });
                await image.save();
                return image._id;
            })
        );
        

        return res.status(httpStatusCode.OK).json({
            success: true,
            message: "Image Uploaded Successfully",
            id: imageIds,
        })
    }
    catch(error){
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR)
        .json({
            success: false,
            message: "Error uploading image",
            error,
        });
    }
}




module.exports.ViewImage=async (req,res)=>{
    try{
        const image= await Image.findById(req.params.id);

        if(!image){
            return res.status(httpStatusCode.BAD_REQUEST).json({
                success: false,
                message:"Image not found",
            });
        }

        res.writeHead(httpStatusCode.OK,{
            'Content-Type':image.contentType
        });
        res.end(image.data);

    }catch(error){
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Error retrieving image",
            error,
        });
    }
}