const express = require("express");
const authController = require('../controllers/auth')

const router = express.Router();

router.post("/addData", authController.addData);


module.exports = router;
