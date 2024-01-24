const fs = require("fs");
const XLSX = require("xlsx");

// Load the XLSX file
const workbook = XLSX.readFile("hcfa-girls-0-5-zscores.xlsx");

// Choose the sheet you want to convert
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert worksheet to JSON
const jsonData = XLSX.utils.sheet_to_json(worksheet);

const organizedData = {};

// Loop through the JSON data
for (let dataObj of jsonData) {
  organizedData[dataObj.Month] = {
    Month: dataObj.Month,
    [Number(dataObj["SD3neg"]).toFixed(2)]: "-3 SD",
    [Number(dataObj["SD2neg"]).toFixed(2)]: "-2 SD",
    [Number(dataObj["SD1neg"]).toFixed(2)]: "-1 SD",
    [Number(dataObj.SD0).toFixed(2)]: "Median",
    [Number(dataObj["SD1"]).toFixed(2)]: "1 SD",
    [Number(dataObj["SD2"]).toFixed(2)]: "2 SD",
    [Number(dataObj["SD3"]).toFixed(2)]: "3 SD",
    [Number(dataObj["SD3neg"]).toFixed(2) +
    "-" +
    Number(dataObj["SD2neg"]).toFixed(2)]: " Between -3 SD and -2 SD",
    [Number(dataObj["SD2neg"]).toFixed(2) +
    "-" +
    Number(dataObj["SD1neg"]).toFixed(2)]: " Between -2 SD and -1 SD",
    [Number(dataObj["SD1neg"]).toFixed(2) +
    "-" +
    Number(dataObj.SD0).toFixed(2)]: " Between -1 SD and Median",
    [Number(dataObj.SD0).toFixed(2) + "-" + Number(dataObj["SD1"]).toFixed(2)]:
      " Between Median and 1 SD",
    [Number(dataObj["SD1"]).toFixed(2) +
    "-" +
    Number(dataObj["SD2"]).toFixed(2)]: " Between 1 SD and 2 SD",
    [Number(dataObj["SD2"]).toFixed(2) +
    "-" +
    Number(dataObj["SD3"]).toFixed(2)]: " Between 2 SD and 3 SD",
    range_value: [
      Number(dataObj["SD3neg"]).toFixed(2),
      Number(dataObj["SD2neg"]).toFixed(2),
      Number(dataObj["SD1neg"]).toFixed(2),
      Number(dataObj.SD0).toFixed(2),
      Number(dataObj["SD1"]).toFixed(2),
      Number(dataObj["SD2"]).toFixed(2),
      Number(dataObj["SD3"]).toFixed(2),
    ],
  };
}

console.log(organizedData);

// Write JSON data to a file
fs.writeFileSync(
  "muack-girls.json",
  JSON.stringify(organizedData, null, 2),
  "utf-8"
);

console.log("Conversion complete.");
