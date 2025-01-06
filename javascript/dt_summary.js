// primitive Datatype 
// there are 7 type of datatype: string ,boolean ,number ,undefined ,null ,symbol ,Bigint

const string = "Ayush"
const boolean = true
const number = 12
let undefined;
const num = null;
const sym = Symbol
const Bigint = 123344654654667457n


//Javascript is dynamically language

// Non-primitive Datatype: object, function , array 

const superHeroes = ["spiderman", "superman", "thor"];

const intro = {
    Name: "Ayush joshi",
    age: 19, 
    isPass: true
}

const sumfunction = function (){
    console.log("hello world");
}


// Stacks(primitive) and Heaps(non-primitive/refrence)

//Stacks: its a static memory allocation for primitive datatypes.
//Heaps: its is a dynamically memmory allocation for non-primitive Datatype 

let myName = "ayush joshi"
let anotherName = myName // its a copy of myName variable so if you change the value so its not affect ot the original variable.
anotherName = "Akash joshi"

// console.log(myName)
// console.log(anotherName)

let userOne = {
    name: "ayush joshi",
    age: 19
}

let usertwo = userOne
usertwo.name = "rohit singh"

console.log(userOne.name)
console.log(usertwo.name)
//when you change the value in heap so its affect the original one value like above exmaple of the object.