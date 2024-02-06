const mongoose = require("mongoose");

const receiverSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true, auto: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  nationalId: { type: String, required: true },
  birthday: { type: Date },
  fullName: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  gender: { type: String, enum: ["Male", "Female"] },
  points: { type: Number },
  age: { type: Number },
  isReceiver: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  caseTitle: { type: String },
  caseDescription: { type: String },
  address: { type: String },
  bloodTypeNeeded: {type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],},
  wantedHospital: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
  quantity: { type: [String] },
  receivingDates: { type: [Date] },
});

module.exports = mongoose.model("Receiver", receiverSchema);
