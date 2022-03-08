const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const testController  = require("../controllers/testController");

// first controller test
router.get("/", (req, res, next) => {

    res.status(200).json({
        message: 'Route sample'
    })
});

// handle searchs
router.post("/search", testController.search);


module.exports = router;