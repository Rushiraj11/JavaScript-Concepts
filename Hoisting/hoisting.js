sum(20,5);         // here we are calling function "sum" before declaring it.   
function sum(a,b){  //but as per javascript behaviour functions or variable are moved at top of in creation phase before entering execution phase
    add=a+b;        
console.log(add);   // this phenomena is called hoisting
}


console.log(f);//here we are printing f before initializing the value hence we get undefined
var f;
f=5;


console.log(f);//here we are initializing the value hence we getting the value  
f=5;
var f;



console.log(e); // hoisting concept does not work with keyword "let" and "const" 
e=8;           // as we cannot access these variables before initializing and so we Refrence error
let e;

console.log(c);
const c=1;


         
let j;
j=8;  
console.log(j);


const z=1;
console.log(z);


