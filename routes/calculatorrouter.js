const express = require("express");
const router = express.Router();
const { calculateInvestmentController } = require("../controllers/calculatorcontroller");



router.post("/calculateInterest", calculateInvestmentController);



module.exports = router;
