"use strict"
/*  -----выводит в консоль ------*/

function s(x) {
   console.log(x);
   s.count++;
}
s.count = 0;
function sh(r) {
   let result = r;
   return document.getElementById('result').textContent = result;
}
function sho(r) {
   let result = r;
   return document.getElementById('result').innerHTML = result2;
}

let inputValue = document.getElementById('input__value');
inputValue.addEventListener('input', function () {
   document.getElementById('result').textContent = this.value;
});


inputValue.addEventListener('input', function () {
   document.getElementById('result2').innerHTML = this.value;
});

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

/*
let map = new Map();
map.set('1', 'it es srtrong');
map.set(1, 'it is key number');
map.set(true, "it is true");
s(map.get(1));
s(map);
let useri = {
   name: 'iona',
   age: 32,
};
map.set(useri, 123);
s(map.get(useri));
map.set('sity', 'New York')
   .set('auto', 'lanos');
s(map);
let map2 = new Map([
   ['огурец', 350],
   ['огурецbig', 450],
   ['огурецsmall', 550],
]);
s(map2);
for (let someCucumber of map2.keys()) {
   s(someCucumber);
}

let lanos = {
   color: 'cherry',
   age: 2006,
   owners: 3,
}
s(lanos);
let lanosMap = new Map(Object.entries(lanos));
s(lanosMap);
let lanosAgein = Object.fromEntries(lanosMap);
s(lanosAgein);
*/



/*
let userIona = {
   name: 'iona',
   sity: 'New york'
};
let userIvan = {
   name: 'ivan',
   sity: 'Chikago'
};
let userValera = {
   name: 'valera',
   sity: 'Brooklin'
};
let valueGuests = new Set();

let guests = [
   userIona, userIvan, userValera, userIvan, userIvan, userValera,
]
s(guests[1].name);

for (let x of guests) {
 valueGuests.add(x.name);
};

s(valueGuests);
*/


/*
let user = {
   name: '',
   age: 0,
   showThisObj: function () {
      return console.log(this);
   },
   powers: function() {
      return s('');
   },
};
let student = {
   powers: function () {
      s(`My name is ${this.name} i am student`);
   },
   __proto__: user,
}
student.name = "iona";

student.powers();
*/


/*
let a = 'iona';
let b = '11851gyugyug';
let person = new User(a, b,);
s(person.validatePasswird());
let a1 = 'iona';
let a2 = 'qwertyuyth';
let a3 = 'nickRegul';
let firstStudent = new Student(a1, a2, a3);
s(firstStudent);
s(firstStudent.validatePasswird());
s(firstStudent.getCourses());
*/


/*
let obj = {
   name: 'iona',
   age: 32,
}

let newMap = new Map();
newMap.set('auto', 'lanos')
   .set('year', 2006);

s(Object.keys(obj));
s(Object.values(obj));
s(Object.entries(obj));

s(newMap.keys());
s(newMap.values());
s(newMap.entries());
*/

/*
let prices = {
   banana: 5,
   mango: 7,
   orange: 2,
};
s(Object.entries(prices));
s(prices)

let x = Object.entries(prices);
s(x);
let x2 = x.map(([key, value]) => [key, value * 2]);
s(x2);
let dublePrices = Object.fromEntries(x2);
s(dublePrices);
*/
/*
function showAllNodes() {
   for (let node of document.body.childNodes) {
   s(node);
   }
};

function showAllElements() {
   for(let el of document.body.children) {
   s(el);
   }
}

let arr = Array.from(document.body.childNodes).filter;

for (let prop of document.body.childNodes) {
   s(prop);
};
   */



//мигающий элемент
/*
let t = document.querySelector('.test__box > p');
setInterval(() => t.hidden = !t.hidden, 13);
*/
/*
let div1 = document.createElement('div');
let textNode = document.createTextNode('New Text from me');
document.getElementById('test__box').append(div1);
*/
/*--------Вставка элемента в Dom-------*/
/*
let divWithEtem = '<div> <p> New method create Element</p><input> <button id="button">Past Button </button></div>';

let dtt = document.querySelector('.test__box');
dtt.insertAdjacentHTML('beforebegin', divWithEtem);
*/
/*
let div3 = document.createElement('div');
div3.innerHTML = '<p>gvuygeuav</p> <input>';
*/
//let testBox = document.querySelector('.test__box');
//testBox.after(div3);
//div3.after(testBox);
//setTimeout(() => div3.remove(), 3000);
/*
testBox.classList.toggle('someClass');
testBox.classList.toggle('someClass');
sh(testBox.className);
sho(testBox.style.display);
s(testBox.style);
*/

