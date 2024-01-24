const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

(async () => {
  try {
    // Launch a headless browser instance
    const browser = await puppeteer.launch();

    // Open a new page
    const page = await browser.newPage();

    // Navigate to the URL with the table
    await page.goto(
      "http://dgdagov.info/index.php/registered-products/allopathic"
    );

    // Wait for the table to load
    await page.waitForSelector("table.dataTable");

    // Extract table data
    const data = await page.evaluate(() => {
      const tableRows = Array.from(document.querySelectorAll("tbody tr"));

      return tableRows.map((row) => {
        const columns = Array.from(row.querySelectorAll("td"));
        return columns.map((column) => column.innerText);
      });
    });

    // Print or process the extracted data
    console.log(data);

    //
    fs.writeFileSync(
      path.resolve(__dirname, "medicine.json"),
      JSON.stringify(data)
    );
    // Close the browser
    await browser.close();
  } catch (error) {
    console.error("Error scraping the page:", error);
  }
})();
