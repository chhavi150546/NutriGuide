const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// correct path to users.json
const filePath = path.join(__dirname, "../data/users.json");


// SIGNUP
router.post("/signup", (req, res) => {

  console.log("Signup request received:", req.body);

  const { name, email, password } = req.body;

  // read existing users
  const users = JSON.parse(fs.readFileSync(filePath));

  // create new user
  const newUser = {
    id: Date.now(),
    name,
    email,
    password
  };

  // add user
  users.push(newUser);

  // save file
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  res.json({
    message: "User registered successfully",
    user: newUser
  });

});


// LOGIN
router.post("/login", (req, res) => {

  const { email, password } = req.body;

  const users = JSON.parse(fs.readFileSync(filePath));

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password"
    });
  }

  res.json({
    message: "Login successful",
    user
  });

});


module.exports = router;