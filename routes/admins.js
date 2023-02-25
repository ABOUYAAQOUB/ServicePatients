const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Admin = require("../model/Admin");


router.post("/", async(req,res)=>{

    const searshAdmin = await Admin.findOne({email:req.body.email});
    if(searshAdmin){
        return res.status(404).send("Email Admin exist ");
    }
    const admin = new Admin({

    _id:req.body._id,   
    name:req.body.name,
    email: req.body.email,
    password: req.body.password

    }); 
    await admin.save();
    res.send(admin); 
})

module.exports = router;
 