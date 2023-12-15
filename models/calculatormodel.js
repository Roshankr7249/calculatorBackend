const calculateInvestment = (
  annualInstalment,
  annualInterestRate,
  totalYears
) => {
  const P = parseFloat(annualInstalment);
  const i = parseFloat(annualInterestRate) / 100;
  const n = parseFloat(totalYears);

  const F = P * ((Math.pow(1 + i, n) - 1) / i);
  const totalInvestmentAmount = P * n;
  const totalInterestGained = F - totalInvestmentAmount;

  return {
    totalInvestmentAmount,
    totalInterestGained,
    totalMaturityValue: F.toFixed(2),
  };
};

module.exports = {
  calculateInvestment,
};
