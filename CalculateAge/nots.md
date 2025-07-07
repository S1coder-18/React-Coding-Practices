1. Create input box with built date picker
2. Create button --> Calculate Age.
3. Result display section --> We will display just below it.


4. 📌 What is getFullYear()?
getFullYear() is a method provided by the JavaScript Date object.
It returns the 4-digit year of a given date.
console.log(today.getFullYear()); // 👉 2025


5. Date.getMonth() -->
✅ What getMonth() does:
It returns the month of a date, but 0-based:
0--january , 11 -- December
console.log(today.getMonth()); // 👉 6 (because July is the 7th month, but index 6)

6. 📌 What is getDate()?
getDate() is a method of the Date object in JavaScript.
✅ What it does:
It returns the day of the month (1 to 31) for a specific date.
console.log(today.getDate()); // 👉 7

7. 📌 What is getDay() in JavaScript?
getDay() returns the day of the week, as a number between 0 and 6.
0-->Sunday and 6--> Saturday
console.log(date.getDay()); // 👉 1 (Monday)

8. const prevMonth = new Date(today.getFullYear(),today.getMonth(),0);
today.getFullYear() --> 2025
today.getMonth() --> july(6) as 0 based-indexing
0 --> means last date(30) or (31) based on the month of previous month.....
            
days += prevMonth.getDate(); 
prevMonth.getDate() --> 30.

Suppose days = -13 so --> -13+30 ==> 17.