const XLSX = require("xlsx");
const fs = require("fs");

// Load the Excel file
const workbook = XLSX.readFile("./bmi-girls-z-who-2007-exp.xlsx");

// Assuming the first sheet is the one you want to convert
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert the worksheet to an array of objects
const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

// Save the JSON data to a file
const jsonFile = "output.json";
fs.writeFileSync(jsonFile, JSON.stringify(jsonData, null, 4));

console.log(
  `XLSX file 'your_file.xlsx' has been converted and saved as '${jsonFile}'.`
);
