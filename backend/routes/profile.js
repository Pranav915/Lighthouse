const express = require("express");
const router = express.Router();
const Mentor = require("../models/Mentor");
const Mentee = require("../models/Mentee");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");

// router.get("/mentorDashboardviewProfile", fetchuser, async (req, res) => {
//     try {
//       const notes = await Note.find({ user: req.user.id });
//       res.json(notes);
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Some error occurred");
//     }
//   });

router.post("/viewmentorprofile", fetchuser, async (req, res) => {
  console.log("Hello");
  let success = false;
  try {
    //   const errors = validationResult(req);
    //   if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors });
    //   }

    // ROUTE 1: Get all the notes using: GET "/api/auth/getuser". Login required.
    // router.get("/fetchallnotes", fetchuser, async (req, res) => {
    //     try {
    //       const notes = await Note.find({ user: req.user.id });
    //       res.json(notes);
    //     } catch (error) {
    //       console.error(error.message);
    //       res.status(500).send("Some error occurred");
    //     }patilpranav915@gmail.com
    //   });
    const user_email = req.user.email;
    console.log(user_email);
    let found = await Mentor.findOne({ email: user_email });
    console.log(found);
    const mentor = {
      // id: req.user.id,
      name: found.name,
      age: found.age,
      gender: found.gender,
      mobile: found.mobile,
      email: found.email,
      qualification: found.qualification,
      category: found.category,
      about: found.about,
    };
    console.log(mentor);
    res.status(200).json({ mentor: mentor });
    //   return res.status(201).json({"mentor": mentor})
    //   const savedMentor = await mentor.save();
    //   success = true;
    //   req.user.isDetail = true;
    //   res.json({ success, savedMentor });
  } catch (error) {
    //   success = false;
    //   console.error(error.message);
    //   res.status(500).send(success, "Some error occurred");
  }
});

router.post("/viewmenteeprofile", fetchuser, async (req, res) => {
  console.log("Hello");
  let success = false;
  try {
    //   const errors = validationResult(req);
    //   if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors });
    //   }

    // ROUTE 1: Get all the notes using: GET "/api/auth/getuser". Login required.
    // router.get("/fetchallnotes", fetchuser, async (req, res) => {
    //     try {
    //       const notes = await Note.find({ user: req.user.id });
    //       res.json(notes);
    //     } catch (error) {
    //       console.error(error.message);
    //       res.status(500).send("Some error occurred");
    //     }patilpranav915@gmail.com
    //   });
    const user_email = req.user.email;
    console.log(user_email);
    let found = await Mentee.findOne({ email: user_email });
    console.log(found);
    const mentee = {
      // id: req.user.id,
      name: found.name,
      age: found.age,
      gender: found.gender,
      mobile: found.mobile,
      email: found.email,
    };
    console.log(mentee);
    res.status(200).json({ mentee: mentee });
    //   return res.status(201).json({"mentor": mentor})
    //   const savedMentor = await mentor.save();
    //   success = true;
    //   req.user.isDetail = true;
    //   res.json({ success, savedMentor });
  } catch (error) {
    success = false;
    console.error(error.message);
    res.status(500).send(success, "Some error occurred");
  }
});

module.exports = router;
