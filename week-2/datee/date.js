//Assignment 1: Date Creation & Extraction (Beginner)

//Tasks:
       //1. Create a Date object for current date & time.
       let d1 = new Date();
const months = ["January","February","March","April","May","June",
                "July","August","September","October","November","December"];
const days = ["Sunday","Monday","Tuesday","Wednesday",
              "Thursday","Friday","Saturday"];
console.log("Year:", d1.getFullYear());
console.log("Month:", months[d1.getMonth()]);
console.log("Date:", d1.getDate());
console.log("Day:", days[d1.getDay()]);
console.log("Time:", d1.getHours(), d1.getMinutes(), d1.getSeconds());
       /*2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss*/