//Guia ejercicios FreeCodeCamp

//Ejercicio 1 - Comentarios en JS 

// Comentario de linea  

/* Comentario de bloque 
 o multilinea */

//Ejercicio 2 - Declaracion de variables

var myName ; 

//Ejercicio 3 - Asignacion de variables

var a;
a = 7;

//Ejercicio 4 - Declaracion de variables con asignacion

var a = 9;

//Ejercicio 5 - Declaracion de variables string

var myFirstName = "Lucas";
var myLastName = "Gauna";

//Ejercicio 6 - Understanding Uninitialized Variables

// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line
a = a + 1;
b = b + 5;
c = c + " String!";

//Ejercicio 7 - Understanding Case Sensitivity in Variables

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//Ejercicio 8 - Explore Differences Between the var and let Keywords

let catName = "Oliver";
let catSound = "Meow!";

//Ejercicio 8 - Declare a Read-Only Variable with the const Keyword

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

//Ejercicio 9 - Add Two Numbers with JavaScript

const sum = 10 + 10;

//Ejercicio 10 - Subtract One Number from Another with JavaScript

const difference = 45 - 33;

//Ejercicio 11 - Multiply Two Numbers with JavaScript

const product = 8 * 10;

//Ejercicio 12 - Divide One Number by Another with JavaScript

const quotient = 66 / 33;

//Ejercicio 13 - Increment a Number with JavaScript

let myVar = 87;

// Only change code below this line
myVar++;

//Ejercicio 14 - Decrement a Number with JavaScript

let myVar1 = 11;

// Only change code below this line
myVar1--;

//Ejercicio 15 - Create Decimal Numbers with JavaScript

var ourDecimal = 5.7;

// Only change code below this line
var myDecimal = 5.7;

//Ejercicio 16 - Multiply Two Decimals with JavaScript

var product1 = 2.0 * 2.5;

//Ejercicio 17 - Divide One Decimal by Another with JavaScript

var quotient1 = 4.4 / 2.0; // Change this line

//Ejercicio 18 - Finding a Remainder in JavaScript

const remainder = 11 % 3;

//Ejercicio 19 - Compound Assignment With Augmented Addition

let a1 = 3;
let b1 = 17;
let c1 = 12;

// Only change code below this line
a1 += 12;
b1 += 9;
c1 += 7;

//Ejercicio 20 - Compound Assignment With Augmented Subtraction

let a2 = 11;
let b2 = 9;
let c2 = 3;

// Only change code below this line
a2 -= 6;
b2 -= 15;
c2 -= 1;

//Ejercicio 21 - Compound Assignment With Augmented Multiplication

let a3 = 5;
let b3 = 12;
let c3 = 4.6;

// Only change code below this line
a3 *= 5 ;
b3 *= 3;
c3 *= 10;

//Ejercicio 22 - Compound Assignment With Augmented Division

let a4 = 48;
let b4 = 108;
let c4 = 33;

// Only change code below this line 

a4 /= 12;
b4 /= 4;
c4 /= 11;

//Ejercicio 23 - Escaping Literal Quotes in Strings

const myStr = "I am a \"double quoted\" string inside\" double quotes\""; // Change this line

//Ejercicio 24 - Quoting Strings with Single Quotes

const myStr1 = '<a href="http://www.example.com" target="_blank">Link</a>';

//Ejercicio 25 - Escape Sequences in Strings

const myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

//Ejercicio 26 - Concatenating Strings with Plus Operator

const myStr3 = "This is the start. " + "This is the end."; // Change this line

//Ejercicio 27 - Concatenating Strings with the Plus Equals Operator

let myStr4 = "This is the first sentence. ";
myStr4 += "This is the second sentence.";

//Ejercicio 28 - Constructing Strings with Variables

// Only change code below this line
const myName1 = "Lucas";
const myStr5 = "My name is " + myName1 + " and I am well!";

//Ejercicio 29 - Appending Variables to Strings

// Change code below this line
const someAdjective = "awesome";
let myStr6 = "Learning to code is ";

myStr6 += someAdjective;

//Ejercicio 30 - Find the Length of a String

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName.length;

//Ejercicio 31 - Use Bracket Notation to Find the First Character in a String

// Setup
let firstLetterOfLastName = "";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

//Ejercicio 32 - Understand String Immutability

// Setup
let myStr7 = "Jello World";

// Only change code below this line
myStr7 = "Hello World"; // Change this line
// Only change code above this line

//Ejercicio 33 - Use Bracket Notation to Find the Nth Character in a String

// Only change code below this line
let thirdLetterOfLastName = lastName[2]; // Change this line


//Ejercicio 34 - Use Bracket Notation to Find the Last Character in a String

// Only change code below this line
let lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

//Ejercicio 35 - Use Bracket Notation to Find the Nth-to-Last Character in a String

// Only change code below this line
let secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

//Ejercicio 36 - Word Blanks

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "the "+myNoun+" is "+myAdjective+" and it "+myVerb+" "+myAdverb; // Change this line
// Only change code above this line

//Ejercicio 37 - Store Multiple Values in one Variable using JavaScript Arrays

// Only change code below this line
const myArray = ["Lucas", 20];

//Ejercicio 38 - Nest one Array within Another Array

// Only change code below this line
const myArray1 = [["Lucas", 20], ["Lovelace", 19]];

//Ejercicio 39 - Access Array Data with Indexes

// Setup
const myArray2 = [50,60,70];
let myData = myArray2[0];

//Ejericio 40 - Modify Array Data With Indexes

// Setup
const myArray3 = [18,64,99];
myArray3[0] = 45;

//Ejercicio 41 - Access Multi-Dimensional Arrays With Indexes

// Setup
const myArray4 = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line
let myData1 = myArray4[2][1];

//Ejercicio 42 - Manipulate Arrays With push()

// Setup
const myArray5 = [["John", 23], ["cat", 2]];

myArray5.push(["dog",3])
