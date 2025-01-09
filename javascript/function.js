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

console.log(userloginInfo("Ayush"))






