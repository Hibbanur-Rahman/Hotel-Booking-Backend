const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer=require('multer');

const mainRoutes = require("./routes/mainRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");

const addHotelController = require("./controller/addHotelController.js");
const addLocalityController = require("./controller/addLocalityController.js");
const addMenuItemsController = require("./controller/addMenuController.js");
const AddWorkingHoursController = require("./controller/addWorkingHoursController.js");
const AddAmenitiesController = require("./controller/addAmenitiesController.js");
const AddSocialLinkController = require("./controller/addSocialLinkController.js");
const AddUploadImageController = require("./controller/addImageController.js");

const {
  handleUserLogin,
  handleUserSignup,
} = require("./controller/authController.js");
const { verifyToken } = require("./middlewares/auth.js");
const { userInfo } = require("./middlewares/userInfo.js");

const dbconnect = require("./dbConnect/mongodb.js");
dbconnect.dbConnection("mongodb://127.0.0.1:27017/LoginHtotelUser");

require("dotenv").config();

const app = express();

const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

//Cookie Parser
app.use(cookieParser());


// Add body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Add body-parser middleware
app.use(bodyParser.json());

// Set the view engine
app.set("view engine", "ejs");

// Use mainRoutes for the main website pages
app.use("/", mainRoutes);

//use userRoutes for the userDashboard
app.use("/userRoutes", verifyToken, userInfo, userRoutes);

//use adminRoutes for the adminDashboard
app.use("/adminRoutes", verifyToken, userInfo, adminRoutes);

//signup route
app.use("/signup", handleUserSignup);

//login  route
app.use("/login", handleUserLogin);

// use the add hotel routes with controller
app.use("/addHotel", addHotelController.addHotel);

//use the add locality routes with controller
app.use("/addLocality", addLocalityController.AddLocality);

//use the add Menu Items routes with controller
app.use("/addMenu", addMenuItemsController.AddMenuItem);

//use the add workingHours routes with controller
app.use("/addWorkingHours", AddWorkingHoursController.AddWorkingHours);

//use the add Amenities routes with controller
app.use("/addAmenities", AddAmenitiesController.AddAmenities);

//use the add the SocialLink routes with controller
app.use("/addSocialLink", AddSocialLinkController.AddSocialLink);


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// use the add the Image Gallery routes with the controller
app.use("/addGalleryImage",upload.array("GalleryImage", 3),AddUploadImageController.UploadImageGallery);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`the file is running on ${port} port....`);
});
