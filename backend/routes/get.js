const express = require("express");
const router = express.Router();
const mentors = require("../models/Mentor")
const mentees = require("../models/Mentee")
const fetchuser = require("../middleware/fetchuser")

router.post("/getmentors", fetchuser ,  async (req, res) => {
    try{
        const email = req.user.email;
        console.log(email)
        let found = await mentees.findOne({ email : email});
        const l = found.mentors;
        const f = l.map((men) => {
            return({
                name: men.name,
                qualification: men.qualification
            })
        });
        res.status(200).json({ finds: f});
    }
    catch(err){
        console.log(err)
        res.status(400).json({error: "Some Error"})
    }
    
  });

  router.post("/getmentees", fetchuser ,  async (req, res) => {
    try{
        const email = req.user.email;
        console.log(email)
        let found = await mentors.findOne({ email : email});
        const l = found.mentees;
        const f = l.map((men) => {
            return({
                name: men.name,
            })
        });
        res.status(200).json({ finds: f});
    }
    catch(err){
        console.log(err)
        res.status(400).json({error: "Some Error"})
    }
    
  });

module.exports = router;