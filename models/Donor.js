let mongoose = require("mongoose");

let Donorschema = mongoose.Schema({
    id:{type:String,required:true,unique: true,minLength:14,maxLength:14},
     name:{type:String,required:true, minlength:5},
     bloodType: {type: String , enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], require:true},
      address:{type:String,required:true},
       mobile:{type:Number,required:true,unique: true,minLength:10,maxLength:10},
       medicalproblems:{type:String,default:"i do not have any dieses"}
     });


     let Donor=mongoose.model("Donor",Donorschema)


     module.exports={Donor}






     