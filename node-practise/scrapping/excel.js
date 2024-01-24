// const fs = require("fs");
// const XLSX = require("xlsx");
const path = require("path");

// Read the JSON file
// const jsonData = fs.readFileSync(path.join(__dirname, "data.json"), "utf-8");

const fs = require("fs");
const XLSX = require("xlsx");

// Read the JSON file
fs.readFile(
  path.join(__dirname, "amr-stock-formatted.json"),
  "utf-8",
  (err, jsonData) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      return;
    }

    try {
      // Parse the JSON data
      const data = JSON.parse(jsonData);

      // Create a new workbook and worksheet
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(data);

      // Add the worksheet to the workbook
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

      // Save the workbook as an Excel file
      XLSX.writeFile(workbook, "amr-stock-formatted.xlsx");

      console.log("Excel file generated successfully.");
    } catch (err) {
      console.error("Error parsing JSON data:", err);
    }
  }
);
