const mongoose = require('mongoose');





const Schema = mongoose.Schema({
    name: {
        type: String,
        required: "name is required",
        maxlength: 50,

    },
    email: {
        type: String,
        required: "email is required",
        unique: true,
        validate: {
            validator: function (val) {
                let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return pattern.test(val);
            },
            message: "Invalid email"
        },
        maxlength: 120,

    },
    password: {
        type: String,
        required: "password is required",
        validate: {
            validator: function (value) {
                let pattern = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
                return pattern.test(value);
            },
            message: "Invalid password"
        },
        maxlength: 120,

    },
    NationalId: {
        type: String,
        required: "NationalId is required",
        maxlength: 14,

    },
    BirthDay: {
        type: Date,
        required: "BirthDay is required"

    },
    fullName: {
        type: String,
        required: "fullName is required"
        ,maxlength: 150,

    },
    Gender: {
        type: String,
        required: "Gender is required"
        ,maxlength: 6,minlength: 4
    },
    Phone: {
        type: String,
        required: "Phone is required"
        ,maxlength: 11,minlength: 11,
    },
    Address: {
        type: String,
        required: "Address is required"
        ,maxlength: 100,
    },
    City: {
        type: String,
        required: "City is required"
        ,maxlength: 30,

    },
    Age: {
        type: Number,
        min:15
        },
    points: {
        type: Number,
        default: 0
    }
})