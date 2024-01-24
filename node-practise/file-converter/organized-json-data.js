const fs = require("fs");

// Load the JSON data
const jsonData = require("./output.json");

// Create an empty object to hold the organized data
const organizedData = {};

console.log(jsonData);
// Loop through the JSON data
for (let dataObj of jsonData) {
  // Get the age and month from the current object

  const obj = {
    Month: dataObj[0],
    [Number(dataObj[4]).toFixed(2)]: "-4 SD",
    [Number(dataObj[5]).toFixed(2)]: "-3 SD",
    [Number(dataObj[6]).toFixed(2)]: "-2 SD",
    [Number(dataObj[7]).toFixed(2)]: "-1 SD",
    [Number(dataObj[8]).toFixed(2)]: "Median",
    [Number(dataObj[9]).toFixed(2)]: "1 SD",
    [Number(dataObj[10]).toFixed(2)]: "2 SD",
    [Number(dataObj[11]).toFixed(2)]: "3 SD",
    [Number(dataObj[12]).toFixed(2)]: "4 SD",
    [Number(dataObj[4]).toFixed(2) + "-" + Number(dataObj[5]).toFixed(2)]:
      " Between -4 SD and -3 SD",
    [Number(dataObj[5]).toFixed(2) + "-" + Number(dataObj[6]).toFixed(2)]:
      " Between -3 SD and -2 SD",
    [Number(dataObj[6]).toFixed(2) + "-" + Number(dataObj[7]).toFixed(2)]:
      " Between -2 SD and -1 SD",
    [Number(dataObj[7]).toFixed(2) + "-" + Number(dataObj[8]).toFixed(2)]:
      " Between -1 SD and Median",
    [Number(dataObj[8]).toFixed(2) + "-" + Number(dataObj[9]).toFixed(2)]:
      " Between Median and 1 SD",
    [Number(dataObj[9]).toFixed(2) + "-" + Number(dataObj[10]).toFixed(2)]:
      " Between 1 SD and 2 SD",
    [Number(dataObj[10]).toFixed(2) + "-" + Number(dataObj[11]).toFixed(2)]:
      " Between 2 SD and 3 SD",
    [Number(dataObj[11]).toFixed(2) + "-" + Number(dataObj[12]).toFixed(2)]:
      " Between 3 SD and 4 SD",
    range_value: [
      Number(dataObj[4]).toFixed(2),
      Number(dataObj[5]).toFixed(2),
      Number(dataObj[6]).toFixed(2),
      Number(dataObj[7]).toFixed(2),
      Number(dataObj[8]).toFixed(2),
      Number(dataObj[9]).toFixed(2),
      Number(dataObj[10]).toFixed(2),
      Number(dataObj[11]).toFixed(2),
      Number(dataObj[12]).toFixed(2),
    ],
  };

  // Get the age from the current object
  organizedData[dataObj[0]] = obj;
}

// Save the organized data to a file
const jsonFile = "bmi-girls-organized-data.json";
fs.writeFileSync(jsonFile, JSON.stringify(organizedData, null, 4));
