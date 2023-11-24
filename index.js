const express = require("express");
const path = require("path");
const bodyParser = require("body-parser"); // Add body-parser

const collection = require("./dbConnect/mongodb");

const publicPath = path.join(__dirname, "public");
const loginPage = path.join(__dirname, "views/login.ejs");
const app = express();

app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");
app.use(express.static(publicPath));

// Add body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/aboutUs", (req, res) => {
  res.render("aboutUs");
});
app.get("/rooms", (req, res) => {
  res.render("rooms");
});
app.get("/services", (req, res) => {
  res.render("services");
});
app.get("/blog", (req, res) => {
  res.render("blog");
});
app.get("/gallery", (req, res) => {
  res.render("gallery");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/login", (re, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  // Handle login logic
  const data = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    const user = await collection.findOne({
      email: data.email,
      password: data.password,
    });
    if (user) {
      res.render("./userDashboard/dashboard", { user });

      //user dashboard routes
      app.get("/userDashboard", (req, res) => {
        res.render("./userDashboard/dashboard", { user });
      });
      //user my booking routes
      app.get('/myBooking',(req,res)=>{
        res.render('./userDashboard/myBooking', { user });
      })
      //user my profile route
      app.get('/myProfile',(req,res)=>{
        res.render('./userDashboard/myProfile',{user});
      })


    } else {
      // User not found, handle login failure
      console.log("Login failed: User not found");
      res.render("login", { error: "Invalid email or password" }); // Render login page with an error message
    }
    console.log(user);
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  try {
    await collection.insertMany([data]);
    res.render("login");
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(8000, () => {
  console.log("the file is running on 8000 port....");
});
