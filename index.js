const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mainRoutes = require("./routes/mainRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");

const addHotelController=require("./controller/addHotelController.js");
const addLocalityController= require('./controller/addLocalityController.js');

const {
  handleUserLogin,
  handleUserSignup,
}=require('./controller/authController.js');
const {verifyToken}=require('./middlewares/auth.js');
const {userInfo}=require('./middlewares/userInfo.js');

require("dotenv").config();

const app = express();

const saltRounds = 10;

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


//signup route
app.use("/signup", handleUserSignup);

//login  route
app.use("/login", handleUserLogin);
// use the add hotel routes with controller
app.use("/addHotel", addHotelController.addHotel);
//use the add locality routes with controller
app.use('/addLocality',addLocalityController.AddLocality);


app.use('/userRoutes',verifyToken,userInfo,userRoutes);
// app.get("/myBooking",verifyToken,userInfo,async(req, res) => {
//   const user= req.user;
//   console.log(user);
//   res.render("./userDashboard/myBooking", {user});
// });
//login logic
// app.post("/login", async (req, res) => {
//   try {
//     const data = {
//       email: req.body.email,
//       password: req.body.password,
//     };
//     const user = await collection.findOne({ email: data.email });
//     if (user && (await bcrypt.compare(data.password, user.password))) {
//       res.render("./userDashboard/dashboard", { user });
//       //user dashboard routes
//       app.get("/userDashboard", (req, res) => {
//         res.render("./userDashboard/dashboard", { user });
//       });
//       //user my booking routes
//       app.get("/myBooking", (req, res) => {
//         res.render("./userDashboard/myBooking", { user });
//       });
//       //user my profile route
//       app.get("/myProfile", (req, res) => {
//         res.render("./userDashboard/myProfile", { user });
//       });
//       //user my Reviews
//       app.get("/myReviews", (req, res) => {
//         res.render("./userDashboard/myReviews", { user });
//       });
//       //user my userSetting
//       app.get("/userSetting", (req, res) => {
//         res.render("./userDashboard/setting", { user });
//       });
//       //user my wishlist
//       app.get("/wishlist", (req, res) => {
//         res.render("./userDashboard/wishlist", { user });
//       });

//       //adminDashboard Routes
//       app.get("/adminDashboard", (req, res) => {
//         res.render("./adminDashboard/dashboard", { user });
//       });
//       //admin myBooking
//       app.get("/adminMyBooking", (req, res) => {
//         res.render("./adminDashboard/myBooking", { user });
//       });
//       //admin myProfile
//       app.get("/adminMyProfile", (req, res) => {
//         res.render("./adminDashboard/myProfile", { user });
//       });
//       //admin myReviews
//       app.get("/adminMyReviews", (req, res) => {
//         res.render("./adminDashboard/myReviews", { user });
//       });
//       //admin myListing
//       app.get("/myListing", (req, res) => {
//         res.render("./adminDashboard/myListing", { user });
//       });
//       //admin addListing
//       app.get("/addListing", (req, res) => {
//         res.render("./adminDashboard/addListing", { user });
//       });
//       //admin wallet
//       app.get("/wallet", (req, res) => {
//         res.render("./adminDashboard/wallet", { user });
//       });
//       //admin setting
//       app.get("/adminSetting", (req, res) => {
//         res.render("./adminDashboard/adminSetting", { user });
//       });

//     } else {
//       console.log("Login failed: Invalid email or password");
//       res.render("login", { error: "Invalid email or password" });
//     }
//     console.log(user);
//   } catch (error) {
//     console.error("Error inserting data:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`the file is running on ${port} port....`);
});
