const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


const mainRoutes = require("./routes/mainRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const adminControllerRoutes=require('./routes/adminControllerRoutes.js');


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


//use adminRoutes controller for the adminDashboard
app.use("/adminRoutes/Controller/", verifyToken, userInfo, adminControllerRoutes);



//signup route
app.use("/signup", handleUserSignup);

//login  route
app.use("/login", handleUserLogin);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`the file is running on ${port} port....`);
});
