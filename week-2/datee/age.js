//Assignment 3: Age Calculator (Intermediate)
//Tasks:
        //1. Calculate exact age in years
let dob = new Date("2000-05-15");
let today = new Date();
let years = today.getFullYear() - dob.getFullYear();
let months = today.getMonth() - dob.getMonth();
let days = today.getDate() - dob.getDate();
if (months < 0) {
    years--;
    months += 12;
}
if (days < 0) {
    months--;
    let prevMonthDays = new Date(
        today.getFullYear(),
        today.getMonth(),       
    ).getDate();
    days += prevMonthDays;
}
console.log(`Age: ${years} years`);