// importing packages and modules
const express = require("express");
const asynchandler = require("express-async-handler");
const DonorRoute = express.Router();

// importing controller modules
const {
  addDonor,
  findDonor,
  showDonor,
  deleteDonor,
  updateDonor,
} = require("../controllers/DonorController");

/**
 *@descri show all data
 *@method   post
 */

DonorRoute.post(
  "/show",
  asynchandler(async (req, res) => {
    res.send(await showDonor());
  })
);


/**
 *@descri add data
 *@method  post
 */

DonorRoute.post(
  "/add",
  asynchandler(async (req, res) => {
    let data = await addDonor(req.body);
    res.send(data);
  })
);

/**
 *@descri find by id
 *@method   post
 */

 DonorRoute.post(
    "/:id",
    asynchandler(async (req, res) => {
      res.send(await findDonor(req.params.id));
    })
  );
  


/**
 *@descri delete
 *@method  post
 */

DonorRoute.post(
  "/del/:id",
  asynchandler(async (req, res) => {
    let data = await deleteDonor(req.params.id);
    res.send(data);
  })
);

/**
 *descri:updata
 *method : post
 */

DonorRoute.post(
  "/up/:id",
  asynchandler(async (req, res) => {
    let data = await updateDonor(req.params.id, req.body);
    res.send(data);
  })
);

module.exports = { DonorRoute };
