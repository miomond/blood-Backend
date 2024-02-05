

/////////////// Receiver Controller ///////////////
const Receiver = require('../models/reciver');

/////// Function to get all receivers /////////////
async function getAllReceivers(req, res) {
  try {
    const receivers = await Receiver.find();
    res.send(receivers);
  } catch (error) {
    console.log(error);
  }
}

/////// Function to get a single receiver by ID /////////
async function getReceiverById(req, res) {
  try {
    const { id } = req.params;
    const receiver = await Receiver.findById(id);
    if (!receiver) {
      console.log('reciever not found');
    }
    res.send(receiver);
  } catch (error) {
    console.log(error);
  }
}

//////// Function to create a new receiver ///////////////
async function createReceiver(req, res) {
  try {
    const { name, bloodType, location, contact } = req.body;
    const newReceiver = new Receiver({ name, bloodType, location, contact });
    const savedReceiver = await newReceiver.save();
    res.send(savedReceiver);
  } catch (error) {
    console.log(error);
  }
}

//////////// Function to update a receiver ///////////////
async function updateReceiver(req, res) {
  try {
    const { id } = req.params;
    const { name, bloodType, location, contact } = req.body;
    const updatedReceiver = await Receiver.findByIdAndUpdate(
      id,
      { name, bloodType, location, contact }
    );
    if (!updatedReceiver) {
      console.log('Receiver not found');
    }
    res.send(updatedReceiver);
  } catch (error) {
    console.log(error);
  }
}

///////// Function to delete a receiver////////////////
async function deleteReceiver(req, res) {
  try {
    const {id } = req.params;
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