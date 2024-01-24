const dataArr = require("./data.js");

const transformData = (data) => {
  return data.reduce((acc, cur) => {
    const key = `${cur.createdIn}+${cur.dateCreated?.substring(0, 10)}`;
    if (!acc[key]) {
      acc[key] = [cur];
    } else {
      acc[key].push(cur);
    }
    return acc;
  }, {});
};

console.log(transformData(dataArr));

Object.keys(transformData(dataArr)).forEach((key) => {

  console.log(transformData(dataArr)[key]);
}
);
