const express=require('express');
const router= express.Router();

const multer = require("multer");


const { verifyToken } = require("../middlewares/auth.js");
const { userInfo } = require("../middlewares/userInfo.js");

const addHotelController = require("../controller/addHotelController.js");
const addLocalityController = require("../controller/addLocalityController.js");
const addMenuItemsController = require("../controller/addMenuController.js");
const AddWorkingHoursController = require("../controller/addWorkingHoursController.js");
const AddAmenitiesController = require("../controller/addAmenitiesController.js");
const AddSocialLinkController = require("../controller/addSocialLinkController.js");
const AddUploadImageController = require("../controller/addImageController.js");


const editAdminProfileController= require('../controller/editAdminProfileController.js');

router.use((req,res,next)=>{
    const user=req.user;

    console.log(user);
    
    if(user){
        next();
    }
    else{
        res.redirect('/login');
    }
});


// use the add hotel routes with controller
router.use("/addHotel", verifyToken,userInfo,addHotelController.addHotel);

//use the add locality routes with controller
router.use("/addLocality", verifyToken,userInfo,addLocalityController.AddLocality);

//use the add Menu Items routes with controller
router.use("/addMenu", verifyToken,userInfo,addMenuItemsController.AddMenuItem);

//use the add workingHours routes with controller
router.use("/addWorkingHours",verifyToken,userInfo, AddWorkingHoursController.AddWorkingHours);

//use the add Amenities routes with controller
router.use("/addAmenities", verifyToken,userInfo,AddAmenitiesController.AddAmenities);

//use the add the SocialLink routes with controller
router.use("/addSocialLink",verifyToken,userInfo, AddSocialLinkController.AddSocialLink);

const storage = multer.memoryStorage();
const upload = multer({ dest: "uploads/" });

// use the add the Image Gallery routes with the controller
router.use(
  "/addGalleryImage",
  upload.single("GalleryImage"),
  AddUploadImageController.UploadImageGallery
);



//use the add the SocialLink routes with controller
router.use("/editAdminProfile",editAdminProfileController.EditPersonalInformation);

module.exports=router;