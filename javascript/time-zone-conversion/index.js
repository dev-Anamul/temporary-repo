// Get the local date and time
const localDate = new Date(options);

// Set the target time zone
const targetTimeZone = "America/New_York";

// Options for formatting the date and time
const options = { timeZone: targetTimeZone };

// Format the local date and time in the target time zone
const convertedTime = localDate.toLocaleString("en-US", options);

console.log(
  "Converted time in",
  targetTimeZone,
  ":",
  convertedTime,
  ":",
  localDate
);
