let { Hospital } = require("../models/hospital");

async function showAll() {
  let data = await Hospital.find();
  return data;
}

async function add(id, name, city, street) {
  let data = await Hospital.create({
    id: id,
    name: name,
    city: city,
    street: street,
  });
  console.log("data has been created");
  return Hospital.find();
}

async function up(oldValue, newValue) {
  let filter = { name: oldValue };
  let update = { name: newValue };
  await Hospital.findOneAndUpdate(filter, update);
  return Hospital.find();
}


async function del(oldValue) {
  let filter = Hospital.find({ name: oldValue })
  await Hospital.findOneAndDelete(filter);
  return Hospital.find();
}




module.exports = { showAll, add, up,del };
