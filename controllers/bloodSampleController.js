let { BloodSample } = require("../models/bloodSample");
const asynchandler = require("express-async-handler");

/****@show */
let showBloodSamples = asynchandler(async () => {
  let data = await BloodSample.find();
  return data;
});


/****@find */
let findBloodSamples = asynchandler(async (id) => {
  let data = await BloodSample.find({id});
  if (data.length >0) {
    return data;
  } else {
    return "no data found";
  }
});




/*******@add */
let addBloodSample = asynchandler(async (obj) => {
  let {
    id,
    receiverId,
    donorId,
    bloodType,
    donationStatus,
    donationDate,
    expireDate,
  } = obj;
  let data = await BloodSample.create({
    id,
    receiverId,
    donorId,
    bloodType,
    donationStatus,
    donationDate,
    expireDate,
  });
  return "data has been created";
});

/*******@update */
let updateBloodSample = asynchandler(async (id, obj) => {
  let {
    receiverId,
    donorId,
    bloodType,
    donationStatus,
    donationDate,
    expireDate,
  } = obj;
  let data = await BloodSample.findOneAndUpdate(
    { id },
    {
      receiverId,
      donorId,
      bloodType,
      donationStatus,
      donationDate,
      expireDate,
    }
  );
  if (data) {
    return "data has been updated";
  } else {
    return "no match data";
  }
});

/*******@delete */
let deleteBloodSample = asynchandler(async (id) => {
  /*******question for id*/
  let data = await BloodSample.findOneAndDelete({ id: id });
  if (data) {
    return "data has been deleted";
  } else {
    return "no match data";
  }
});

module.exports = {
  addBloodSample,
  findBloodSamples,
  showBloodSamples,
  deleteBloodSample,
  updateBloodSample,
};
