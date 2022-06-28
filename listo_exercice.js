const express = require("express");
const app = express();

// 👉️ Get today s date
const currentDate = new Date();

// 👉️ Get the first day of the month
const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
console.log("firstDay", firstDay);

// 👉️ Get the last day of the month
const lastDay = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth() + 1,
  0
);

console.log("lastDay", lastDay);

const employeeAbsence = [
  "2022-06-28T23:00:00.000Z",
  "2022-06-25T23:00:00.000Z",
];
const absence = employeeAbsence.map((el) => {
  if (el >= firstDay && el <= lastDay) {
    console.log("iui");
    return true;
  } else {
    console.log("non");
    return false;
  }
});

app.listen(8000, () => {
  console.log("Listening on port : 8000 !");
});

(module.exports = employeeAbsence), absence;
