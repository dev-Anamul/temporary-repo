var pdf2table = require("pdf2table");
var fs = require("fs");

fs.readFile("./annex1b.pdf", function (err, buffer) {
  if (err) return console.log(err);

  pdf2table.parse(buffer, function (err, rows, rowsdebug) {
    if (err) return console.log(err);

    const boysData = {};
    const girlsData = {};

    rows.forEach((row) => {
      if (row.length > 6) {
        boysData[row[5].trim()] = {
          [row[0].trim()]: "-4 SD",
          [row[1].trim()]: "-3 SD",
          [row[2].trim()]: "-2 SD",
          [row[3].trim()]: "-1 SD",
          [row[0].trim() + "-" + row[1].trim()]: "between -4 SD and -3 SD",
          [row[1].trim() + "-" + row[2].trim()]: "between -3 SD and -2 SD",
          [row[2].trim() + "-" + row[3].trim()]: "between -2 SD and -1 SD",
          [row[3].trim() + "-" + row[4].trim()]: "between -1 SD and Median",
          [row[4].trim()]: "Median",
          range_value: [
            row[0].trim(),
            row[1].trim(),
            row[2].trim(),
            row[3].trim(),
            row[4].trim(),
          ],
        };

        girlsData[row[5].trim()] = {
          [row[10].trim()]: "-4 SD",
          [row[9].trim()]: "-3 SD",
          [row[8].trim()]: "-2 SD",
          [row[7].trim()]: "-1 SD",
          [row[10].trim() + "-" + row[9].trim()]: "between -4 SD and -3 SD",
          [row[9].trim() + "-" + row[8].trim()]: "between -3 SD and -2 SD",
          [row[8].trim() + "-" + row[7].trim()]: "between -2 SD and -1 SD",
          [row[7].trim() + "-" + row[6].trim()]: "between -1 SD and Median",
          [row[6].trim()]: "Median",
          range_value: [
            row[10].trim(),
            row[9].trim(),
            row[8].trim(),
            row[7].trim(),
            row[6].trim(),
          ],
        };
      }
    });

    fs.appendFile("./boys-cm.json", JSON.stringify(boysData), function (err) {
      if (err) return console.log(err);
      console.log("The file was saved!");
    });

    fs.appendFile("./girls-cm.json", JSON.stringify(girlsData), function (err) {
      if (err) return console.log(err);
      console.log("The file was saved!");
    });
  });
});
