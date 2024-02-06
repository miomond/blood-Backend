let { Donor } = require("../models/Donor");
const asynchandler = require("express-async-handler");


/****@show */
let showDonor = asynchandler(async () => {
  let data = await Donor.find();
  return data;
});




/*******@add */
let addDonor = asynchandler(async (obj) => {
  let {
      id,
        name,
        bloodType,
         address,
          mobile,
          medicalproblems
        } = obj;
  let data = await Donor.create({
      id,
        name,
        bloodType,
         address,
          mobile,
          medicalproblems
        });
  return "data has been created";
});

/****@find */
let findDonor = asynchandler(async (id) => {
    let data = await Donor.find({id});
    if (data.length >0) {
      return data;
    } else {
      return "no data found ";
    }
  });
  


/*******@update */
let updateDonor = asynchandler(async (id, obj) => {
  let {
    name,
    bloodType,
     address,
      mobile,
      medicalproblems
    }= obj;
  let data = await Donor.findOneAndUpdate(
    { id },
    {
        name,
        bloodType,
         address,
          mobile,
          medicalproblems
        }
  );
  if (data) {
    return "data has been updated";
  } else {
    return "no match data";
  }
});

/*******@delete */
let deleteDonor = asynchandler(async (id) => {
  /*******question for id*/
  let data = await Donor.findOneAndDelete({ id: id });
  if (data) {
    return "data has been deleted";
  } else {
    return "no match data";
  }
});

module.exports = {
  addDonor,
  findDonor,
  showDonor,
  deleteDonor,
  updateDonor,
};





