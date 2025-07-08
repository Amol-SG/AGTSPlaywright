// How do we comment single line and multi lines inside typescript

/* Multi line comments
ababd
dnddn
comments
multiline comments
*/

// ; "Semicolon" at end of line, is not mandatory in both JS and TS code

// Variable is a storge which stores either a single or multiple values

//let i=10; /// here i is the variable/container which stores value


//let & const -has been introduced in ES6(ECMAA Script 6- 2015)

/* multiple ways to declare a variables
1.var - in modern JS and Ts we do not use var
2.let - whenever we know that the value of variable can change at later point of time there we hhave to use of let keyword
3.const - Used to declare constant variables for which the value will not change at lifetime of variable 
*/

//Syntax of variable in typescript
//Keyword(var/let/const) variablename : datatype(optional)= value - ts

//Keyword(var/let/const) variablename = value - JS

//Scope of variable
//1. Global scope - which is accessible from any part of the code inside file

//2. local scope - which is accessible only within the block wherever it has declared 

//var 
//1.scope global or functional
//2.whenever u declare variable using Var keyword it can be redeclared or re-initialized as well


let i=110; //global scope

{
 let j=20; //local scope
 console.log(j);
 console.log(i);
}


var lang="python"

if(true){
    var lang="java";
}
console.log(lang); // it prints the Java bcoz it ovverrides the value of global variable, So thats why Var is not recomended to use


// let and const haves local scope
let langg="python" // global variable

if(true){
  //  let langg="java"; // local variable its scope will be in block only
}
console.log(langg); // it prints the Java bcoz it ovverrides the value of global variable, So thats why Var is not recomended to use




// Let Keyword - introduced in 2015 as a part of ES-6
//1.Scope - Block space{....} - inside the curly braces in function or in loop i.e. local scope
//Redeclaration like var keyword - not possible
//2.whenever u declare variable as let it connot be redeclared but it can be Re-initialized
//3.it is not mandatory to assign the value to the variable at the time of declaration
//4.HOisting- let keyword are hosted on the top of block where they are declared. but the value is not hoisted only declaration is hoisted
let let1="JS"

//var let1="TS" //we connot declare the "Let"same variable again 
{
    let let1=10; //local scope
    
    console.log(let1);
}

console.log(let1);


// const Keyword - introduced in 2015 as a part of ES-6
//1.Scope - Block space{....} - inside the curly braces in function or in loop i.e. local scope
//Redeclaration like var keyword - not possible
//2.whenever u declare variable as let it connot be redeclared and cannot be Re-initialized
//3. it is mandatory to  assign the value of the variable at the time of declaration
//4. hoisting- they are hoisted but hey are not initialized,
 //Accessing them before declaration line results in a ReferenceError due to "temoral Dead zone(TDZ)"

// const 
// 1. scope - Block scope {...}
// 2. Whenever you declare a variable using a const keyword it cannot be redeclared and it cannot be reinitialised.
// 3. Hoisting - const keyword variables are hoisted to the top of the block where
// they are declared. But the value is not hoisted. Only the declaration is hoisted.
// 4. It is mandatory to assign the value of a variable at the time of declaration

const abc = 10
//const abc = 20
//abc = 50



const a1=10;

{
    const a1=200;
    console.log(a1);
}
console.log(a1);



//============EXAMPLE=================

// Variable Hoisting (var)
console.log(myVar); // Output: undefined (declaration hoisted, initialized to undefined)
var myVar = 10;
console.log(myVar); // Output: 10

// Function Hoisting
myFunction(); // Output: "Hello from myFunction!" (function declaration fully hoisted)
function myFunction() {
  console.log("Hello from myFunction!");
}

// let/const and Temporal Dead Zone
// console.log(myLet); // Throws ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;