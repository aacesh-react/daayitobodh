export const nepalDate = (dateToConvert) => {
  let date = new Date(dateToConvert);

  // Set the time zone to Nepal (GMT+5:45)
  date.setUTCHours(date.getUTCHours() + 5);
  date.setUTCMinutes(date.getUTCMinutes() + 45);

  // Get the time and date in Nepal
  const options = {
    // timeZone: "Asia/Kathmandu",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "numeric",
    second: "numeric",
    hourCycle: "h24",
  };
  var nepalTime = date.toLocaleString("en-US", options);
  return nepalTime;
};
