// DataTypes = Which defines what kind of data a variable is storing

//E.g We have bottle we store water or sometime other liquid like juice or petrol

// 2 types of datatypes

//1.. Primitive datatypes - only have a single data
//1/boolean
//2.null
//3.number
//4.string
//5.undefined

//6.Union(combination of both ) - (number | string))
//7.any - any kind of datatypes can be declared 
//8.void- function

/////bannsuav


//2.. Non-Primitive datatypes- which have more than one value

//1.array
//2.Object
//3.Tuples
//4.functions


//SyntaX//
// TS - Keyword(var /let /const) VariableName: DataType(Optional)= Value - TS

// JS - Keyword(var /let /const) VariableName= Value - JS

//In JS and TS it is Optional to provide/write a Datatype bcoz if u did not JS and TS datatype it will automatically identify Dattype of Data


////1.number - //used to store numeric Type of data/values Both integer (90,-45) and floating point number as well (5.2343, 56.754497)

let num: number =1000;
let num1 : number=2426.6543


let num2 =2426.6543 // Not defined datatype explicitly

//Type Annotation and Type Inference
//1.Type Annotation -
//Whenever u have defined Datatype explicilty i.e. u have written it called Type Annotation 
//2.Type Inference -
//Javascript and typescript will automatically identify the datatype of a variable depending upon the value assigned to a  Variable is called Type Inference


// - Type annotation is only defined in Typescript file


//There are two methods to check datatypes of variable 
//1.By using "typeOf" 

console.log(typeof(num1))
console.log(typeof(num2))

//2. Hover over the variable Name - it will display u the dattype of varaible
//-------------------------------------------------------------------------------

////1.String - Combination of characters , - Hello, Text, String
//There are 3 different ways to declare String in JS TS
/*
//1.SingleQuote ('') - String Literel

2.DoubleleQuote ("") -String Literel

3. Backtick (` `) - Template Leterel - used to create multi line Strings or String parameter


*/
let singleQuote : string = 'J' // char in java is not there it consideres all chars and Chars as String only
let doubleleQuote : string ="TypeScript" // 

let backtick=`This is a typescript`

//***backtick Usage */
// 1.For multi line String Declaration 

let multiline=String`This is a typescript where u can
 declare string in multiple lines using backtick`

 //2.For String parameterization - ${variableName}


 let age =90
 let greetings = "Hello, your age is ${age}"; // if u use double quotes for string and used double quotes it will not be able to identify the variable 
 // So for this we only need to use backtick and this is know as String parameterization
 let greetingss = `Hello, your age is ${age}` 

 // We will be using this backtick in Datadriven testing in playwright

 

 console.log(greetings);
 console.log(greetingss);

 //--------------------------------------------------------------------------------------------------------------------

 //3. Boolean - used to store True or False values

 let isActive : boolean= true
 let isloggedInn = false

 //Used at the time of different Assertions 
//-----------------------------------------------------------------------------------------------------
 
//4. null - used to represent the absence of the value or non-existence of object i.e. null means nothing
let emtpyValue : null = null
let emtpyValue1 = null

//issue in the null with JS and TS
console.log(typeof(emtpyValue)) //this gives ouptput as object and this is the bug available inside JS and TS

//------------------------------------------------------------------------------------------------------

// 5. undefined - this Datatype is used to represent the variable which is declared but not been aassigned a value 
let undefinedValue= 0;
 console.log(undefinedValue)

let undefinedValue1 :any //undefined value not assigned any value
 //console.log(undefinedValue1) // if u not assign anything it will rakes it as undefined
console.log(typeof(undefinedValue1))

//------------------------------------------------------------------------------------------------------
//6.  Union - it is used to define a variable that can hold combination of datatypes or multiple Datatypes of values
// u can use it in API response or when taking Data from any file where we don't sure what will be the Datatype


let unionValue : (number |string | boolean) = 10
unionValue = "Hellooo"
unionValue = true

console.log(unionValue) //true
/*
let unionValue = (number | String | boolean | any) =20
unionValue=10
unionValue='Hello'
unionValue=true
*/

////------------------------------------------------------------------------------------------------------
//7. Any - used to define a variable that can hold any type of value including null and undefined
//it is a way of opt--out checking
let anyValue :any = 10;
anyValue= 20;
anyValue=true
anyValue=null
anyValue=undefined //undefined
//------------------------------------------------------------------------------------------------------
//if we are dependent on backend logic then we should use Datatypes
//but at realtime playwright we dont use any of the datatypes



//------------------------------------------------------------------------------------------------------
