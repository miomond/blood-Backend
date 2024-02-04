// importing packages and modules
const express = require("express");
const HospitalRoute = express.Router();

// importing controller modules
let {showAll,add,up,del}=require("../controllers/hospitalController")



HospitalRoute.get("/",async(req,res)=>{
    res.send(await showAll() )
})


HospitalRoute.post("/add",async(req,res)=>{
    let data= add(req.body.id,req.body.name,req.body.city,req.body.street)
    res.send(add()) 
})


HospitalRoute.post("/up",async(req,res)=>{
    let data= await up(req.body.oldValue,req.body.newValue)
    res.send(data) 
})


HospitalRoute.post("/del",async(req,res)=>{
    let data= await del(req.body.name)
    res.send(data) 
})





module.exports={ HospitalRoute}