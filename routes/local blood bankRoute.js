// importing packages and modules
const express = require("express");
const localBBroute = express.Router();
const asynchandler = require("express-async-handler");

// importing controller modules
let { show, find,add ,up,del} = require("../controllers/local blood bankController");


/**
 * @descrip show
 *  @method  post
 * */

localBBroute.post("/show", asynchandler(async (req, res) => {
  res.send(await show());
}));


/**
 * @descrip find
 *  @method  post
 * */

localBBroute.post("/:bankId", asynchandler(async (req, res) => {
  res.send(await find(req.params.bankId));
}));





/**
 * @descrip add
 *  @method  post
 * */

localBBroute.post("/add", asynchandler(async (req, res) => {
  let data = await await add(req.body);
  res.send(data);
}));

/**
 * @descrip update
 *  @method  post
 * */

localBBroute.post("/up/:bankId", asynchandler(async (req, res) => {
  let data = await await up(req.params.bankId,req.body);
  res.send(data);
}));


/**
 * @descrip delete
 *  @method  post
 * */

localBBroute.post("/del/:bankId", asynchandler(async (req, res) => {
  let data = await await del(req.params.bankId);
  res.send(data);
}));









module.exports = { localBBroute };
