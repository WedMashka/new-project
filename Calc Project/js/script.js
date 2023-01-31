"use strict"
let op;
let result;
let preResult;
function plus() {
   op = '+';
}
function minus() {
   op = '-';
}
function times() {
   op = '*';
}
function devide() {
   op = '/';
}

function method() {
   let num1 = Number(document.getElementById('num1').value);
   let num2 = Number(document.getElementById('num2').value);
   switch (op) {
      case '+':
         preResult = num1 + num2;
         break;
      case '-':
         preResult = num1 - num2;
         break;
      case '*':
         preResult = num1 * num2;
         break;
      case '/':
         preResult = num1 / num2;
         break;
   }
   result = preResult.toFixed(10);
   return document.getElementById('result').innerHTML = result;
}