/******-----Получить стиль элемента */
/*
let testBox = document.getElementById('test__box');
let testBoxStyle = getComputedStyle(testBox);
s(testBoxStyle.margin);
let body1 = getComputedStyle(document.body);
s(body1.color);
*/
/** --Даостаем данные их масивов и объектов -----*/
/*
let user = ['iona', 'smith',];
let [firstName, surname] = user;
s(user);
s(firstName);
s(surname);
s(user[0]);
let [model, dateOfMade, marka] = 'Lanos 2006 chevrolet'.split(' ');
s(model);
s(dateOfMade);
s(marka);
let userAndCar = {};
[userAndCar.name, userAndCar.age, userAndCar.carModel, userAndCar.dateOfMade] = 'iona 32 Lanos 2006'.split(' ');
s(userAndCar);
for (let [key, value] of Object.entries(userAndCar)) {
   s(`${key} - ${value}`);
}
let {carModel} = userAndCar;
s(carModel);
*/

/*-----Расчет сколько тебе лет*/
/*
let birthday = new Date('1991-01-09');
birthday = birthday.getTime();
s(birthday);
let dataNow = Date.now();
s(dataNow);
function oldYears(birthday, now) {
   let x;
   x = now - birthday;
   x = x / (1000 * 3600 * 24 * 365);
   return s(x);
};

oldYears(birthday, dataNow);
*/

/*---JSON -*-*/
/*
let student = {
   name: 'iona',
   age: 32,
   isAdmin: false,
   coursee: ['html', 'css', 'js'],
   wife: null,
   car: {
      brand: 'Chevrolet',
      model: 'Lanos',
      dadeOfMade: 2006,
   },
   hi: function () {console.log('')},
};
s(student);
s(student.car.model);
let jsonSAtudent = JSON.stringify(student);
s(jsonSAtudent);
let student3 = student;
let student2 = JSON.parse(jsonSAtudent);
s(student2);
student2.name = 'ivan';
student3.name = 'valera';
s(student2);
s(student);
*/
/*
let x;
function multiplication(x, n) {
   let result;
   if (n == 1) {
      return x;
   } else {
      return x *= multiplication(x, n - 1);
   }
};
x = multiplication(2, 5);
s(x);*/
/*
s(sumSalaries(company));

let company2 = {
   sales: [
      { name: 'john', salary: 1000 },
      { name: 'Alice', salary: 600 },
   ],
};
s(company2);
s(Object.values(company2));
*/












/**-------------Найти сумму элементов объекта---------------*/
/*
let company = {
   sales: [
      { name: 'john', salary: 1000 },
      { name: 'Alice', salary: 600 },
   ],
   development: {
      sites: [
         { name: 'peter', salary: 2000 },
         { name: 'Alex', salary: 1800 },
      ],
      internals: [
         { name: 'jack', salary: 1300 },
      ],
   },

};

s(company);

function sumSalaries(department) {
   if (Array.isArray(department)) {
      return department.reduce((prev, current) => prev + current.salary, 0);
   } else {
      let sum = 0;
      for (let subdep of Object.values(department)) {
         sum += sumSalaries(subdep);
      }
      return sum;
   }
};
*/

















/**-------Найти сумму элементов массива-------- */

/*
let someNumber = [1, 5, 9, 3, 7, 1, 8, 362, 8, 54, 6, 1];

// Первый способ
function sumArrow(ar) {
   let sum = 0;
   for (let i = 0; i < ar.length; i++){
       sum += ar[i];
   }
   return console.log(sum);
};

sumArrow(someNumber);

//Второй способ
function sumArrow2(ar) {
   let sum = 0;
   ar.forEach((item, index, arr) => {
      sum += item;
   });
   return console.log(sum);
};

sumArrow2(someNumber);
// Третий способ
function sumArrow3(ar) {
   let sum = 0;
   ar.map((item, index, arr) => {
      sum += item;
   });
   return console.log(sum);
};
sumArrow3(someNumber);

//Четвертый способ
function sumArrow4(ar) {
   let sum = 0;
   for (let el of ar) {
      sum += el;
   };
   return console.log(sum);
};
sumArrow4(someNumber);

//Пятый способ
function sumArrow5(ar) {
   let sum = 0;
   ar.reduce((prev, item) => {
      return sum = prev + item;
   })
   console.log(sum);
};

sumArrow5(someNumber);

//-Найти самый большой элемент и его позицию----- 
// Найти позицию в массиве
let someNumb = [1, 5, 9, 3, 7, 1, 8, 362, 8, 54, 6, 1];

//первый способ
function bigerNumb(ar) {
   let biger = 0;
   let position;
   for (let i = 0; i < ar.length; i++){
      ar[i];
      if (ar[i] > biger) {
         biger = ar[i];
         position = i;
      }
   }
   console.log(`самое большое число в массиве ${biger}, позиция  ${position}`);
};

bigerNumb(someNumb);

//Второй способ
function bigerNumb2(ar) {
   let bigNum = 0;
   let position;
   ar.forEach((item, index, ar) => {
      if (item > bigNum) {
         bigNum = item;
         position = index;
      }
   });
   console.log(`самое большое число в массиве ${bigNum}, позиция  ${position}`);
};
bigerNumb2(someNumb);

//третий способ
function bigerNumb3(ar) {
   let bigNum = 0;
   let position;
   ar.map((item, index, arr) => {
      if (item > bigNum) {
         bigNum = item;
         position = index;
      }
   });
   return console.log(`самое большое число в массиве ${bigNum}, позиция  ${position}`);
};
bigerNumb3(someNumb);

//Четвертый способ
function bigerNumb4(ar) {
   let bigNum = 0;
   let position;
   for (let el of ar) {
      if (el > bigNum) {
         bigNum = el;
         position = ar.indexOf(bigNum);
      }
   };
   return console.log(`самое большое число в массиве ${bigNum}, позиция  ${position}`);
};
bigerNumb4(someNumb);

//Пятый способ

function bigerNumb5(ar) {
      let b = ar.reduce((prev, item, index) => {
         if (item>prev[1]) {
            return [index, item];
         }
         else {
            return  prev;
         }
      }, [0, ar[0]]);
   return   console.log(`самое большое число в массиве ${b[1]}, позиция  ${b[0]}`);
}
bigerNumb5(someNumb);
*/



