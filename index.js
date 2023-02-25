const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express(); 
const patients = require("./routes/patients");
const admins = require("./routes/admins");
const auth = require("./routes/auth");

mongoose.connect("mongodb://localhost:27017/dbPatient",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("Connected to Data base . ..."))
.catch((error)=>console.log(console.error('Message Error '+error)));

app.use(cors());
app.use(express.json());
app.use("/api/patients",patients);
app.use("/api/admins",admins);
app.use("/api/auth",auth);



app.listen(3000);
console.log("Server is runing");