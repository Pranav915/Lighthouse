const express = require("express");
const router = express.Router();
const mentors = require("../models/Mentor")

router.post("/search", async (req, res) => {
    try{
        const query = req.body.query;
        let found = await mentors.find({ qualification : query});
        const f = found.map((user) => {
            return({
                name: user.name,
                qualification: user.qualification
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