//This keyword used to target the specific object that value you print on your console.
//This keyword is sa window object, because you can acces all the action, event in the js.

const obj1 = { 
    Username: "Ayush joshi", 
    price: 199,

    welcomeMessage: function(){
        console.log (`${this.Username}, welcome to our Website.`)
    }
}

// console.log(obj1)
// obj1.welcomeMessage()
// obj1.Username = "sam" // you can change the value in object in js 
// obj1.welcomeMessage()


// Arrow funtion is same as the noraml function but arrow is a new type of function that are used mostly by the coder.

const addTwo = (num1, num2) =>{
    return num1 + num2    // This is a basic arrow function
}

// console.log(addTwo(4,7))

const addthree = (num1 ,num2, num3) => num1 + num2 + num3 // this is a implicit arrow function.
// console.log(addthree(2,3,4));

