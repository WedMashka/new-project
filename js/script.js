"use strict"
function s(x) {
   console.log(x);
}
function sh(r) {
   let result = r;
   document.getElementById('result').innerHTML = result;
}
function showPecent() {
   let summa1 = Number(document.getElementById('valueSumm').value);
   let pecentOfYears = Number(document.getElementById('valuePecent').value);
   let timeInt = Number(document.getElementById('valueInterval').value);
   let xx;
   xx = (summa1 * (pecentOfYears / 100)) / 365;

   return document.getElementById('resultSumm').innerHTML = (xx * timeInt);
}

/*
let x;
let y;
let z;
x = Math.random();
y = Math.random();
z = Math.random();
s(x);
s(y);
s(z);
s(Math.max(x, y, z));
s(Math.min(x, y, z));
s(Math.pow(2, 4));
*/



/*----------funny game---------- */
/*
let guest = confirm('Do you want to play a little')

 let age;
function showOld (){
if (age> 0 && age<13.1){
   alert('мелочь паузатая');
} else if(age>13 && age<21.1 ){
   alert('беззаботная молодость');
} else if (age > 21 && age < 40.1) {
   alert('В расцвете сил');
} else if (age > 40 && age < 60.1) {
   alert('еще на многое способен');
} else if (age > 60 && age < 100) {
   alert('можно подводить итоги жизни');
} else if (age) {
   alert('ты не человек');
} 
}
function isNotNumber(){
   alert('please enter number');
}

function wq(){
   age = prompt ('how old&', '');
if (isNaN(age)){
   isNotNumber();
   wq();
} else{
   showOld();
}
}

if (guest == true){
   wq();
}else{
   alert('you are boring a person')
}
*/
/*------------------*/
/*----------
let x;
let y = 0;
for(;  ;){
   x = +prompt('enter number', '');
   if (!x) break;
   y +=  x;
}

alert('summ:' +y);
------- */
/*-------------------*/
/*----------
let x;
for (x = 1; x < 20; x++){
   if (x % 2 == 0) continue;
   console.log(x);
}
*/
/*
function ask(question, yes, no) {
   if (confirm(question)) {
      yes();
   } else {
      no();
   }
}
function showOK() {
   alert('You agreed');
}
function showCance() {
   alert('you refused');
}

ask('do you agree', showOK, showCance);*/
//let user = new Object();

/*
let user = {
   name: "iona",
   age: 32,
   isAdmin: false,
};

showValue(user);
showValue(user.name);
showValue(user.age);
showValue(user.isAdmin);
user.name = "masha";
showValue(user.name);
delete user.isAdmin;
showValue(user);
user["favorit color"] = "green";
showValue(user);
showValue(user["favorit color"]);
let color = "favorit color";
showValue(user[color]);
user[color] = "yelow";
showValue(user[color]);
function changeColor(x) {
   user[color] = x;
}
changeColor('blue');
showValue(user);
*/

/*
let user = {
   name: 'iona',
   age: 32,
}
let key = prompt("What do you want know about of object", "");
console.log(user);
console.log(user[key]);


let fruit = prompt("what fruit to buy", "");
let bag = {
    [fruit]: 5,
}
console.log(bag.cocos);
console.log(bag);
*/

/*
let fruit = prompt('input name of value', "");
let bag = {};
bag[fruit] = 9;
console.log(bag[fruit]);
console.log(bag);
*/
/*
let fruit = 'apple';
let bag = {
   [fruit + 'Computers']: 7,
}
showValue(bag);
*/


/*
function makeUser(name, age, sity) {
   return {
      name: name,
      age: age,
      sity: sity,
   }
}*/
/*
function newUser() {
   let user = makeUser('iona', 32, 'Chicago');
   console.log(user);
}
*/

/*
let user;
function newUser() {
   let x = prompt('enter name', "");
   let y = prompt('enter age', "");
   let z = prompt('enter sity', "");
   user = makeUser(x, y, z);
   console.log(user);
}

function showUser() {
   let x = `Name - ${user.name}, Age - ${user.age},  Sity - ${user.sity}`;
   alert(x);
   console.log(user);
}
function showName() {
   alert(user.name);
}
function showSity() {
   alert(user.sity);
}
function showAge() {
   alert(user.age);
}

``
*/
/*
let user = {
   name: 'Pasha',
   age: 29,
   sity: 'dubovka',
   "50": "usa",
   '40': 'germany',
   "7": 'russia',
}
*/
/*
console.log(x);
console.log('age' in x);
console.log('name' in x);
console.log('kdkjv' in x);
let key = "age";

console.log(key in x);
*/
/*
for (let x in user) {
   console.log(x);
   console.log(user[x]);
}
let admin = user;
admin.name = 'iona';
console.log(user['name']);
console.log(user.name);

let clone = {};
for (let prop in user) {
   clone[prop] = user[prop];
}
clone['favorit color'] = 'purple';
delete clone['50'];
delete clone['40'];
delete clone['7'];
*/
/*console.log(clone);
console.log(user);*/
/*
Object.assign(admin, user, clone);
console.log(admin);
console.log(clone);
console.log(user);

let useriona = Object.assign({}, clone);
console.log(useriona);
*/
/*
let user = {
   name: 'Iona',
   size: {
      width: 164,
      height: 4,
   }
}
*/
/*
s(user);
s(user.size);
s(user['size']);
*/

