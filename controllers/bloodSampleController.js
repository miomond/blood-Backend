let { BloodSample } = require("../models/bloodSample");

async function showBloodSamples() {
  try {
    let data = await BloodSample.find();
    return data;
  } catch (error) {
    console.log("something error");
    return error;
  }
}

async function addBloodSample(obj) {
  let {
    id,receiverId,donorId,bloodType,
    donationStatus,donationDate,expireDate,} = obj;
  try {
    let data = await BloodSample.create({
      id: id,
      receiverId: receiverId,
      donorId: donorId,
      bloodType: bloodType,
      donationStatus: donationStatus,
      donationDate: donationDate,
      expireDate: expireDate,
    });
    console.log("data has been created");
    return BloodSample.find();
  } catch (error) {
    console.log("something error");
    return error;
  }
}

async function deleteBloodSample(oldValue) {
  let filter = BloodSample.find({ id: oldValue });
  await BloodSample.findOneAndDelete(filter);
  return BloodSample.find();
}

async function updateBloodSample(oldValue, newValue) {
  let filter = { id: oldValue };
  let update = { bloodType: newValue };
  await BloodSample.findOneAndUpdate(filter, update);
  return BloodSample.find();
}

module.exports = {
  addBloodSample,
  showBloodSamples,
  deleteBloodSample,
  updateBloodSample,
};
