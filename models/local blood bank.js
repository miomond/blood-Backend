const mongoose = require("mongoose");

const localBloodBankSchema = new mongoose.Schema({
  bankId: {
    type: String,
    required: true,
    unique: true,
    auto: true,
  },
  bankName: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: [
      {
        city: {
          type: String,
          enum: [],
        },
        street: {
          type: String,
          required: true,
        },
      },
    ],
  },
  hoursOfWork: {
    type: [
      {
        day: {
          type: String,
          enum: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
        },
        hours: {
          type: String,
          required: true,
        },
      },
    ],
  },
  bloodTypesNeeded: {
    type: [String],
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
});

module.exports = mongoose.model("LocalBloodBank", localBloodBankSchema);
