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

// console.log(arr3.slice(1,4)) // it not take the end value and its make a shallow copy of the array not affect on the og array.
// console.log( "A ", arr3)

// console.log(arr3.splice(1,3,))// its remove the value and replace the value in the original array.
// console.log("B ",arr3)


const Marvel = ["ironman", "spiderman", "thor"]
const Dc = ["batman", "superman", "flash"]

// console.log(Marvel.concat(Dc)) It is used to connect two array value.

const All_heros = [...Marvel,...Dc] // in this you can add many array using this.
// console.log(All_heros)

const Another_array = [1,2,3,4,[5,6,7,[8,9,[10,11]]]]
// console.log(Another_array.flat(3))  it is used flatten the value that nested in one array .

console.log(Array.isArray("Ayush")) // it is look like an include is show the boolean value, its the input is exist.
console.log(Array.from("Ayush")) // its make anything like array eg. [A,y,u,s,h]
console.log(Array.from({name: "Ayush"}))//Your object { name: "Ayush" } doesn’t meet these conditions, so the result is an empty array ([]).