const userController = require("../controllers/userController");
const userModel = require("../models/user");

const express = require("express");
const route = express.Router();
const jwt = require("jsonwebtoken");
const fs = require("fs");
const bcrypt = require("bcryptjs");
let secret = fs.readFileSync("secret.key");
const { verifyToken } = require("../shared/auth");




