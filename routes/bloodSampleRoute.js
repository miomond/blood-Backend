// importing packages and modules
const express = require("express");
const asynchandler = require("express-async-handler");
const bloodSampleRoute = express.Router();

// importing controller modules
const {
  addBloodSample,
  findBloodSamples,
  showBloodSamples,
  deleteBloodSample,
  updateBloodSample,
} = require("../controllers/bloodSampleController");

/**
 *@descri show all data
 *@method   post
 */

bloodSampleRoute.post("/show",asynchandler(async (req, res) => {
    res.send(await showBloodSamples());
  })
);

/**
 *@descri find by id
 *@method   post
 */

bloodSampleRoute.post("/:id",asynchandler(async (req, res) => {
    res.send(await findBloodSamples(req.params.id));
  })
);





/**
 *@descri add data
 *@method  post
 */

bloodSampleRoute.post("/add", asynchandler(async (req, res) => {
  let data = await addBloodSample(req.body);
  res.send(data);
}));

/**
 *@descri delete
 *@method  post
 */

bloodSampleRoute.post("/del/:id", asynchandler(async (req, res) => {
  let data = await deleteBloodSample(req.params.id);
  res.send(data);
}));

/**
 *descri:up data
 *method : post
 */

bloodSampleRoute.post("/up/:id", asynchandler(async (req, res) => {
  let data = await updateBloodSample(req.params.id,req.body);
  res.send(data);
}));

module.exports = { bloodSampleRoute };
