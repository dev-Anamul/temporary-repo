const axios = require("axios");
const cheerio = require("cheerio");

const url = "http://dgdagov.info/index.php/registered-products/allopathic";

axios
  .get(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);

    const products = [];

    $("table.display.dataTable tbody tr").each((index, element) => {
      const columns = $(element).find("td");

      console.log(columns);
      const product = {
        registrationNumber: $(columns[0]).text(),
        brandName: $(columns[1]).text(),
        genericName: $(columns[2]).text(),
        manufacturer: $(columns[3]).text(),
        expiryDate: $(columns[4]).text(),
      };
      products.push(product);
    });

    console.log(products);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
