console.log('bobbyhadz.com');

// 1) Remove the time from a date using JavaScript

function removeTime(date = new Date()) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );
}

// 👇️ Tue Jul 25 2023 00:00:00
console.log(removeTime(new Date()));

// 👇️ Wed Jan 19 2022 00:00:00
console.log(removeTime(new Date(2022, 0, 19, 9, 30, 0)));

// // ----------------------------------------------------------------------

// // 2) Remove the time from a date using toDateString

// function removeTime(date = new Date()) {
//   return new Date(date.toDateString());
// }

// // 👇️ Tue Jul 25 2023 00:00:00
// console.log(removeTime(new Date()));

// // 👇️ Wed Jan 19 2022 00:00:00
// console.log(removeTime(new Date(2022, 0, 19, 9, 30, 0)));

// // ----------------------------------------------------------------------

// // 3) Remove the local Time Zone from a Date using JavaScript

const date = new Date();

// ✅ Get UTC string without local time zone
// 👇️ Tue, 18 Jan 2022 14:30:00 GMT
console.log(date.toUTCString());

// -----------------------------------------------------

// ✅ Get local representation of Date and time (en-US locale)
// 👇️ 1/18/2022, 4:30:00 PM
console.log(date.toLocaleString('en-US'));

// -----------------------------------------------------

// ✅ Get local representation of Date and time (en-GB locale)
// 👇️ 18/01/2022, 16:30:00
console.log(date.toLocaleString('en-GB'));

// -----------------------------------------------------

// // 4) ✅ Format date and time as YYYY-MM-DD hh:mm:ss
// // (or any other variation by adjusting the code in the function)
// function padTo2Digits(num) {
//   return num.toString().padStart(2, '0');
// }

// function formatDate(date) {
//   return (
//     [
//       date.getFullYear(),
//       padTo2Digits(date.getMonth() + 1),
//       padTo2Digits(date.getDate()),
//     ].join('-') +
//     ' ' +
//     [
//       padTo2Digits(date.getHours()),
//       padTo2Digits(date.getMinutes()),
//       padTo2Digits(date.getSeconds()),
//     ].join(':')
//   );
// }

// // 👇️ 2022-01-18 16:30:00 (yyyy-mm-dd hh:mm:ss)
// console.log(formatDate(new Date()));

// //  👇️️ 2025-05-04 05:24:07 (yyyy-mm-dd hh:mm:ss)
// console.log(formatDate(new Date('May 04, 2025 05:24:07')));

// -----------------------------------------------------

// // 5) Formatting the date yourself

// ✅ Format date and time as YYYY-MM-DD hh:mm:ss
// (or any other variation by adjusting the code in the function)

// function padTo2Digits(num) {
//   return num.toString().padStart(2, '0');
// }

// function formatDate(date) {
//   return (
//     [
//       date.getFullYear(),
//       padTo2Digits(date.getMonth() + 1),
//       padTo2Digits(date.getDate()),
//     ].join('-') +
//     ' ' +
//     [
//       padTo2Digits(date.getHours()),
//       padTo2Digits(date.getMinutes()),
//       padTo2Digits(date.getSeconds()),
//     ].join(':')
//   );
// }

// // 👇️ 2022-01-18 16:30:00 (yyyy-mm-dd hh:mm:ss)
// console.log(formatDate(new Date()));

// //  👇️️ 2025-05-04 05:24:07 (yyyy-mm-dd hh:mm:ss)
// console.log(formatDate(new Date('May 04, 2025 05:24:07')));
