const mongoose = require("mongoose");

const Patient = mongoose.model('patients' , new mongoose.Schema({
    
    _id:Number,   
    name:String,
    age: Number,
    sex: {type:Number,min:0,max:1},
    cp: Number,
    trestbps: Number,
    chol: Number,
    fbs: Number,
    restecg: Number,
    thalach: Number,
    exang: Number,
    oldpeak: Number,
    slope: Number,
    ca: Number,
    thal: Number,
    num: Number

}));

module.exports = Patient;