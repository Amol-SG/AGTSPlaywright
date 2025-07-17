// function

//function login(username, password) // Parameter
//{
// fill the username
// fill passrd
// Click Login button
// }


// function calling 
//login(system, Amol@@@@) // Arguments



/*
// why we use function - reusability, maintainability, Duplicate code 

//lets say, we have 1000 TC's in framework 
// e.g. We have to login into application for each testcase 
// so we can reuse the login function for each TC by writing it once only

// lets say there is locator change for password field 
// So we can resolve that from only one place and it will effects in 1000 of our TC that is maintainability is easy
// reduce the Duplicate code 
// modularity
// maintainence
// Reusability


to to reduce these things we have introduced function

*/

/* Types of function 
1. Named function OR Function declaration - A function which will also have a name is known as named function or function Declaration

2. Anonymous funcion = Function expression

3. Arrow Function - ( => )

4. Constructor Fuction - will helps us in initializing values of object of a class 

5.Factory function - A function which return an object - Object - {key, value}

6. IIFE - Imediatly invoked function expression 

7. Default Parameter/ Arguments

8. Optional Parameter - Only avaialable in TYPESCRIPT

9. Rest Parameter 

*/

// 1. Named funcs

function add(a,b)
{

    console.log(a+b);
    
}

//Calling of function
add(12,24);

// FUnction which returns something

function add1(a:number ,b:number)
{
    let c=a+b;
    return c;
   
    

}
//add1(45,55);
let result=add1(44,60);
console.log(result);



//2. Anonymous function  = Storing the function inside the variable and call the function using variable name 

// if u want to the function to be used only once 

// below const fun is variable 
/*
Syntax

const fun= function(parameters)
{
//code
}



*/


// Single line of code
let addition = function(a, b) {
console.log(a+b);
 

}
//=>
addition(3, 2);

/*
// 4.  Arrow Function (Lambda function) - it is used to shorten the code

syntax 

(paramters)


*/

  let Sum=(a,b) => a+b;
  let sumresults=Sum(44,44)
console.log(sumresults);


//Contstructor function -



// IIFE -

(function (){

  console.log("Server is up and runnnig ");
  
})
//Calling IIFE funcs
()

// Example

 var cnt=0;

 function increase(){

  cnt++;
  console.log(cnt);
 }

 increase();

 (function(){

  var count=10;

  function increase(){

    console.log(count);
    
  }
 })

 ()



/*
 // Default paramter and optional paramter
 using default parameter we can achive method ovverloading 
 i.e. same function with different paramters

 */
 function a(name1: String ="Amol"){

  console.log(name1);
  
 }

 a();


function a1(a,b,c=20){

  console.log(a+b+c);
  
 }

 a1(10,20);


 function info(name, age?){
  if(age!==undefined){
    console.log(`your name is=${name} and age if = ${age}`);
  }
  else
  console.log(`your name is=${name}`);
}

 info("javascript");  //your name is=javascript
 info("javascript",21); //your name is=javascript and age if = 21


 // Rest paramters (...)

 function addition2(...num ) // here this num can accept any kind and any number of paramters
 {
  console.log(num);
  

 }

 addition2(10,20,30,"TS"); //[ 10, 20, 30, 'TS' ]
 addition2(10,20,30,40,50,60); // [10, 20, 30, 40, 50, 60 ]


console.log("**************************************************************");

 ///Array in Typescript
 // Start working on Coding questions given in Drive 
 



