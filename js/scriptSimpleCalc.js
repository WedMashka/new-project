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
   let x;
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

   x = preResult.toFixed(10);
   if (isNaN(x)) {
      result = 'пожалуйста введите число';
   } else {
      result = x;
   }
   return document.getElementById('result').innerHTML = result;
   
}