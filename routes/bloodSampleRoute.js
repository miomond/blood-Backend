// importing packages and modules
const express = require("express");
const bloodSampleRoute = express.Router();

// importing controller modules
const {
  addBloodSample,
  showBloodSamples,
  deleteBloodSample,
  updateBloodSample,
} = require("../controllers/bloodSampleController");

/**
 *@descri show all data
 *@method   get
 */

bloodSampleRoute.get("/", async (req, res) => {
  res.send(await showBloodSamples());
});

/**
 *@descri add data
 *@method  post
 */

bloodSampleRoute.post("/add", async (req, res) => {
  let data = await addBloodSample(req.body);
  res.send(data);
});

/**
 *descri:add delete
 *method : post
 */

bloodSampleRoute.post("/del", async (req, res) => {
  let data = await deleteBloodSample(req.body.id);
  res.send(data);
});

/**
 *descri:up data
 *method : post
 */

bloodSampleRoute.post("/up", async (req, res) => {
  let data = await updateBloodSample(req.body.oldValue, req.body.newValue);
  res.send(data);
});

module.exports = { bloodSampleRoute };
