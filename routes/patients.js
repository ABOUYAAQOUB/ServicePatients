const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Patient = require("../model/Patient");


router.get("/", async (req,res) =>{
    const patients = await Patient.find();
    res.send(patients);
});

router.get("/:id",async(req,res)=>{
    const patient = await Patient.find({ _id: req.params.id}).exec();
    if(!patient){
        return res.status(404).send("this patinet is not found !");
    }
    res.send(patient);
});

router.post("/", async(req,res)=>{

    
    const patient = new Patient({

    _id:req.body._id,   
    name:req.body.name,
    age: req.body.age,
    sex: req.body.sex,
    cp: req.body.cp,
    trestbps: req.body.trestbps,
    chol: req.body.chol,
    fbs: req.body.fbs,
    restecg: req.body.restecg,
    thalach: req.body.thalach,
    exang: req.body.exang,
    oldpeak: req.body.oldpeak,
    slope: req.body.slope,
    ca: req.body.ca,
    thal: req.body.thal,
    num: req.body.num

    });
    await patient.save();
    res.send(patient); 
})
 
router.put("/:id", async(req,res)=>{
    const patient = await Patient.findByIdAndUpdate({ _id: req.params.id},{
        name :req.body.name,
        age:req.body.age,
        sex:req.body.sex,
        cp : req.body.cp,
        trestbps: req.body.trestbps,
        chol:req.body.chol,
        fbs:req.body.fbs,
        restecg:req.body.restecg,
        thalach:req.body.thalach,
        exang:req.body.exang,
        oldpeak:req.body.oldpeak,
        slope:req.body.slope,
        ca:req.body.ca,
        thal:req.body.thal,
        num:req.body.num,
    },{new:true});
    if(!patient){
        
        return res.status(404).send("invalid Id");

    }
    res.send(patient);
    
});

router.delete("/:id",async(req,res)=>{
    const patient =  await Patient.findByIdAndRemove(req.params.id );
    if(!patient){
        return res.status(404).send("this patinet is not found !");
    }
    res.send(patient);
});

module.exports = router;