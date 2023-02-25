const mongoose = require("mongoose");

const Admin = mongoose.model('admins' , new mongoose.Schema({

    _id:Number,   
    name:String,
    email:{type:String,unique:true},
    password:{type:String,minlength:5,maxlength:1024}    

}));

module.exports = Admin;