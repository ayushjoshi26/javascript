// IIFE: Immediately invoked function expression. 
//Avoid Global Scope Pollution: Keeps variables inside the function private, so they don’t interfere with global variables.

(function One(){
    console.log("DB connected")
})();

// when you got am error, when you use two iife function at a same time , so first you add the ; semicolon in last of the code. 

(function Two(){
    console.log("DB connected Two")
})();


(function three(name){
    console.log(`welcome to our website ${name}`) // this enter you argument like the normal function.
})('Ayush joshi')