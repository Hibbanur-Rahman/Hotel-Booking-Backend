const express = require("express");
const router = express.Router();


router.use((req, res, next) => {
  // Assuming you store the user information in the request object during authentication
  const user = req.user;

  console.log(user)
  // If the user is authenticated, proceed to the next middleware/route
  // If not, you can redirect to the login page or handle it as per your authentication logic
  if (user) {
    next();
  } else {
    res.redirect("/login");
  }
});

//adminDashboard Routes
router.get("/dashboard", (req, res) => {
  const user = req.user;
  res.render("./adminDashboard/dashboard", { user });
});
//admin myBooking
router.get("/myBooking", (req, res) => {
  const user = req.user;
  res.render("./adminDashboard/myBooking", { user });
});
//admin myProfile
router.get("/myProfile", (req, res) => {
  const user = req.user;
  res.render("./adminDashboard/myProfile", { user });
});
//admin myReviews
router.get("/myReviews", (req, res) => {
  const user = req.user;
  res.render("./adminDashboard/myReviews", { user });
});
//admin myListing
router.get("/myListing", (req, res) => {
  const user = req.user;
  res.render("./adminDashboard/myListing", { user });
});
//admin addListing
router.get("/addListing", (req, res) => {
  const user = req.user;
  res.render("./adminDashboard/addListing", { user });
});
//admin wallet
router.get("/wallet", (req, res) => {
  const user = req.user;
  res.render("./adminDashboard/wallet", { user });
});
//admin setting
router.get("/setting", (req, res) => {
  const user = req.user;
  res.render("./adminDashboard/adminSetting", { user });
});

module.exports=router;