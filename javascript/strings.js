// String interoplation: use of `` backticks and ${} dollar sign, curly brackets.

let myName = "Ayush joshi"

// console.log("hello" + myName) this is a old method

console.log(`hello ${myName} this is the string interpolation`);// This is a modern things.

const gameName = new String('Joshi-ayush-joshi')
console.log(gameName[0])  // you access the strings using his index number.
console.log(gameName.length) // It shows the length of the strings. 1....
console.log(gameName.toUpperCase()) // Its the makes all the string in capital letter, but its is not the change the original one.
console.log(gameName.charAt(2)) // Its show where are the character using index number.
console.log(gameName.indexOf('h')) // Its show the character index number.

let newStrings = gameName.slice(-2,4)
let subStrings = gameName.substring(1, 3)// you cant use the -neg value in the subString.
console.log(newStrings)
console.log(subStrings)

let newStringone = "   Ayush joshi   "
console.log(newStringone)
console.log(newStringone.trim())// trim is used for removing white space from the string.

const url = "http://ayushjoshi.com"
console.log(url.replace('.','dot')); // its is used to replace the string in anotehr value.
console.log(url.includes('akash')) // its is used to check the existence of the string in the main string.

let splitName = gameName.split('-') // it is used to split the string into an array.
console.log(splitName)

let name1 = "Ayush"
let name2 = "joshi"
console.log(name1.concat(name2)) // this is used to connect two string.
console.log(name1.lastIndexOf("h")) //indexof() and lastindexof() both are but the lastindexof() is serach to last to first. 
                                    //if he cant find the value so the output is -1.
