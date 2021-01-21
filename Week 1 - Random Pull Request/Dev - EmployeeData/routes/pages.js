const express = require("express");
const authController = require('../controllers/auth');

const router = express.Router();

router.get("/", (req, res) =>{
  res.render("index");
});



router.get("/addData", (req, res) =>{
  res.render("addData");
});

router.get("/viewData", authController.viewData);

router.get("/details", authController.details);




module.exports = router;

//authController.viewData
