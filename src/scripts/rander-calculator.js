import {sum} from "./calculator.js";


let a,b;
a = prompt("Please enter the value of a:");
b = prompt("Please enter the value of b:");
// func = Prompt ("Which functionality you want to perform (+,-,*,/)");

export const outP = sum(parseInt(a),parseInt(b));