/*

let ar = [2, 2, 2, -5, 6, 9, -7, 1000, 1];
function sumAll(...args) {
   let sum = 0;
   for (let arg of args) sum += arg;
   return console.log(sum);
}
sumAll(...ar);
sumAll(1, 2, 5, 8, 25, 9);

function showName(firstName, lastName, ...titles) {
   console.log(firstName + ' ' + lastName);
   console.log(titles);

}

showName('иона', 'Кузнецов', 'lanos','dubovka'
)
*/

/*
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];



function oneSrt(a23) {
   let arro = [];
   for (let i = 0; i < a23.length; i++) {
      arro.push(...a23[i]);
   }
   return console.log(arro);
}
oneSrt(arr);
*/
/*
let usName = 'iona';
function sayHi() {
   console.log(`Hellow     ${usName}`);
 }
sayHi();
usName = 'io';
sayHi();
*/

/*
function makeWorker() {
   let name1 = 'kirill';
   return function () {
      console.log(name1);
   };
}

makeWorker();
let name1 = 'kira';
let work = makeWorker();
work();
*/






/*
function makeCountner() {
   let count = 0;
   return function () {
      return console.log(count++);
   };
}
let cou = makeCountner();
let count1 = makeCountner();
count1();
cou();
cou();
cou();
cou();
count1();
makeCountner();
makeCountner();
function f() {
   let valueF = Math.random();
   return function () {
      console.log(valueF);
   };
}
let t = f();
t();
let arrr = [f(), f(), f()];
let p = arrr[0];
p();
arrr[2]();
arrr[2]();
arrr[2]();
*/


/*
window.current5User = {
   name: 'iona',
};
s(current5User);

s(s.count);
let sayHi = function func(who) {
   if (who) {
      s(`Hellow ${who}`);
   } else {
      func('Guest');
   }
};
s(s.count);
sayHi();
sayHi('iona');
s(s.count);
setTimeout(s, 2000, 'ion');

*/





/*
let user = {
   name: 'iona',
   age: 25,
};
s(user);

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
s(descriptor);
s(JSON.stringify(descriptor));

Object.defineProperty(user, "name", {
   writable: false,
   enumerable: false,
   configurable: false,
});
let descriptor1 = Object.getOwnPropertyDescriptor(user, 'name');
s(descriptor1);
s(user);
*/




































/*
let user = {
   name: 'iona',
   surname: 'Smith',
   fullName1: function () {
      return `${this.name} ${this.surname}`;
   },

   get fullName() {
      return `${this.name} ${this.surname}`;
   },
   set fullName(value) {
      [this.name, this.surname] = value.split(' ');
   }
};
s(user);
s(user.fullName);
s(user.fullName1());
user.fullName = 'ivan Kuznetsov';
s(user);
s(user.fullName);
s(user.fullName1());

let user1 = {};

Object.defineProperty(user1, 'fullName', {
   get() {
      return `${this.name} ${this.surname} -  ${this.other}`;
   },
   set(value) {
      if (value.length < 4) {
         console.log('Name is too short')
         return '';
      } else {
         [this.name, this.surname, ...this.other] = value.split(' ');
      }
   }
})


s(user1);
user1.fullName = 'iona smith dubovka lanos acer';
s(user1);
s(user1.other);

*/
























