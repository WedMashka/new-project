"use strict"
function distribute() {
   let x = document.getElementById('fullName').value;
   let mass = x.split(' ');
   let x1 = mass[0];
   let x2 = mass[1];
   let x3 = mass[2];
   let x4 = `${x1} ${x2[0]}. ${x3[0]}.`;
   document.getElementById('Surname').innerHTML = x1;
   document.getElementById('nameName').innerHTML = x2;
   document.getElementById('Patronymic').innerHTML = x3;
   document.getElementById('reduction').innerHTML = x4;
}