//arrays: Its a non primitive datatype.

const arr1 = [0,1,2,3,4,5] // this a array declaration
const myHeros = ["spiderman","ironman","Thor"]
let myArr2 = Array(1,2,3,4,5)
// console.log(myHeros[1]); // you can print the arrays value using 'myHeros[]'.

//arrays methods:

// arr1.push(7) // It is used to add the value form the ending.
// arr1.pop()// It is used to remove the value form the ending.
// arr1.unshift(12) // It is used to add the value from the starting.
// arr1.shift() // It is used to remove the value from the starting.`

// console.log(arr1.includes(9)) // It is used to the find the value is exist in the array, its gives the boolean value.
// console.log(arr1.indexOf(4)) // It is show the index number of the value that you insert in it.

let newArr = arr1.join() // its show the array value in a string. 
// console.log(arr1)
// console.log(newArr)


// slice and splice 

const arr3 = [1,2,3,4,5]

console.log(arr3.slice(1,4)) // it not take the end value and its make a shallow copy of the array not affect on the og array.
console.log( "A ", arr3)

console.log(arr3.splice(1,3,))// its remove the value and replace the value in the original array.
console.log("B ",arr3)