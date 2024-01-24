const csvFilePath = "./hcfa-girls-0-13-zscores-csv.csv";

const csvToJson = require("csvtojson");
const fs = require("fs");
const path = require("path");

const jsonFilePath = path.resolve(
  __dirname,
  "hcfa-girls-0-13-zscores-json.json"
);

const convertCsvToJson = async (csvFilePath, jsonFilePath) => {
  try {
    const jsonArray = await csvToJson().fromFile(csvFilePath);

    const dataObj = {};

    const formatData = jsonArray.reduce((acc, item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        // obj[key.trim()] = item[key].trim();
        obj[+item[key]] = key;
        obj["range_value"] = [
          +item["-3 SD"],
          +item["-2 SD"],
          +item["-1 SD"],
          +item["Median"],
          +item["1 SD"],
          +item["2 SD"],
          +item["3 SD"],
        ];
      });

      obj[+item["-3 SD"] + "-" + +item["-2 SD"]] = "between -3 SD and -2 SD";
      obj[+item["-2 SD"] + "-" + +item["-1 SD"]] = "between -2 SD and -1 SD";
      obj[+item["-1 SD"] + "-" + +item["Median"]] = "between -1 SD and Median";
      obj[+item["Median"] + "-" + +item["1 SD"]] = "between Median and 1 SD";
      obj[+item["1 SD"] + "-" + +item["2 SD"]] = "between 1 SD and 2 SD";
      obj[+item["2 SD"] + "-" + +item["3 SD"]] = "between 2 SD and 3 SD";

      acc[+item.Week] = obj;

      return acc;
    }, {});
    console.log(formatData);
    fs.writeFileSync(jsonFilePath, JSON.stringify(formatData, null, 2));
    console.log(`CSV file converted to JSON file at ${jsonFilePath}`);
  } catch (error) {
    console.error(error);
  }
};

convertCsvToJson(csvFilePath, jsonFilePath);
