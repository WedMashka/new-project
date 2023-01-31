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
   let xxx;
   xxx = ((summa1 * (pecentOfYears / 100)) / 365) * timeInt;
   if (isNaN(xxx)) {
      xx = "Пожалуйста введите цифры";
   } else {
      xx = xxx;
   } 
   return document.getElementById('resultSumm').innerHTML = xx;
}
