const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let saltRounds = 10;
var fetchuser = require("../middleware/fetchuser");
const { authToken, genToken } = require("../middleware/authorization_jwt");
//ROUTE 1: Create a user using: POST "/api/auth/createuser". No login required.
router.post(
  "/createuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 6,
    }),
    body("role", "Please select your role").isLength({
      min: 1,
    }),
  ],
  async (req, res) => {
    // If there are errors return bad requests and the errors.
    const errors = validationResult(req);
    var success = true;
    if (!errors.isEmpty()) {
      success = false;
      var error = "Enter a valid email, Password must be atleast 5 characters";
      return res.status(400).json({ success, errors: errors.array(), error });
    }
    // Check whether the email exists already'
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }

      let securedPassword = await bcrypt.hash(req.body.password, saltRounds);

      // Create a new user
      user = await User.create({
        email: req.body.email,
        password: securedPassword,
        role: req.body.role,
      });
      user.save();

      const data = {
        user: {
          id: user.id,
        },
      };

      const auth_token = jwt.sign(data, "abcd");
      console.log(auth_token);

      res.json({ success, auth_token, user });
    } catch (error) {
      success = false;
      console.error(error.message);
      res.status(500).send(success, "Some error occurred");
    }
  }
);

//ROUTE 2: Authenticate a user using: POST "/api/auth/login". No login required.
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    // If there are errors return bad requests and the errors.
    const errors = validationResult(req);
    var success = true;
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({ success, errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials",
        });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials",
        });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(payload, "abcd");
      console.log(success, authToken);

      res.json({ success, authToken, user });
    } catch (error) {
      success = false;
      console.error(error.message);
      res.status(500).send(success, "Internal Server Error");
    }
  }
);

// ROUTE 3: Get logged in user details using POST "/api/auth/getuser". No login required.
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
