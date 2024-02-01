let mongoose = require("mongoose");

let bloodDonationSchema = mongoose.Schema({
  //reciverID: { type: String, required: true },

  //donorID: [{ type: String, required: true }],

  bloodType: { type: String },

  donationStatus: { type: String, required: true },

  donattionDate: { type: Date },
  expireDate: { type: Date },
});

let bloodDonationDetails = mongoose.model(
  "bloodDonationDetails",
  bloodDonationSchema
);

module.exports = { bloodDonationDetails };
