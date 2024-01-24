/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  const strNumber = String(n);
  const parts = strNumber.split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1] || "";

  let formattedNumber = "";
  let count = 0;

  // Iterate over each character of the integer part in reverse order
  for (let i = integerPart.length - 1; i >= 0; i--) {
    formattedNumber = integerPart.charAt(i) + formattedNumber;
    count++;

    // Add a separator after every three digits
    if (count % 3 === 0 && i !== 0) {
      formattedNumber = "," + formattedNumber;
    }
  }

  // Combine the integer part and decimal part (if any)
  if (decimalPart.length > 0) {
    formattedNumber += "." + decimalPart;
  }

  return formattedNumber;
};

console.log(thousandSeparator(1234));
