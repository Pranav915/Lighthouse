const express = require("express");
const router = express.Router();
const mentors = require("../models/Mentor")

router.post("/search", async (req, res) => {
    try{
        const query = req.body.query;
        let found = await mentors.find({ qualification : query});
        res.status(200).json({ finds: found});
    }
    catch(err){
        console.log(err)
        res.status(400).json({error: "Some Error"})
    }
    
  });

module.exports = router;