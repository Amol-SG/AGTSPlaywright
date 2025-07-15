//Loops - Which will executes the same block of code multiple times

// five types of loops in TypesScript
/* 1. For Loop
    a. For loop - traditional for loop - if we know how many time we have to run the iteration there we can use for loop
    b. for .... of loop - Loop over the iterable objects like - arrays[1,2,3,4],  String 
    c. For ... In Loop -Looping over the proprties of object  - {Key : Value}

  2. While Loop - if we do not kow how many times we have to run the iteration.

  3. do-while loop- if we want to execute the loop atleast for one time before checking the condition

  //E.g  - While loop - u are trying to select a date from calender like 25 Dec 2025 
  // here we can go with the while loop
  //
  // E.g - Do-while loop -  check wheather the element is avaialble or not then again click and if not then wait 5000 ms then again try 
  // for those kind of validation we will be using Do-while loop.

  // check the product is avalable or not in zepto app if product is available then click product if not then wait for 500 ms and try again 

  */

  //1. For Loop 
  /* syntax -
  for(initialization; condition; increament or Decreament)
  {
    //code 
    break;
  }

  initialization - initialize the value of the variable to start the execution.
  let i=1; // this is the starting point of for loop

  Condition - condition wheather the loop should continue or not 
  i<=5; as soon as the condition becomes false the loop will terminate over there
  
  increament/ decreament - increament/ decreament the value of variable after each iteration
  i++
  */

  for (let i=1; i<6; i++)
  { // 1<6 1++ = 1+1=2, 2<6 3 5++=5+1 =6
    console.log(i); // 1,2,3,4,5,6
    console.log("**************************");
        if(i==5){
      break;

    }        
  }


  // 2. While loop 
  // Syntax:

/* 
  initialization;
  while (condition)
  {
  //code
  increament/decreament

  }
 */

  //e.g 
  // print numbers from 1....10
  let p=1;
  while( p<=10)
  {
    console.log(p);
    p++;   

  }
 console.log("===============================");
  // 3. Do- while loop - when u want to run the loop atleast once 
  //i.e. loop should be executed atleast one time

  /*
  initialization;
  do{
    //code
  increament/decreament  
  } while(condition)
  

  */
//e.g 1...10

let k=10;
do{

  console.log(k);
  k--;
}while(k>=1) // k!=0; k>0


console.log("========------------------------------=======================");

let n=5;
for (let i=1; i<=n; i++)
  {                  // 1<6 1++ = 1+1=2, 2<6 3 5++=5+1 =6
    //console.log("* "); // 1,2,3,4,5,6
     let str="* "  
     console.log(str.repeat(i));
      
  }

  