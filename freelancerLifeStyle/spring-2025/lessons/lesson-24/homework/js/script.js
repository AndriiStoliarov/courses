"use strict";

const mainElement = document.documentElement;
console.log('mainElement.clientWidth :>> ', mainElement.clientWidth);
console.log('mainElement.clientHeight :>> ', mainElement.clientHeight);

//* кількість прокручених пікселів:
console.log('window.scrollY :>> ', window.scrollY);
console.log('window.scrollX :>> ', window.scrollX);


const buttonElement = document.querySelector('.button');

if (buttonElement) {
  console.log('buttonElement.offsetParent :>> ', buttonElement.offsetParent);
  //* Позиція об'єкта (position):
  console.log('buttonElement.offsetTop :>> ', buttonElement.offsetTop);

  console.log('buttonElement.offsetLeft :>> ', buttonElement.offsetLeft);
  //* Загальні розміри елементу:
  console.log('buttonElement.offsetWidth :>> ', buttonElement.offsetWidth);

  console.log('buttonElement.offsetHeight :>> ', buttonElement.offsetHeight);

  // Координати відносно вікна браузера: getBoundingClientRect

  console.log('buttonElement.getBoundingClientRect().top :>> ', buttonElement.getBoundingClientRect().top);

  console.log('buttonElement.getBoundingClientRect().left :>> ', buttonElement.getBoundingClientRect().left);
}

// отримання об'єкта по координатах: document.elementFromPoint(x, y);
console.log('document.elementFromPoint(550, 0) :>> ', document.elementFromPoint(550, 0));


// Tasks 
// ===============================================================

// Задача №1.


// Задача №2.


// Задача №3.


// Задача №4.


// Задача №5.


// Задача №6.
