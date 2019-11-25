import {doIt} from "./calculator.js";


let a,b;
a = parseInt(prompt("Please enter the value of a:"));
b = parseInt(prompt("Please enter the value of b:"));
 const str = prompt("Which functionality you want to perform (+,-,*,/)");
// const str = ["+","-", "*", "/"];
export const outP = doIt(a,b,str);
