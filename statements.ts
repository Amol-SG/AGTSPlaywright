// Statement  - alows us to execute block of code {....} with diff conditions

//1 if Statement 
//2. if else 
//3. if else if stmt
//4. nested if else stmt
//5. Switch stmt
//6. ternary operator - if else stmt

//1 if Statement - only handles the Positive scenario i.e. if condition is true then only execute block of code
/*
if(condition){
//code
}

*/

//eg
let age=20;
if(age>18)
{

    console.log("Age is gretaer than 18");
}


//2. if else 

let ages=18;
if(ages>18)
{
    console.log("you are elegible for vote")
}
else
{
    console.log("you are not eligible for voting");
}


//3. If else if - it is slower bcoz all the conditions are checked one by one

//scenario - in Automation we have multiple browsers written 
//like chrome, edge, safari
//When to use if else if
    // when u have Ranges (>90)
    //Logical AND &&
    // Multiple datatype for comparison like Name="Amol", Salary=1000000;
    // here we have diff Datatypes like String and number 
    // in these cases u cannot go for switch stmt u need to use if else if stmt


/*
//syntax: 

if(condition1)
{

}
else if(condition2)
{

}
else if(condition3)
{

}
else {

}
*/
//E.g

let browser="Chrome"

if(browser=="Chrome")
    {
        console.log("Browser is Chrome");        
    }
    else if(browser=="Edge")
        {
            console.log("Broser is edge");            
        }
        else if(browser=="Safari")
        {
            console.log("Browser is Safari");            
        }
        else
        {
            console.log("Invalid browser name provided");           
        }

        //4. Switch - Switch is bit of faster than If else if stmt 
                    // it is faster bcoz it does not checks all the conditions one by one, it direclty jumps to 
                    // the matching value to the expression

                    //Break Keyword is mandatory to write otherwise it gives error
                    // Switch uses === strict equal for comparison

        //Syntax:
        /*
        switch(expression)
        {
            case "Chrome":
                 //COde to be executed if the cas1 value is matching;

            break;

            case "Edge":
                //COde to be executed if the cas2 value is matching;
            
            break;

            case "Safari":
                //COde to be executed if the cas2 value is matching;
            
            break;

            default:
                //Code to be executed if any of the condition does not met

        }

        */


        let browserName="Chrome"

        switch(browserName)
        {
            case "Chrome":
                console.log("Laucnh chrome from switch");
             //break;   

            case "Safari":
                console.log("Launch Safari from switch");
             //break; 
            
              case "Edge":
                console.log("Launch the Edge from switch");
             //break;  

             default:
                console.log("Invalid browser name from switch");

                
        }

// 5. Nested if else statement
/* Syntax :
if(true)
    {
        if(true)
        {

        }else
        {

        }
    }
    else
    {

    }

    e.g.
    */


    let score=90;
    if(score>50)
    {
        if(score>=90)
        {
            console.log("grade A");       
        }else{
            if(score>=80){
                console.log("grade B");                
            }
            else{
                if(score>=70){
                    console.log("Grade C");
                }else{
                        console.log("Grade D");
                        
                    }                    
            }
        }
    }
    else
    {
        console.log("Student is failed");
        
    }


    //6.Ternary Operator

    // The ternary operator is shorthand way of writing if else stmt
    //it consist of three parts
    //1.condition, the value if the condition is true and the value if the condition is false

    //All the parts which is 2nd and 3rd separated with (:)

  //condition  ternary if true   false
  //(10>2)     ?         10    :  5

  age=17;
  let results=(age>=18) ? "you are eligible to vote" : "you are not eligible for vote";
  console.log(results);
  


  // when u need to validate simple cndition if else then go to turnary operator
  // when u need to validate if else if condition if else if then go to nested if else if
  //when u need to validate simple cndition then go to switch stmt 

  //Loops 
  //Arrays
  //functions
  //Objects