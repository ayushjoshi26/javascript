// const newDate = new Date()
// console.log(newDate)
// console.log(newDate.toDateString()) // its shows the date as a string.
// console.log(newDate.toTimeString()) // its shows the time as a string.
// console.log(newDate.toLocaleString()) // its shows the date as local format.
// console.log(newDate.toString()) 
// console.log(typeof (newDate)); // output: Object


// const myDate = new Date(2025, 0 , 7)
// const myDate = new Date("2025-01-07")
const myDate = new Date("01-07-2025")
// console.log(myDate.toDateString()) // if you notice the month in js is start from 0 to 11

let myTimestamp = Date.now()

console.log(myTimestamp)
// console.log(myDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })






