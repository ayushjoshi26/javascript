const score = 100
// console .log(score)

const balance = new Number(100)
// console.log(balance)
// console.log(balance.toString())// toString() is used to change the datatype of the number in to string. 
// console.log(balance.toString().length)// now you can access the string function.\
// console.log(balance.toFixed(1)) // keep one decimal places, it does not change the original number.

const num1 = 34.678
// console.log(num1.toPrecision(4)); //It controls how many total digits a number has (before and after the decimal point).

const num2 = 1000000000
// console.log(num2.toLocaleString("en-IN",{style: "currency", currency: "INR"})); // its change your language-locale and add commas.
                                // its doesnot change the original one and give the value in a string.

//++++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++


// console.log(Math.abs(-4)) // its give the absolute value means without any -neg sign.
// console.log(Math.round(4.5)) // its give you a round of the number.
// console.log(Math.floor(4.8)) //It rounds a number down to the nearest whole number.
// console.log(Math.ceil(4.1)) //It rounds a number up to the nearest whole number.
// console.log(Math.max(4,5,6,7)) // It shows the maximum number.
// console.log(Math.min(4,5,6,7)) // It show the minimum number.

let randomNum1 = Math.random() * 10;
// console.log(randomNum1); // Output: A random decimal between 0 and 10

let randomWholeNum = Math.floor(Math.random() * 10);
// console.log(randomWholeNum); // Output: A random whole number between 0 and 9

let randomNum = Math.floor(Math.random() * 10) + 1;
// console.log(randomNum); // Output: A random whole number between 1 and 10

let min = 1, max = 6;
let randomInRange = Math.floor(Math.random() * (max - min) + min);
console.log(randomInRange); // Output: A random number between 5 and 15


