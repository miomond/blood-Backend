// importing packages and modules
const express = require("express");
const cors = require("cors");
// importing the connection and routes
// const productRoute = require("./src/routes/productRoute");
const userRoute = require("./src/routes/userRoute");
// Connecting to the database
const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/blood"

const connect = async function() {
    await mongoose.connect(url);
    console.log("You are connected to your database");
}


// Setting the port
const port = process.env.port || 5000;
const app = express();

// connecting to database
connect();

//to define the static files folder
app.use(express.static("src/images")); 

// app.use(express.urlencoded());
app.use(express.json());
app.use(cors("*"));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.set("Access-Control-Expose-Headers", "*");
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization, authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

    next();
});

// Routes middleware
app.use("/user", userRoute);
// app.use("/product", productRoute);


app.listen(port,()=>{
    console.log("localhost : "+port)
});
