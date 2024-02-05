const mongoose = require("mongoose");

const localBBschema = mongoose.Schema({
  bankId: { type: Number, required: true, unique: true, auto: true },
  bankName: { type: String, required: true, trim: true },
  city: { type: String, required: true },
  street: { type: String, required: true },
  workingHours: { type: String, default:"24 hour" },
  holiday: { type: String,default:"all week"},
  bloodTypesNeeded: {type: [String],enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],required: true},
});

let localBB=mongoose.model("localBB", localBBschema);

module.exports ={localBB} 
