"use strict"
/*  -----выводит в консоль ------*/
function s(x) {
   console.log(x);
}

function sh(r) {
   let result = r;
   return document.getElementById('result').innerHTML = result;
}
/*

let arr = ['ion', 'ivan', 'mary', 'valera',];

let newArr = [];

for (let i = 0; i < arr.length; i++){
   newArr.push(arr[i].length);
}


let arr2 = [];

for (let i = 0; i < arr.length; i++){
   arr2.push(arr[i].toUpperCase());
   arr2[i] = ` -  ${ arr2[i] }`;

}

function mapArr(arr, fn) {
   const res = [];
   for (let i = 0; i < arr.length; i++){
      res.push(fn(arr[i]));
   }
   return res;
}


const result = mapArr(arr, el);

s(result);

function el(el) {
   return el.length;
}
function toUp(el) {
   return el.toUpperCase();
}
const result2 = mapArr(arr, toUp);
s(result2);

function greeting(lastName) {
   return function (firstName) {
      return `Hellow world ${firstName} ${lastName}`;
   };
}

const testGreeting = greeting('iona');
s(testGreeting);
const fullName1 = testGreeting('smith');
s(fullName1);

const ix = greeting('iona')('smith2');
s(ix);

function question(job) {
   if (job === 'developer') {
      return function (name) {
         return `${name} what is javascrip?`;
      }
   } else {
      return function (name) {
         return `${name} you are not developer`;
      }
   };
}
let developer = question('developer');
s(developer);
s(developer('iona'));
let noDeveloper = question('noDeveloper');
s(noDeveloper);
s(noDeveloper('ivan'));*/

/*
function question2(job) {
   let jobDictionary = {
      developer: 'What is javascript?',
      teacher: 'what subject do you teach?',
      boss: 'How did you become the Boss?'
   }
   return function (name) {
      return `${name}, ${jobDictionary[job]}`;
   };
}

let developer5 = question2('teacher');
let io = developer5('iona');
s(io);
let oneUse = question2('teacher')('petya');
s(oneUse);
*/
/*
document.body.style.transition = "all 10s ease"
setTimeout(() => document.body.style.background = "red", 4000);
*/
