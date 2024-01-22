const multer = require("multer");
const Image = require("../models/ImageModel");
const httpStatusCode = require("../constants/httpStatusCodes");
const fs = require("fs");

module.exports.UploadImageGallery = async (req, res) => {
  try {
    const uploadedImages = req.files;

    console.log(`req`, req.files);

    if (!uploadedImages || uploadedImages.length === 0) {
      console.log(!uploadedImages || uploadedImages.length === 0);

      return res.status(httpStatusCode.BAD_REQUEST).json({
        success: false,
        message: "No images provided",
      });
    }

    const ImageUpload= Image.create({
      Id:'10001',
      HotelId:'100',
      name:uploadedImages[0].originalname,
      description:'hello',
    });

    return res.status(httpStatusCode.OK).json({
      success: true,
      message: "Images uploaded successfully",
      ImageUpload:ImageUpload
    });
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Error uploading images",
      error: error.message,
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