/*
let user = {
   name: 'iona',
   age: 32,
}

user.sayHi = function () {
   console.log('Hi');
};
user.sayHi();
user.s = s;
user.s('hellow');

user = {
   sayBy() {
      console.log('by by');
   },
   name: 'iona',
   age: 32,
}
user.sayBy();
s(user);
*/
/*
let user = {
   name: 'iona',
   age: 32,
   sayHi() {
      console.log(this.name);
   },
};
user.sayHi();
*/
/*
let user = {
   name: 'ivan',
   age: 4,
};
let admin = {
   name: 'iona',
   age: 32,
};

function userName() {
   console.log(this.name);
}
function userAge() {
   console.log(this.age);
}
admin.f = userName;
admin.f2 = userAge;
user.f = userName;
user.f2 = userAge;

admin.f();
admin.f2();
user.f();
user.f2();
*/
/*
let user = {
   name: 'iona',
   money: 999,
   age: 1000,
   [Symbol.toPrimitive](hint) {
      alert(`hint: ${hint}`);
      return hint == 'string' ? `{name: "${this.name}"}` : this.money;
   }
   
}
*/
/*
let user = {
   name: 'iona',
   money: 999,
   age: 1000,
   toString() {
      return this.name;
   },
   valueOf() {
      return this.money; 
   },
};
alert(user);
alert(+user);
alert(user + 500);
*/
/*
let x = {
   y: '5',
   toString() {
      return this.y;
   },
}

console.log(x);
console.log(x * 5);
console.log(x + 5);
*/








/*
function User(name, age, sity) {
   this.name = name;
   this.age = age;
   this.sity = sity;
   this.admin = false;
}
let user;

function newUser() {
   let x = prompt('enter name', "");
   let y = prompt('enter age', "");
   let z = prompt('enter sity', "");
   user = new User(x, y, z);
   console.log(user)
}

function showUser() {
   let x = `Name - ${user.name}, Age - ${user.age},  Sity - ${user.sity}`;
   alert(x);
   console.log(user);
}
function showName() {
   alert(user.name);
}
function showSity() {
   alert(user.sity);
}
function showAge() {
   alert(user.age);
}
*/
/*
let x = 'hi my friend';

let iona = {
   name: 'iona',
   money: 9.25487622,
   sayHi: function () {
      console.log(x.toUpperCase());
   },
   sowMoney: function () {
      console.log(this.money.toFixed(3));
   },
};
iona.sayHi();
iona.sowMoney();

let x2;
let y2;
x2 = 2;
y2 = "5";
console.log(x2 + y2);
console.log(x2 * y2);
console.log(x2 + y2);
y2 = Number(y2);
console.log(x2 + y2);
*/

/*-------*/
/* 
let fruits = ['aple', 'pineaple', 'peach', 'mango',];
s(fruits);
s(fruits[0]);
s(fruits[1]);
s(fruits[2]);
s(fruits[3]);

fruits[2] = 'cocos';
s(fruits[2]);
s(fruits.length);
*/

/*
let user = {
   name: 'iona',
   age: 32,
   sity: 'New York',
};

function sayHi() {
  console.log('Hellow!');
};

let family = ['Mary', 'Ivann', 'Valera',];

let userIona = [user, sayHi, family,];

s(userIona);

s(userIona.pop());
s(userIona);
userIona.push(family);
s(userIona);
s(userIona);
userIona.shift();
s(userIona);
userIona.unshift(user);
s(userIona);
userIona.push('Otradnoe', 'Volgograd', 'New York');
s(userIona);
userIona.unshift('iona', 'admin',);
s(userIona);

let copUserIona;
copUserIona = userIona;
s(copUserIona === userIona);

s(copUserIona);
s(copUserIona.length);
copUserIona.splice(0, 2);
s(copUserIona.length);
s(userIona);
userIona.splice(2, 0, 'admin');
s(userIona);
copUserIona = userIona.slice();
s('-------------------------');
copUserIona.splice(2, 1);
userIona.splice(-3, 3,)
userIona.splice(2, 1);
userIona.push('Dubovka');
s(copUserIona);
s(userIona);
s('-------------------------');
for (let i = 0; i < userIona.length; i++){
 s(userIona[i]);
};
s('-------------------------');

for (let usi of userIona) {
   s(usi);
};

for (let key in user) {
   s(user[key]);
}
s('-------------------------');

let z1 = [[1, 2, 3,], [4, 5, 6,], [7, 8, 9,],];

s(z1[2][2]);
s(z1.slice(0,1));
*/

/*
let ringOfLord = ['Bilbo', 'Gandalf', 'Nazgul', 'Tranduil', 'Azock'];
ringOfLord.forEach(s);

s(ringOfLord.indexOf('Nazgul', 1));
s(ringOfLord.lastIndexOf('Tranduil', 2));
s(ringOfLord.includes('Azock', 1));
let users = [
   { id: 1, name: 'iona', },
   { id: 2, name: 'mary', },
   { id: 3, name: 'ivan', },
   { id: 4, name: 'valera', },
];
users.forEach(s);

let user1 = users.find(x => x.id == 1);
s(user1);

s(users.findIndex(x => x.id == 1));
users.map(s);
*/
/*
let range1 = [1, 2, 3,  4, 5];
let range = {
   from: 1,
   to: 9,
};
s(range);
s(range1);
for (let x of range1) {
  s(x) 
}
range[Symbol.iterator] = function () {
   return {
      current: this.from,
      last: this.to,
      next(){
         if(this.current <= this.last){
            return {
               done: false, value: this.current++
            };
         } else {
            return { done: true };
         }
      }
   }
}
for (let x of range) {
   s(x)
};
for (let char of 'test') {
   s(char);
};
let str = 'Hellow';
let interator = str[Symbol.iterator]();
while (true) {
   let result = interator.next();
   if (result.done) break;
   s(result.value);
}
*/
let map = new Map();
map.set('1', 'str');
map.set(1, 'num1');
map.set(true, 'bool1');

s(map);