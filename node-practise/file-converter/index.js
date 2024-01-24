var pdf2table = require("pdf2table");
var fs = require("fs");

fs.readFile("./bmi-girls-5-19.pdf", function (err, buffer) {
  if (err) return console.log(err);

  pdf2table.parse(buffer, function (err, rows, rowsdebug) {
    if (err) return console.log(err);

    const data = rows.reduce((acc, row) => {
      if (row.length > 8) {
        acc[row[1].trim()] = {
          month: row[1].trim(),
          [row[5].trim()]: "-3 SD",
          [row[6].trim()]: "-2 SD",
          [row[7].trim()]: "-1 SD",
          [row[8].trim()]: "Median",
          [row[9].trim()]: "1 SD",
          [row[10].trim()]: "2 SD",
          [row[11].trim()]: "3 SD",
          [row[5].trim() + "-" + row[6].trim()]: "between -3 SD and -2 SD",
          [row[6].trim() + "-" + row[7].trim()]: "between -2 SD and -1 SD",
          [row[7].trim() + "-" + row[8].trim()]: "between -1 SD and Median",
          [row[8].trim() + "-" + row[9].trim()]: "between Median and 1 SD",
          [row[9].trim() + "-" + row[10].trim()]: "between 1 SD and 2 SD",
          [row[10].trim() + "-" + row[11].trim()]: "between 2 SD and 3 SD",
          range_value: [
            row[5].trim(),
            row[6].trim(),
            row[7].trim(),
            row[8].trim(),
            row[9].trim(),
            row[10].trim(),
            row[11].trim(),
          ],
        };
      }
      return acc;
    }, {});

    fs.writeFile("./bmi-girls-5-19.json", JSON.stringify(data), function (err) {
      if (err) return console.log(err);
      console.log("The file was saved!");
    });
  });
});
