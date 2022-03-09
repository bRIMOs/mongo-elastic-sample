const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const testController  = require("../controllers/testController");

// first controller test
router.get("/getall",testController.getall);

// handle searchs
router.get("/search", testController.search);


module.exports = router;