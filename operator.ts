// Date 08-07-2025 (Tuesday)

// Operators arec spacial symbol which used to perform different operations on variables 

//Operators- Symbols

// 1. Arithmatic operators
//2.  Comparison Operators
//3. Logical operators
//4. Assignment operators
//5. Turnary operator - Statement (if,else )



//// 1. Arithmatic operators - used to perform mathematical operations on numerical Datatypes
  /*  1. Addition
      2.Substraction
      3. multiplication
      4.Devision
      5.Modulus (%)
      6. Exponential  (**)
      7. increament(++)
      8.decreament(--)

      */

      let a= 10
      let b= 3
        console.log(a+b); // adds two numbers
        console.log("TS" +"JS"); //Concatenates the two Strings
        console.log(a - b); //substract two numbers
        console.log(a * b); //multiplies two numbers/
        console.log(a / b); // //divides one num to abnother numbers
        console.log(a % b); // Returns the remainder of division operation (10%3)=> 1

        //Exponential (**) raises a number to the power of another number
        console.log(a**b) // 10^3  = 1000 ==> 10*10*10 --> 10^5 = 10*10*10*10*10
        // //i.e. first number multiplied by itself by the number of times of 2nd value


        //Increament (++) -->  increase the value  of variable by one(1)

        let c=10;

        //pre increament (++c) // first variable value is increamented then the action will be performed
        // prepaid recharge // pay first then use the phone simcard
        
        console.log(++c); //c=10+1 Action is printing on the console // 11


        //post increament (c++)
        //Postpaid simcard // first perform the action then i'll increase the value of bill 
        let d=5;
        console.log(d++); // 5
        // after printing the value is increamented like d=5+1 = 6
        //and if u do again printing operation the output willl be 6
         console.log(d++); //6


    //Decreament (--) -->  decrease the value  of variable by one(-1)

        let p=10;

        //pre increament (++c) // first variable value is increamented then the action will be performed
        // prepaid recharge // pay first then use the phone simcard
        
        console.log("p is :",--p); //c=10-1 Action is printing on the console // 9


        //post increament (c++)
        //Postpaid simcard // first perform the action then i'll increase the value of bill 
        let q=5;
        console.log("q is :", q--); // 5
        // after printing the value is increamented like d=5-1 = 4
        //and if u do again printing operation the output willl be 4
         console.log("q is :",q--); //4

 console.log("*******************************************************************"); 

//******************************************************************************************** 
 
//2. Comparison operators - used to compare two values and reutrns the results in the form of true/false
/* 1.equal TO (==)
   2. not equal TO (!=) 
   3.Strict equalilty (===)
   4. Strict not equalilty (!==)
   5. geater than(>)
   6. geater than equal to(>=)
   7. less than (<)

   8. less than equal to (<=)

*/

//Equals ==

let var1 =10 // converted into String - implicilty - known as type coercion
let var2 = "10" //converting one datatype into other is called type coercion
//let var2 = Number("10") // Type conversion explicitly bcoz we have explicilty defined the type of data is number 
console.log(var1==var2);

// not equals (!==)
console.log(var1!=var2);


//but in the Strict equal it will not converts it checks values and Datatype of the variable are same  
console.log(var1===var2);

//Case sensitivity in strict equal ===
let m="String"
let n="String"
console.log(m===n); //true

//4. Strict In Equality (!==)
// if the values and datatypes of variable are not same it will returns true or else it will return as false 
let m1="str"
let n1="strr"
console.log("not equality ", m1!==n1); // not equality  true

//Greater than 
console.log(3>9) // false

//less than
console.log(3<2) // true

// less than equal to 
console.log(3<=5) // true
////
// greater than equal to 
console.log(3>=5) // false

console.log("*********************************************");

//4. Logical operators
// validate two diff conditions and then rreutnrs the value in form of bolean(True/False)

  //1.AND (&&)

  //true && true - true 
  //true && false - false 
  //false && true - false 
  // false && false - false

  console.log("AND (&&)", (10>7)&& (9>5)); // true
  console.log("AND (&&)", (10>7)&& (9<5)); // false
  console.log("AND (&&)", (10<7)&& (9<5)); // true
  console.log("AND (&&)", (10>700)&& (9>50)); // true


  //1.OR (||)

  //true && true - true 
  //true && false - true 
  //false && true - true 
  // false && false - true
  console.log("OR (||)", (10>7) || (9>5)); // true
  console.log("OR (||) ",(10>7) || (9<5)); // false
  console.log("OR (||)", (10<70) || (90<5)); // true
  console.log("OR (||)", (10<7) || (9<5)); // true

  //NOT(!) - if u dont know that how many times we need to scroll down to the page
  console.log("Not(!)", !(10>45)) //False ==>True (output)

//4. Assignment Operators (=) = used to assign the value to variable
let i=10;
i=i+4; //10+4 = 14
i +=5; //14+5 = 19

console.log(i)

i *= 5 //i = i*5
i -= 5 //i = i-5
i /= 5 //i = i/5
i += 5 //i = i+5