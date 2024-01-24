const getLastActiveTime = (isoTimestamp) => {
  const updateLastActiveTime = () => {
    const currentTimestamp = new Date();
    const lastActiveTimestamp = new Date(isoTimestamp);
    const timeDifference = currentTimestamp - lastActiveTimestamp;

    // Define time units in milliseconds
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;

    if (timeDifference < minute) {
      return "Just now";
    } else if (timeDifference < hour) {
      const minutesAgo = Math.floor(timeDifference / minute);
      return `${minutesAgo}m${minutesAgo > 1 ? "" : ""} ago`;
    } else if (timeDifference < day) {
      const hoursAgo = Math.floor(timeDifference / hour);
      return `${hoursAgo}h${hoursAgo > 1 ? "" : ""} ago`;
    } else {
      const daysAgo = Math.floor(timeDifference / day);
      return `${daysAgo}d${daysAgo > 1 ? "" : ""} ago`;
    }
  };

  setInterval(() => {
    const lastActiveTime = updateLastActiveTime();
    return lastActiveTime;
  }, 60000);

  return updateLastActiveTime();
};

export default getLastActiveTime;
