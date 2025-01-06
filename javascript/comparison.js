/*
    some basic comparison:
    <, >, <=, >=, ==, != 
*/

console.log( "2" > 1 )
console.log( "02" > 1 )
console.log( "abc" > 1 )// this is a NaN: not a number
//the output is true because the js is convert a "2" string into a number.

console.log(null > 0)
console.log(null >= 0)// because js is treat null as a number zero in comparison op, so the output is true.
console.log(undefined > 0)
console.log(undefined >= 0)

//===: triple equal is mostly used to check the datatype strictly.

console.log("abc" === 12) // The output is false, because they have both different datatype. 