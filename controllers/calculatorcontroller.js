const { calculateInvestment } = require('../models/calculatormodel');

const calculateInvestmentController = async (req, res) => {
  try {
    const { annualInstalment, annualInterestRate, totalYears } = req.body;

    if (!annualInstalment || !annualInterestRate || !totalYears) {
      return res.status(400).json({ message: 'Please provide all input fields.' });
    }

    const calculationResult = calculateInvestment(annualInstalment, annualInterestRate, totalYears);

    res.json(calculationResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  calculateInvestmentController,
};
