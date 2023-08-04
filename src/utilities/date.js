import NepaliDate from "nepali-date-converter";

const Numbers = {
  0: {
    number: "०",
    written: "शुन्य",
  },
  1: {
    number: "१",
    written: "एक",
  },
  2: {
    number: "२",
    written: "दुई",
  },
  3: {
    number: "३",
    written: "तीन",
  },
  4: {
    number: "४",
    written: "चार",
  },
  5: {
    number: "५",
    written: "पाँच",
  },
  6: {
    number: "६",
    written: "छ",
  },
  7: {
    number: "७",
    written: "सात",
  },
  8: {
    number: "८",
    written: "आठ",
  },
  9: {
    number: "९",
    written: "नौ",
  },
};

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

export const convertTimeToNepali = (englishTime) => {
  let nepaliTime = englishTime.replaceAll("0", "०");
  nepaliTime = nepaliTime.replaceAll("1", "१");
  nepaliTime = nepaliTime.replaceAll("2", "२");
  nepaliTime = nepaliTime.replaceAll("3", "३");
  nepaliTime = nepaliTime.replaceAll("4", "४");
  nepaliTime = nepaliTime.replaceAll("5", "५");
  nepaliTime = nepaliTime.replaceAll("6", "६");
  nepaliTime = nepaliTime.replaceAll("7", "७");
  nepaliTime = nepaliTime.replaceAll("8", "८");
  nepaliTime = nepaliTime.replaceAll("9", "९");
  return nepaliTime;
};

export const convertToNepaliDate = (date) => {
  const dateOfNepal = nepalDate(date);
  const time = dateOfNepal.split(",")[1];
  const nepaliTime = convertTimeToNepali(time);
  const georgianDate = new Date(date);
  let a = new NepaliDate(georgianDate);
  NepaliDate.language = "np";
  let nepaliDate = a.format("ddd DD, MMMM YYYY");
  return nepaliDate + "," + nepaliTime;
};

export const getDate = (dateToConvert) => {
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
  };
  var nepalTime = date.toLocaleString("en-US", options);
  return nepalTime;
};
