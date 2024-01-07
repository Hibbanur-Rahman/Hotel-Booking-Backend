const multer = require("multer");
const Image = require("../models/ImageModel");
const httpStatusCode = require("../constants/httpStatusCodes");
const fs=require('fs');

module.exports.UploadImageGallery = async (req, res) => {
  try {
    const uploadedImages = req.files;

    console.log(uploadedImages); // Log uploaded files
    if (!uploadedImages || uploadedImages.length === 0) {
      return res.status(httpStatusCode.BAD_REQUEST).json({
        success: false,
        message: "No images provided",
      });
    }

    // Perform any additional logic you need for image processing

    // const imageIds = uploadedImages.map((image) => {
     
    // });
     // Using the same storage configuration for diskStorage
    
     const diskStorage = multer.diskStorage({
        destination: function (req, file, cb) {
         
          var dir='./uploads';
          if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
          }
          cb(null, dir);
        },
        filename: function (req, file, cb) {
          const uniqueSuffix =
            Date.now() + "-" + Math.round(Math.random() * 1e9);
          cb(null, file.fieldname + "-" + uniqueSuffix);
        },
      });
    const upload = multer({ storage: diskStorage });
    upload(req,res,function (err){
        if(err){
            return res.send("something gone wrong");
        }
        res.send("upload complete");
    });
    // Any additional logic related to diskStorage if needed

    return res.status(httpStatusCode.OK).json({
      success: true,
      message: "Images uploaded successfully",
      ids: diskStorage,
    });
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Error uploading images",
      error:error.message,
    });
  }
};

module.exports.ViewImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);

    if (!image) {
      return res.status(httpStatusCode.BAD_REQUEST).json({
        success: false,
        message: "Image not found",
      });
    }

    res.writeHead(httpStatusCode.OK, {
      "Content-Type": image.contentType,
    });
    res.end(image.data);
  } catch (error) {
    res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Error retrieving image",
      error,
    });
  }
};
