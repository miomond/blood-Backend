const mongoose = require('mongoose');



const Schema = mongoose.Schema({
    name: {
        type: String,
        required: "name is required",
        
    },
    email: {
        type: String,
        required: "email is required",
        unique: true,
        validate:{
            validator: function(val) {
                let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return pattern.test(val);
            },
            message: "Invalid email"
    }},password: {
        type: String,
        required: "password is required"
    },
})