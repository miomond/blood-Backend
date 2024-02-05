const { localBB } = require("../models/local blood bank");

async function showAll() {
  let data = await localBB.find();
  return data;
}

async function add(obj) {
  let {
    bankId,
    bankName,
    city,
    street,
    workingHours,
    holiday,
    bloodTypesNeeded,
  } = obj;

  let data = await localBB.create({
    bankId: bankId,
    bankName: bankName,
    city: city,
    street: street,
    workingHours: workingHours,
    holiday: holiday,
    bloodTypesNeeded: bloodTypesNeeded,
  });
  console.log("data has been added");
  return localBB.find();
}

module.exports = { showAll, add };
