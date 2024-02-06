const mongoose = require("mongoose");

const bloodSampleSchema = mongoose.Schema({
  
  id: { type: Number, required: true, unique: true, auto: true },
//ask for reference  
  receiverId: { type: mongoose.Schema.Types.ObjectId   }, //,ref: "Receiver"
  
  donorId: { type: mongoose.Schema.Types.ObjectId, ref: "receiverId" },
  
  bloodType: {type: String , enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], require:true},
  
  donationStatus: { type: String ,default:"fine"},
  
  donationDate: { type: Date , default:Date.now},
  
  expireDate: { type: Date , default:Date.now },

});

 let BloodSample =mongoose.model("BloodSample", bloodSampleSchema);

 module.exports ={BloodSample}