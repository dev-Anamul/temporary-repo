const fs = require("fs");

// Calculate the size of a JSON object in bytes

function calculateJSONSize(obj) {
  const jsonString = JSON.stringify(obj);
  const bytes = new TextEncoder().encode(jsonString).length;
  return bytes;
}

// Example usage:

const data = fs.readFileSync("./simplified-investigation.json", "utf8");

const sizeInBytes = calculateJSONSize(data);
console.log(`JSON size: ${sizeInBytes} bytes`);
