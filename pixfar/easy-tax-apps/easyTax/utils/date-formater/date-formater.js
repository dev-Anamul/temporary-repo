export const formateDate = picker => {
  const date = new Date(picker);

  // Format the date and time
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  const formattedDateTime = date.toLocaleDateString('en-NZ', options);
  return formattedDateTime;
};

export const newDateFormatter = picker => {
  const date = new Date(picker);
  console.log('date', picker);
  date?.setTimezoneOffset(0);
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  };

  const formattedDateTime = date.toLocaleString('en-NZ', options);
  return formattedDateTime;
};

// export const test = picker => {
//   if (picker || picker === 'Invalid Date') {
//     const dateArray = picker?.split(':')[0]?.split('-');
//     const ddString = dateArray[2]?.split('');
//     const yy = dateArray[0];
//     const mm = dateArray[1];
//     const dd = ddString[0] + ddString[1];

//     return `${mm}/${dd}/${yy}`;
//   }
// };

export const dateFormateForExpense = string => {
  if (string) {
    const date = new Date(string);
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Month is 0-based
    const day = date.getUTCDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
};

export const getLastActiveTime = isoTimestamp => {
  const updateLastActiveTime = () => {
    const currentTimestamp = new Date();
    const lastActiveTimestamp = new Date(isoTimestamp);
    const timeDifference = currentTimestamp - lastActiveTimestamp;

    // Define time units in milliseconds
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;

    if (timeDifference < minute) {
      return 'Just now';
    } else if (timeDifference < hour) {
      const minutesAgo = Math.floor(timeDifference / minute);
      return `${minutesAgo}m${minutesAgo > 1 ? '' : ''} ago`;
    } else if (timeDifference < day) {
      const hoursAgo = Math.floor(timeDifference / hour);
      return `${hoursAgo}h${hoursAgo > 1 ? '' : ''} ago`;
    } else {
      const daysAgo = Math.floor(timeDifference / day);
      return `${daysAgo}d${daysAgo > 1 ? '' : ''} ago`;
    }
  };

  setInterval(() => {
    const lastActiveTime = updateLastActiveTime();
    return lastActiveTime;
  }, 60000);

  return updateLastActiveTime();
};
