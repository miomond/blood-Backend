// importing packages and modules
const express = require("express");
const HospitalRoute = express.Router();
const asynchandler = require("express-async-handler");

// importing controller modules
let {find,showAll,add,up,del}=require("../controllers/hospitalController")


/**
 * @descrip show
 *  @method  post
 * */ 

HospitalRoute.post("/show",asynchandler(async(req,res)=>{
    res.send(await showAll() )
}))


/**
 * @descrip find
 *  @method  post
 * */ 

HospitalRoute.post("/:id",asynchandler(async(req,res)=>{
    res.send(await find(req.params.id) )
}))


/**
 * @descrip add
 *  @method  post
 * */

HospitalRoute.post("/add",asynchandler(async(req,res)=>{
    let data= await add(req.body)
    res.send(data) 
}))


/**
 * @descrip update
 *  @method  post
 * */

HospitalRoute.post("/up/:id",asynchandler(async(req,res)=>{
    let data= await up(req.params.id,req.body)
    res.send(data) 
}))

/**
 * @descrip delete
 *  @method  post
 * */

HospitalRoute.post("/del/:id",asynchandler(async(req,res)=>{
    let data= await del(req.params.id)
    res.send(data) 
}))





module.exports={ HospitalRoute}