// importing packages and modules
const { localBB } = require("../models/local blood bank");
const asynchandler = require("express-async-handler");

/************@show func*/
let show= asynchandler(async ()=> {
  let data = await localBB.find();
  return data;
})

/************@find func*/
let find = asynchandler(async (bankId) => {
  let data = await localBB.find({ bankId });
  if (data.length > 0) {
    return data;
  } else {
    return "no data found";
  }
});

/************@add func*/

let add=asynchandler(async (obj)=> {
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
    bankId,
    bankName,
    city,
    street,
    workingHours,
    holiday,
    bloodTypesNeeded,
  });
  return "data has been added";
}
)

/************@update func*/

let up=asynchandler(async (bankId, obj)=> {
  let {
    bankName,
    city,
    street,
    workingHours,
    holiday,
    bloodTypesNeeded,
  } = obj;

  let data = await localBB.findOneAndUpdate(
    { bankId },
    {
      bankName,
      city,
      street,
      workingHours,
      holiday,
      bloodTypesNeeded,
    }
  );
  if (data) {
    return "data has been updated";
  } else {
    return "no data found to update";
  }
})

/************@delete func*/

let del=asynchandler(async (bankId)=> {
  
  let data = await localBB.findOneAndDelete(
    { bankId })
    
  if (data) {
    return "data has been deleted";
  } else {
    return "no data found to delete";
  }
})

module.exports = { show, find, add, up ,del};
