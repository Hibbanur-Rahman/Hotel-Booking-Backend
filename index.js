const express = require("express");
const path = require("path");
const bodyParser = require("body-parser"); // Add body-parser
const mainRoutes = require('./routes/mainRoutes');
const bcrypt = require("bcrypt");
const saltRounds = 10; // You can adjust the number of salt rounds

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

//routes of main website pages
app.use('/',mainRoutes);


//login logic
app.post("/login", async (req, res) => {
  try {
    const data = {
      email: req.body.email,
      password: req.body.password,
    };
    const user = await collection.findOne({ email: data.email });
    if (user && (await bcrypt.compare(data.password, user.password))) {
      res.render("./userDashboard/dashboard", { user });

      //user dashboard routes
      app.get("/userDashboard", (req, res) => {
        res.render("./userDashboard/dashboard", { user });
      });
      //user my booking routes
      app.get("/myBooking", (req, res) => {
        res.render("./userDashboard/myBooking", { user });
      });
      //user my profile route
      app.get("/myProfile", (req, res) => {
        res.render("./userDashboard/myProfile", { user });
      });
      //user my Reviews
      app.get("/myReviews", (req, res) => {
        res.render("./userDashboard/myReviews", { user });
      });
      //user my userSetting
      app.get("/userSetting", (req, res) => {
        res.render("./userDashboard/setting", { user });
      });
      //user my wishlist
      app.get("/wishlist", (req, res) => {
        res.render("./userDashboard/wishlist", { user });
      });
    } else {
      console.log("Login failed: Invalid email or password");
      res.render("login", { error: "Invalid email or password" });
    }
    console.log(user);
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).send("Internal Server Error");
  }
});


//signup logic
app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const myName = name.split(" ");

  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

  const userData = {
    firstName: myName[0],
    lastName:myName[myName.length-1],
    name: name,
    email: req.body.email,
    password: hashedPassword,
  };

  try {
    await collection.insertMany([userData]);
    // res.status(201).send("User created successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(8000, () => {
  console.log("the file is running on 8000 port....");
});
