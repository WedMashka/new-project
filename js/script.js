"use strict"

function showAboutMe() {
   let x = document.getElementById('aboutAdmin');
   if (x.classList.contains('about__admin')) {
      x.classList.remove('about__admin');
      x.classList.toggle('hidden__box');
   } else {
      x.classList.remove('hidden__box');
      x.classList.toggle('about__admin');
   }
}

