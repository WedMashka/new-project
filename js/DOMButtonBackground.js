"use strict"
let t = 1;
let t2 = 1;
// изменить фон на заданный
function changeBackground() {
   let x = document.getElementById('test__box');
   if (t % 2 == 0) {
      x.style.background = '';
      t++;
   } else {
      x.style.background = 'black';
      t++;
   }
}
//изменить фон на заданный
function changeBackground2() {
   let x = document.querySelector('body > div');
   if (t2 % 2 == 0) {
      x.style.background = '';
      t2++;
   } else {
      x.style.background = 'rgba(91, 79, 48, 0.5)';
      t2++;
   }
}
// изменить фон на желаемый
function changeFonBySelf() {
   let x33 = document.querySelector('.valueForChangeFone').value;
   if (x33) {
      let e = x33;
      let e1;
      if (e.includes('rgb(') || e.includes('RGB(') || e.includes('Rgb(') || e.includes('rgba(') || e.includes('RGBA(') || e.includes('Rgba(')) {
         e1 = e;
         document.querySelector('body > div').style.background = e1;
      } else if (e.includes('rgb') || e.includes('RGB') || e.includes('Rgb')) {
         // проверка на пробелы(удалить пробелы)
         e1 = e.split(' ').join('');
      } else if (e.includes('\(') && e.includes('\)')) {
         // если значение введено без RGB
         e1 = `rgb${x33}`;
      } else {
         e1 = e;
      }
      return document.querySelector('body > div').style.background = e1;
   }
   else {
      return document.querySelector('body > div').style.background = '';
   }
};

// добавить кнопку
function addButton() {
   let nameBtn = document.querySelector('.valueForNewBtn').value;
   let r = `<button class="test__box-button"> ${nameBtn} </button >`;
   let x126345 = document.querySelector('.test__box');
   return x126345.innerHTML += r;
};

// удалить кнопку
function dellButton() {
   let x = document.querySelector('.test__box');
   return x.removeChild(x.lastChild);
};

// тело HTML 
let x22 = document.querySelector('.test__box');
x22.innerHTML = '<p class="test__box-text"> Learning Dom</p> <button onclick="changeBackground()" class="test__box-button" id="button1">Изменить фон </button> <button onclick = "changeBackground2()" class="test__box-button" id = "button2"> Изменить фон </button> <button onclick="changeFonBySelf()" class="test__box-button" id="button2">Изменить цвет фона на свой </button>  <input type="text" class="valueForChangeFone" placeHolder="цвет в RGB формате" /> <button onclick = "addButton()" class="test__box-button" id = "button2" > добавить кнопку </button> <input type="text" class="valueForNewBtn" placeHolder="название кнопки" /> <button onclick = "dellButton()" class="test__box-button" id = "button2" > удалить кнопку </button>';
