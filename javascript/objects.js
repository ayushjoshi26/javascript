// objects 

let mySym = Symbol("key1") // It is often used to create unique keys for objects.

const newUser = {
    name: "ayush joshi",
    age: 19,
    [mySym]: "mykey1",
    email: "ayush@gmail.com",
    phone:9999911111
}

// console.log(newUser["name"])// newUser[] you can access the key value by using this.
// console.log(newUser["email"])
// console.log(newUser)
// console.log(newUser[mySym])// access the Symbol 

newUser.email = "joshi@gmail.com"
// Object.freeze(newUser) // this freeze keyword is mostly to stop the changing the value of the key.
newUser.email = "aj@gmail.com" // it is not execte because, we freeze the code before the making a new variable. 
// console.log(newUser)

newUser.greeting = function(){
    // console.log("hello JS user")
}

newUser.greetingTwo = function(){
    // console.log(`hello JS user ${this.name}`) //this: It is used to target the object to used the key value.
}

// console.log(newUser.greeting());
// console.log(newUser.greetingTwo());


//singleton obejct 
 
const youtube = new Object()
// const youtube1 = {}

youtube.userID = "123abc"
youtube.userName = "Ramesh"
youtube.userEmail = "ramesh@gmail.com"

// console.log(youtube);


const randomUser = {
    email: "random@gmail.com",
    randomName: {
        fullName: {
            firstName: "Ayush",
            LastName: "Joshi"
        }
    }
}

// console.log(randomUser.randomName.fullName.firstName);

const obj1 = {a: 1, b: 2}
const obj2 = {c: 1, d: 2}
const obj3 = {e: 1, f: 2}

const obj4 = {...obj1, ...obj2, ...obj3} // spread operator
// console.log(obj4)


const  obj5 = [
    {
        id: 12,
        email: "h@gmail.com"
    },
    {
        id: 13,
        email: "i@gmail.com"
    },
    {
        id: 14,
        email: "j@gmial.com"
    }
]

// console.log(obj5)

// console.log(Object.keys(newUser))
// console.log(Object.values(newUser))
// console.log(Object.entries(newUser))

// console.log(newUser.hasOwnProperty('email')) It is used to check the property if it exist in the object.

//destructuring:  Is a feature that allows you to extract data from arrays, objects and Maps.

const Course = {
    coursename: "Javascript",
    coursePrice: 999,
    courseInstructor: "Ayush joshi"
}

const {courseInstructor: Instructor} = Course // destructuring in object {} this bracket is denoted the destructuring in js
console.log(Instructor)