const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const fiscalYearStart = new Date(currentYear, 6, 1).getDate();
console.log(fiscalYearStart);
