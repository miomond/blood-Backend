const mongoose = require("mongoose");

const hospitalSchema = mongoose.Schema({
  id: { type: Number, required: true, unique: true, auto: true },
  name: { type: String, required: true },
  city: { type: String },
  street: { type: String, required: true },
});

let Hospital = mongoose.model("Hospital", hospitalSchema);

module.exports = { Hospital };
