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
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
              cb(null, '/tmp/my-uploads')
            },
            filename: function (req, file, cb) {
              const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
              cb(null, file.fieldname + '-' + uniqueSuffix)
            }
          })
          
          const upload = multer({ storage: storage })
        

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