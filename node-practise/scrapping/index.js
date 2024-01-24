const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

// Define the URL you want to scrape
const url = "http://dgdagov.info/index.php/registered-products/allopathic";
// const url = "https://www.amarstock.com/sector-latest-share-price";

// Perform web scraping
axios
  .get(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);

    // Find the table element based on its selector
    const tableRows = $("table.dataTable tr");

    // Define an array to store the extracted data
    const tableData = [];

    // Iterate over each table row
    tableRows.each((index, element) => {
      const rowData = {};

      // Extract data from each table cell (td) within the row
      const tableCells = $(element).find("td");
      tableCells.each((cellIndex, cellElement) => {
        const cellData = $(cellElement).text();
        rowData[`column_${cellIndex + 1}`] = cellData;
      });

      console.log(rowData);

      Object.keys(rowData).forEach((key) => {
        let str = rowData[key].trim().replace(/\t/g, "");
        // console.log(str);
        rowData[key] = str;
        console.log(rowData);
      });
      // Add the row data to the table data array

      if (Object.keys(rowData).length > 0) tableData.push(rowData);
    });

    // Output the extracted table data as JSON

    fs.writeFileSync(
      path.resolve(__dirname, "latest-share.json"),
      JSON.stringify(tableData)
    );
    // console.log(JSON.stringify(tableData, null, 2));
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
