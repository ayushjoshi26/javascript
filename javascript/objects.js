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
    console.log("hello JS user")
}

newUser.greetingTwo = function(){
    console.log(`hello JS user ${this.name}`) //this: It is used to target the object to used the key value.
}

console.log(newUser.greeting());
console.log(newUser.greetingTwo());
 

