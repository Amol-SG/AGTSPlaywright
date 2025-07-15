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
// 4.  Arrow Function (Lambda function)

syntax 

(paramters)


*/

  let Sum=(a,b) => a+b;
  let sumresults=Sum(44,44)
console.log(sumresults);
