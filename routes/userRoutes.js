const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
    // Assuming you store the user information in the request object during authentication
    const user = req.user;
  
    // If the user is authenticated, proceed to the next middleware/route
    // If not, you can redirect to the login page or handle it as per your authentication logic
    if (user) {
      next();
    } else {
      res.redirect("/login");
    }
  });
// User dashboard routes
router.get("/", (req, res) => {
    res.render("./userDashboard/dashboard", { user: req.user });
  });
  
  
//user dashboard routes
router.get("/userDashboard", (req, res) => {
  res.render("./userDashboard/dashboard", { user });
});
//user my booking routes
router.get("/myBooking", (req, res) => {
  res.render("./userDashboard/myBooking", { user });
});
//user my profile route
router.get("/myProfile", (req, res) => {
  res.render("./userDashboard/myProfile", { user });
});
//user my Reviews
router.get("/myReviews", (req, res) => {
  res.render("./userDashboard/myReviews", { user });
});
//user my userSetting
router.get("/userSetting", (req, res) => {
  res.render("./userDashboard/setting", { user });
});
//user my wishlist
router.get("/wishlist", (req, res) => {
  res.render("./userDashboard/wishlist", { user });
});


module.exports=router;