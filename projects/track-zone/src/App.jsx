function App() {
  // our time zone
  const ESTtimeZone = "America/New_York";
  const PSTtimeZone = "America/Los_Angeles";
  const UTCtimeZone = "UTC";
  const GMTtimeZone = "GMT";

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const localDate = new Date();

  // Format the local date and time in the target time zone
  const EST = localDate.toLocaleString("en-US", {
    timeZone: ESTtimeZone,
    ...options,
  });
  const PST = localDate.toLocaleString("en-US", {
    timeZone: PSTtimeZone,
    ...options,
  });
  const UTC = localDate.toLocaleString("en-US", {
    timeZone: UTCtimeZone,
    ...options,
  });
  const GMT = localDate.toLocaleString("en-US", {
    timeZone: GMTtimeZone,
    ...options,
  });

  console.log("localDate: ", localDate.toLocaleString("en-US", options));
  console.log("EST: ", EST);
  console.log("PST: ", PST);
  console.log("UTC: ", UTC);
  console.log("GMT: ", GMT);

  return (
    <>
      <h1>hellow world</h1>
    </>
  );
}

export default App;
