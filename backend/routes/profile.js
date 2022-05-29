const express = require("express");
const router = express.Router();
const Mentor = require("../models/Mentor")
const Mentee = require("../models/Mentee");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");
const { RiExternalLinkFill } = require("react-icons/ri");



router.post("/viewprofilementee", fetchuser ,async (req, res) => {
    console.log("Hello");
    let success = false;
    try {
      const user_email = req.user.email
      console.log("/ ",user_email," /")
      let found = await Mentee.findOne({ email : user_email});
     
            console.log(found)
            console.log(found.gender)
            let call1=false;
            let call2=false;
            let call3=false;
            if(found.gender=="male")
            call1=true;
            if(found.gender=="female")
            call2=true;
            if(!call1 && !call2)
            call3=true;
            const mentor1 = {
            // id: req.user.id,
            name: found.name,
            age: found.age,
            gender: found.gender,
            mobile: found.mobile,
            email: found.email,
            qualification: found.qualification,
            category: found.category,
            about: found.about,
            call1: call1,
            call2: call2,
            call3: call3,
          };
        
          console.log(mentor1);
          res.status(200).json({ mentor: mentor1});
    } catch (error) {
      success = false;
      console.error(error.message);
      res.status(500).send(success, "Some error occurred");
    }
  });

router.post("/updateprofilementee", async (req, res) => {
    console.log("Hello");
    let success = false;
    try {
   
    console.log("ibffbrge")
      const user_email = req.body.email
      console.log("ibffbrge")
      console.log("/ ",user_email," /")
      console.log(user_email)
      console.log(req.body.name)
      let gender;
      let call1=req.body.call1;
      let call2=req.body.call2;
      let call3=req.body.call3;
      if(call1)
      gender="male";
      if(call2)
      gender="female";
      if(call3)
      gender="PreferNotToSay";
      await Mentee.updateOne({ email: req.body.email }, { $set: { name: req.body.name, age: req.body.age, gender: gender, mobile: req.body.mobile, qualification: req.body.qualification, category: req.body.category, about: req.body.about, } }).catch(
        error => {
           console.log(error);
         }
      );
      const mentor = {
        // id: req.user.id,
        name: req.body.name,
        age: req.body.age,
        gender: gender,
        mobile: req.body.mobile,
        email: req.body.email,
        qualification: req.body.qualification,
        category: req.body.category,
        about: req.body.about,
        call1: req.body.call1,
        call2: req.body.call2,
        call3: req.body.call3,
      };
    
      res.status(200).json({ mentor: mentor});
    } catch (error) {
      success = false;
      console.error(error.message);
      res.status(500).send(success, "Some error occurred");
    }
  });

















router.post("/viewprofile", fetchuser ,async (req, res) => {
    console.log("Hello");
    let success = false;
    try {
      const user_email = req.user.email
      console.log("/ ",user_email," /")
      let found = await Mentor.findOne({ email : user_email});
     
            console.log(found)
            console.log(found.gender)
            let call1=false;
            let call2=false;
            let call3=false;
            if(found.gender=="male")
            call1=true;
            if(found.gender=="female")
            call2=true;
            if(!call1 && !call2)
            call3=true;
            const mentor1 = {
            // id: req.user.id,
            name: found.name,
            age: found.age,
            gender: found.gender,
            mobile: found.mobile,
            email: found.email,
            qualification: found.qualification,
            category: found.category,
            about: found.about,
            call1: call1,
            call2: call2,
            call3: call3,
          };
        
          console.log(mentor1);
          res.status(200).json({ mentor: mentor1});
    } catch (error) {
      success = false;
      console.error(error.message);
      res.status(500).send(success, "Some error occurred");
    }
  });

router.post("/updateprofile", async (req, res) => {
    console.log("Hello");
    let success = false;
    try {
   
    console.log("ibffbrge")
      const user_email = req.body.email
      console.log("ibffbrge")
      console.log("/ ",user_email," /")
      console.log(user_email)
      console.log(req.body.name)
      let gender;
      let call1=req.body.call1;
      let call2=req.body.call2;
      let call3=req.body.call3;
      if(call1)
      gender="male";
      if(call2)
      gender="female";
      if(call3)
      gender="PreferNotToSay";
      await Mentor.updateOne({ email: req.body.email }, { $set: { name: req.body.name, age: req.body.age, gender: gender, mobile: req.body.mobile, qualification: req.body.qualification, category: req.body.category, about: req.body.about, } }).catch(
        error => {
           console.log(error);
         }
      );
      const mentor = {
        // id: req.user.id,
        name: req.body.name,
        age: req.body.age,
        gender: gender,
        mobile: req.body.mobile,
        email: req.body.email,
        qualification: req.body.qualification,
        category: req.body.category,
        about: req.body.about,
        call1: req.body.call1,
        call2: req.body.call2,
        call3: req.body.call3,
      };
    
      res.status(200).json({ mentor: mentor});
    } catch (error) {
      success = false;
      console.error(error.message);
      res.status(500).send(success, "Some error occurred");
    }
  });
module.exports = router;