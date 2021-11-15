console.log("start"); // synchronous concept- code is executed step by step 
function display(){
    console.log("HelloWorld !!");
    console.log("Welcome to Javascript");
}
display();
console.log("End");


console.log("Start"); //  asynchronous concept - code executes immediately even if synch code blocks the execution 
function message(){  //as in this example certain timeout is given which is blocking last statement but it runs parallel and executes statement
    console.log("Welcome");
    setTimeout(() => {
        console.log("Have a nice day");  
    }, 3000);   
}
message();
console.log("How can I Help you?");