const asynchandler = require("express-async-handler");
let { Hospital } = require("../models/hospital");

/************@find func*/

let find = asynchandler(async (id) => {
  let data = await Hospital.find({ id });
  if (data.length >0) {
    return data;
  } else {
    return "no data found";
  }
});

/************@show func*/

let showAll = asynchandler(async () => {
  let data = await Hospital.find();
  return data;
});

/************@add func*/

let add = asynchandler(async (obj) => {
  let { id, name, city, street } = obj;
  let data = await Hospital.create({
    id,
    name,
    city,
    street,
  });
  return "data has been created";
});

/************@update func*/

let up = asynchandler(async (id, obj) => {
  let { name, city, street } = obj;
  await Hospital.findOneAndUpdate({ id }, { name, city, street });
  return "data has been updated";
});

/************@delete func*/

let del = asynchandler(async (id) => {
  let data = await Hospital.findOneAndDelete({ id });
  if (data) {
    return "data has been deleted";
  } else {
    return "no match data";
  }
});

module.exports = { find, showAll, add, up, del };
