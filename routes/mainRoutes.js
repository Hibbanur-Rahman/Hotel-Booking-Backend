const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/aboutUs", (req, res) => {
  res.render("aboutUs");
});
router.get("/rooms", (req, res) => {
  res.render("rooms");
});
router.get("/services", (req, res) => {
  res.render("services");
});
router.get("/blog", (req, res) => {
  res.render("blog");
});
router.get("/gallery", (req, res) => {
  res.render("gallery");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});
router.get("/login", (re, res) => {
  res.render("login");
});


module.exports = router;
