// task 1

let date = new Date("May 22, 2002");
let dateOfMyBirthday = date.getDate();
let monthOfMyBirthday = date.getMonth() + 1;
let yearOfMyBirthday = date.getFullYear();

let myBithday = `${dateOfMyBirthday}.0${monthOfMyBirthday}.${yearOfMyBirthday}`;
console.log(myBithday);

// task 2

function getDiffDays(start, end) {
  let startDate = new Date(start);
  let endDate = new Date(end);
  let startDateInMilliseconds = startDate.getTime();
  let endDateInMilliseconds = endDate.getTime();
  let diffMilliseconds = endDateInMilliseconds - startDateInMilliseconds;
  let millisecondsToDays = diffMilliseconds / (1000 * 60 * 60 * 24);
  if (startDateInMilliseconds > endDateInMilliseconds) {
    console.error("Error: your start date is later than end");
    return;
  }
  if (startDate == "Invalid Date" || endDate == "Invalid Date") {
    console.error("Error: invalid date");
    return;
  }
  return millisecondsToDays;
}

console.log(getDiffDays("2020-01-01", "2020-01-17")); // 16
console.log(getDiffDays("2020-01-01", "2020-03-15")); // 74
console.log(getDiffDays("2222222222", "2020-03-15")); // Error: invalid date
console.log(getDiffDays("2021-01-02", "2020-03-15")); // Error: your start date is later than end

// task 3

function isWeekend(date) {
  let dayOfWeek = new Date(date).getDay();
  if (dayOfWeek == 0 || dayOfWeek == 6) {
    return true;
  } else {
    return false;
  }
}

console.log(isWeekend("2022-02-12")); // true
console.log(isWeekend("2022-02-13")); // true
console.log(isWeekend("2022-02-09")); // false

// task 4

const person = {
  fullName: "Sherlock Holmes",
  address: {
    street: "Baker Street",
    city: "London",
    house: "221b",
  },
};

const json = JSON.stringify(person);
console.log(json);

const newPersonObject = JSON.parse(json);
console.log(newPersonObject);

const {
  fullName,
  address: { street, city, house },
} = person;
console.log(fullName, street, city, house);
