const express = require("express");
const router = express.Router();

//adminDashboard Routes
router.get("/adminDashboard", (req, res) => {
  res.render("./adminDashboard/dashboard", { user });
});
//admin myBooking
router.get("/adminMyBooking", (req, res) => {
  res.render("./adminDashboard/myBooking", { user });
});
//admin myProfile
router.get("/adminMyProfile", (req, res) => {
  res.render("./adminDashboard/myProfile", { user });
});
//admin myReviews
router.get("/adminMyReviews", (req, res) => {
  res.render("./adminDashboard/myReviews", { user });
});
//admin myListing
router.get("/myListing", (req, res) => {
  res.render("./adminDashboard/myListing", { user });
});
//admin addListing
router.get("/addListing", (req, res) => {
  res.render("./adminDashboard/addListing", { user });
});
//admin wallet
router.get("/wallet", (req, res) => {
  res.render("./adminDashboard/wallet", { user });
});
//admin setting
router.get("/adminSetting", (req, res) => {
  res.render("./adminDashboard/adminSetting", { user });
});

module.exports=router;