const { log } = require("console");
const fs = require("fs");
const path = require("path");

const tradingCode = [];
const tableData = [];
const tableDtatObj = [];

fs.readFile(
  path.join(__dirname, "amr-stock-last-trade.json"),
  "utf-8",
  (err, data) => {
    const acctualData = JSON.parse(data);

    acctualData?.forEach((el) => {
      if (el.length <= 3) tradingCode.push(el[0]);
      else tableData.push(el);
    });

    for (let i = 0; i < tableData.length; i++) {
      const obj = {};
      // obj.serial = tradingCode[i][0];
      obj.tradeCode = tradingCode[i];
      obj.ltp = tableData[i][0];
      obj.percent = tableData[i][1];
      obj.open = tableData[i][2];
      obj.high = tableData[i][3];
      obj.low = tableData[i][4];
      obj.close = tableData[i][5];
      obj.ycp = tableData[i][6];
      obj.change = tableData[i][7];
      obj.trade = tableData[i][8];
      obj.volume_mn = tableData[i][9];
      obj.volume = tableData[i][10];
      obj.cat = tableData[i][11];
      obj.audited = tableData[i][12];

      tableDtatObj.push(obj);
    }

    fs.writeFileSync(
      path.resolve(__dirname, "amr-stock-latest-formatted.json"),
      JSON.stringify(tableDtatObj)
    );
  }
);
