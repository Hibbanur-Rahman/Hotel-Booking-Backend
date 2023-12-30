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

//user dashboard routes
router.get("/", (req, res) => {
  const user = req.user;
  res.render("./userDashboard/dashboard", { user });
});
//user dashboard routes
router.get("/dashboard", (req, res) => {
  const user = req.user;
  res.render("./userDashboard/dashboard", { user });
});
//user my booking routes
router.get("/myBooking", (req, res) => {
  const user = req.user;
  res.render("./userDashboard/myBooking", { user });
});
//user my profile route
router.get("/myProfile", (req, res) => {
  const user = req.user;
  res.render("./userDashboard/myProfile", { user });
});
//user my Reviews
router.get("/myReviews", (req, res) => {
  const user = req.user;
  res.render("./userDashboard/myReviews", { user });
});
//user my userSetting
router.get("/setting", (req, res) => {
  const user = req.user;
  res.render("./userDashboard/setting", { user });
});
//user my wishlist
router.get("/wishlist", (req, res) => {
  const user = req.user;
  res.render("./userDashboard/wishlist", { user });
});


module.exports=router;