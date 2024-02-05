// importing packages and modules
const express = require("express");
const localBBroute = express.Router();

// importing controller modules
let { showAll, add } = require("../controllers/local blood bankController");

localBBroute.get("/", async (req, res) => {
  res.send(await showAll());
});

localBBroute.post("/add", async (req, res) => {
  let data = await await add(req.body);
  res.send(data);
});

module.exports = { localBBroute };
