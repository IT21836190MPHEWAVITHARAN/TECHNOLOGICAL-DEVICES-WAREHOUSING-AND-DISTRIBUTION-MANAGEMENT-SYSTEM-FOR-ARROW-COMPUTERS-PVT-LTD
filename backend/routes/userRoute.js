const express = require("express");
const router = express.Router();
const {registerUser} = require("../controllers/userController");



// Register the middleware for handling POST requests to /register
router.post("/register", registerUser);

module.exports = router; // Corrected export statement
