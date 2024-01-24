const PDFDocument = require("pdfkit-table");
const fs = require("fs");

// Create a PDF document
const pdfDoc = new PDFDocument({
  size: "A4",
  margin: 50,
  layout: "landscape",
});
const output = fs.createWriteStream("table_example-header.pdf");

// Pipe the PDF content to a file
pdfDoc.pipe(output);

// Example data for the table
const tableData = [
  ["Name", "Age", "Country"],
  ["John Doe", 30, "USA"],
  ["Jane Smith", 25, "Canada"],
  ["Bob Johnson", 40, "UK"],
];

const headerCom = [
  {
    label: "Name",
    property: "name",
    width: 60,
    renderer: (value, _indexColumn, indexRow, row, rectRow, rectCell) =>
      value || "-",
  },
  {
    label: "Description",
    property: "description",
    width: 150,
    renderer: (value, _indexColumn, indexRow, row, rectRow, rectCell) =>
      value || "-",
  },
  {
    label: "Price 1",
    property: "price1",
    width: 100,
    renderer: (value, _indexColumn, indexRow, row, rectRow, rectCell) =>
      value || "-",
  },
  {
    label: "Price 2",
    property: "price2",
    width: 100,
    renderer: (value, _indexColumn, indexRow, row, rectRow, rectCell) =>
      value || "-",
  },
  {
    label: "Price 3",
    property: "price3",
    width: 80,
    renderer: (value, _indexColumn, indexRow, row, rectRow, rectCell) =>
      value || "-",
  },
  {
    label: "Price 4",
    property: "price4",
    width: 43,
    renderer: (value, _indexColumn, indexRow, row, rectRow, rectCell) =>
      value || "-",
  },
];

// Set up the layout of the table
const tableConfig = {
  title: {
    label: "Title",
    font: "Helvetica-Bold",
    fontSize: 28,
    color: "#000000",
    alignment: "center",
  },
  subtitle: "Subtitle",
  headers: headerCom,
  rows: tableData,
  widths: [150, 50, 100], // Width of each column
  layout: "lightHorizontalLines", // Table layout style
};

// Add the table to the PDF
pdfDoc.table(tableConfig);

// Finalize the PDF
pdfDoc.end();

console.log("PDF created successfully.");
