// importing packages and modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();


// importing  Routes
const {bloodSampleRoute} =require("./routes/bloodSampleRoute")
const { HospitalRoute}=require("./routes/hospitalRoute")
const {localBBroute}=require("./routes/local blood bankRoute")
const { DonorRoute }=require("./routes/DonorRoute")


// Connecting to the database
mongoose
  .connect("mongodb://127.0.0.1:27017/BloodBank")
  .then(() => {console.log("connected successfully to DB");})
  .catch((err) => {
    console.log("failed to connect to DB" +err);
  });

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static("public"));
  app.use(cors("*"));
  
  // Routes middleware
  app.use("/bloodSample",bloodSampleRoute)
  app.use("/Hospital",HospitalRoute)
  app.use("/localBB",localBBroute)
  app.use("/Donor",DonorRoute)
  



  // Setting the port
  const port = 5000; 
   app.listen(port, () => {
    console.log("connected successfullyto  localhost : " + port);
  });
