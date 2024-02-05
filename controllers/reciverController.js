///////////////// Receiver Controller /////////////////
const Receiver = require('../models/receiver');

/////// Function to get all receivers /////////////
async function getAllReceivers() {
try {
const receivers = await Receiver.find();
return receivers;
} catch (error) {
console.log(error);
}
}

/////// Function to get a single receiver by ID /////////
async function getReceiverById(id) {
try {
const receiver = await Receiver.findById(id);
if (!receiver) {
console.log('Receiver not found');
}
return receiver;
} catch (error) {
console.log(error);
}
}

//////// Function to create a new receiver ///////////////
async function createReceiver(receiverData) {
try {
const { name, bloodType, location, contact } = receiverData;
const newReceiver = new Receiver({ name, bloodType, location, contact });
const savedReceiver = await newReceiver.save();
return savedReceiver;
} catch (error) {
console.log(error);
}
}

//////////// Function to update a receiver ///////////////
async function updateReceiver(id, receiverData) {
try {
const { name, bloodType, location, contact } = receiverData;
const updatedReceiver = await Receiver.findByIdAndUpdate(
id,
{ name, bloodType, location, contact }
);
if (!updatedReceiver) {
console.log('Receiver not found');
}
return updatedReceiver;
} catch (error) {
console.log(error);
}
}

///////// Function to delete a receiver ////////////////
async function deleteReceiver(id) {
try {
const deletedReceiver = await Receiver.findByIdAndDelete(id);
if (!deletedReceiver) {
console.log('Receiver not found');
}
console.log('Receiver deleted successfully');
} catch (error) {
console.log(error);
}
}

module.exports = {
getAllReceivers,
getReceiverById,
createReceiver,
updateReceiver,
deleteReceiver
};