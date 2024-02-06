 ////////////// Donor Controller ///////////////
const Donor = require('../models/Donor');

///////// Function to get all donors ////////////
async function getAllDonors() {
try {
const donors = await Donor.find();
return donors;
} catch (error) {
console.log(error);
}
}

/////////// Function to get a single donor by ID //////////
async function getDonorById(id) {
try {
const donor = await Donor.findById(id);
if (!donor) {
console.log('Donor not found');
}
return donor;
} catch (error) {
console.log(error);
}
}

///////////// Function to create a new donor ///////////////
async function createDonor(donorData) {
try {
const { name, bloodType, location, contact } = donorData;
const newDonor = new Donor({ name, bloodType, location, contact });
const savedDonor = await newDonor.save();
return savedDonor;
} catch (error) {
console.log(error);
}
}

////////////// Function to update a donor //////////////
async function updateDonor(id, donorData) {
try {
const { name, bloodType, location, contact } = donorData;
const updatedDonor = await Donor.findByIdAndUpdate(
id,
{ name, bloodType, location, contact }
);
if (!updatedDonor) {
console.log('Donor not found');
}
return updatedDonor;
} catch (error) {
console.log(error);
}
}

/////////////// Function to delete a donor ///////////////
async function deleteDonor(id) {
try {
const deletedDonor = await Donor.findByIdAndDelete(id);
if (!deletedDonor) {
console.log('Donor not found');
}
console.log('Donor deleted successfully');
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