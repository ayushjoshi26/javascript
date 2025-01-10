// scopes
// there are two type of scope: .Global .Block


/*
    if(){
        //this part is the block scope.
    }
*/

//block scope variables are only accessible within the block they are defined in.
//Global scope variables are accessible anywhere in the program.


function one(){
    const username = "Ayush joshi"
    function two (){
        const Website = "youtube"
        console.log(username)
    }
    // console.log(Website)
    // two()
}
// one()

if (true){
    const Name = "ayush joshi"
    if(Name === "ayush joshi"){
        const website = " youtube"
        console.log(Name + website)
    }
    // console.log(website)
    console.log(Name)
}


// if you wanna print the value so you need to remember the scopes. 