/*

let t = new Date('1991, 01, 09');
let t5 = t.getTime();
s(t);
s(t5);


function User(name, birthday, ...other) {
   let t = birthday
   let t1 = new Date(t);
   let t2 = new Date;
   let t3;
   t3 = t2 - t1.getTime();
   let t4;
   t4 = t3 / (3600000 * 365.25 * 24);
   let t5;
   t5 = t4.toFixed(0);
   this.name = name;
   this.age = Number(t5);
   this.birthday = t1;
   this.other = other;
};
let valera = new User('valera', '2013 10 15', 'is cat', 'gray');
s(valera);
s(valera.other);

*/















































/*-------Объктно ориентированое программирование*/



/*
class User{
   constructor(name, birthday,...other) {
      this.name = name;
      this.birthday = birthday;
      this.other = other;
   }
   age(birthday) {
      let t = this.birthday;
      let t1 = new Date(t);
      let t2 = new Date;
      let t3;
      t3 = t2 - t1.getTime();
      let t4;
      t4 = t3 / (3600000 * 365.25 * 24);
      let t5;
      t5 = t4.toFixed(0);
      this.age = Number(t5);
      this.birthday = t1;
      console.log(t5);
   }
};
class Dreamer extends User{
   constructor(name, birthday, dream, ...other) {
      super(name, birthday,other);
      this.dream = dream
   }
};
class Children extends User{
   kindergarden() {
      return console.log(`Goes to kindergadte`);
   }
}
let ivan = new Children('ivan', '2019 08 26', 'Las Vegass', 'Volgograd', '18 kindergarten');
ivan.age();
ivan.kindergarden();
let iona = new Dreamer('iona', '1991 01 09', 'Florida', 'Volgograd', 'Lanos' );
s(iona.other);
iona.age();
let masha = new User('Mariya', '1988 12 30', 'Volgograd', 'archaeologist');
masha.age();
s(masha.other); 

*/
/*
class Article {
   constructor(title, date) {
      this.title = title;
      this.date = date;
   }
   static compare(articleA, articleB) {
      return articleA.date - articleB.date;
   }
}

let articles = [
   new Article('HTML', new Date(2022, 1, 25)),
   new Article('Css', new Date(2022, 1, 25)),
   new Article('JS', new Date(2022, 2, 24)),
];
s(articles[0].title);
s(articles[0].date);
articles.sort(Article.compare);
s(articles[0].title);
s(articles[1].title);
s(articles[2].title);

*/













/*Защищенное свойство в классе объекте */
/*

class CoffeeMachine {
   _waterAmount = 0;
   set waterAmount(value) {
      if (value < 0) {
         throw new Error('Negative amound of water');
      }
      this._waterAmount = value;
   }
   get waterAmount() {
      return this._waterAmount;
   }
   constructor(power){
      this._power = power;
   }
   get power() {
      return this._power;
   }
}
let coffeeMaker = new CoffeeMachine(100);
coffeeMaker.waterAmount = 10;
//coffeeMaker.waterAmount = -10;
s(coffeeMaker);
//coffeeMaker.power = 300;
s(coffeeMaker);


*/





























/*
class User{
   constructor() { }
   setNameOnThisClass(name) {
      this._name = name.trim().toLowerCase();
   }
}*/
/*
class User {
   constructor() { }
   set name(name) {
      this._name = name.trim().toLowerCase();
   }
   get name() {
      return this._name;
   }
}
let student = new User();
//student.setNameOnThisClass('Iona');
s(student);
student.name = 'Iona';
s(student);
*/



/*
s(this);
document.querySelector('.b-1').onclick = function () {
   s(this);
   if (this.style.background == 'red') {
      this.style.background = '';
   } else {
      this.style.background = 'red';
   }
}
document.querySelector('.b-2').addEventListener('click', ff1);
function ff1() {
   s(this);
   if (this.style.background == 'red') {
      this.style.background = '';
   } else {
      this.style.background = 'red';
   }
}
let h2 = document.querySelectorAll('h2');
for (let i = 0; i < h2.length; i++) {
   h2[i].onclick = ff1;
}

class U2{
   constructor(model) {
      this.model = model;
   }
}
s(U2);

let boat = new U2('744');
s(boat);*/

let b1 = document.querySelector('.b-1');
let b2 = document.querySelector('.b-2');
let b3 = document.querySelector('.b-3');

function test(color) {
   let x = color || 'orange';
   if (this.style.background) {
      this.style.background = '';
   } else {
      this.style.background = x;
   }
}
function test1() {
   if (this.style.background) {
      this.style.background = '';
   } else {
      this.style.background = 'gray';
   }
}

b2.onclick = function () {
   test.call(b1,);
}

b1.onclick = test1;
 
b3.onclick = function () {
   test.apply(b1,['purple', 'yelow']);
}