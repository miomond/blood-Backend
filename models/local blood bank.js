let mongoose = require("mongoose");

let localBloodBankSchema = mongoose.Schema({
  bankName: { type: String, required: true },

  address: [{ type: String, required: true }],

  timeOfWork: { type: String },

  city: { type: String, required: true },

  bloodTypeNeeded: [String],
});

let localBloodBank = mongoose.model("localBloodBank", localBloodBank);

module.exports = { localBloodBank };
