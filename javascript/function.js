//function 

function sayMyname() {
    console.log("a")
    console.log("y")
    console.log("u")
    console.log("s")
    console.log("h")
}

// sayMyname()

function addTwoNumbers(number1, number2){
    // console.log(number1 + number2)
    // let result = number1+ number2
    return number1+ number2
}

// console.log("result = ", addTwoNumbers(2,3))

// when someone not give the parameter in the function calling so the output is undefined.
function userloginInfo (username){
    if(username === undefined){
        console.log("please enter the username");
        return; 
    }
    return `${username} just logged in.`
}

// console.log(userloginInfo("Ayush")


// if you add a another print value after the retrun value in the func so its not excute. 

function restOp (...num1){
    return num1
}

// console.log(restOp(200 ,100, 4000, 3000, 500, 6000))

//Rest OP: It is used to make a bundle of diffrent type of value in a one like above example.

const userInfo = {
    Name: "Ayush",
    price: 199
}

function user1 (anyobject){
    console.log(`Username is ${anyobject.Name} and his course price is ${anyobject.price}.`)
}

// user1(userInfo)




