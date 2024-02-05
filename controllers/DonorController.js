//////////////Donor Controller/////////////////
const Donor = require('../models/donor');

/////////  Function to get all donors  ////////////
async function getAllDonors(req, res) {
  try {
    const donors = await Donor.find();
    res.send(donors);
  } catch (error) {
   console.log(error);
  }
}

///////////  Function to get a single donor by ID  //////////
async function getDonorById(req, res) {
  try {
    const { id } = req.params;
    const donor = await Donor.findById(id);
    if (!donor) {
     console.log('Donor not found');
    }
    res.send(donor);
  } catch (error) {
     console.log(error);
  }
}

////////////  Function to create a new donor  ///////////////
async function createDonor(req, res) {
  try {
    const { name, bloodType, location, contact } = req.body;
    const newDonor = new Donor({ name, bloodType, location, contact });
    const savedDonor = await newDonor.save();
    res.send(savedDonor);
  } catch (error) {
    console.log(error);
  }
}

///////////// Function to update a donor ////////////
async function updateDonor(req, res) {
  try {
    const { id } = req.params;
    const { name, bloodType, location, contact } = req.body;
    const updatedDonor = await Donor.findByIdAndUpdate(
      id,
      { name, bloodType, location, contact }
    );
    if (!updatedDonor) {
       console.log('donor not found');
    }
    res.send(updatedDonor);
  } catch (error) {
    console.log(error);
  }
}

/////////////// Function to delete a donor  ///////////////
async function deleteDonor(req, res) {
  try {
    const { id } = req.params;
    const deletedDonor = await Donor.findByIdAndDelete(id);
    if (!deletedDonor) {
      console.log('donor not found');
    }
    console.log('donor deleted successfully');
  } catch (error) {
     console.log(error);
  }
}

module.exports = {
  getAllDonors,
  getDonorById,
  createDonor,
  updateDonor,
  deleteDonor
};