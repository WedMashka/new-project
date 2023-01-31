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
