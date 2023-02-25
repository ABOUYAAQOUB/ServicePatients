const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Admin = require("../model/Admin");

router.post("/", async(req,res)=>{

    const searshAdmin = await Admin.findOne({email:req.body.email});
    if(searshAdmin && searshAdmin.password == req.body.password){
        res.send( searshAdmin );
    }else{
        return res.json("Admin not exist");
    }
    
    
})

module.exports = router;