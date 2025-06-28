"use strict";


console.log('window.innerWidth :>> ', window.innerWidth);

console.log('window.innerHeight :>> ', window.innerHeight);

console.log('navigator.userAgent :>> ', navigator.userAgent);

//! 'platform' is deprecated. 
console.log('navigator.platform :>> ', window.navigator.platform); // window.navigator

console.log('location.href :>> ', location.href); // window.location

console.log('window.location.origin :>> ', window.location.origin);

console.log('window.location.pathname :>> ', window.location.pathname);

// alert('Повідомлення...');

// let confirmAnswer = confirm('Ви задоволені проведеним уроком?');
// console.log(confirmAnswer);

// let promptAnswer = prompt('Ви задоволені проведеним уроком?');
// console.log(promptAnswer);

console.log('document.documentElement :>> ', document.documentElement);

console.log('document.head :>> ', document.head);

console.log('document.body :>> ', document.body);

console.log('document.body.firstElementChild :>> ', document.body.firstElementChild);

console.log('document.body.lastElementChild :>> ', document.body.lastElementChild);

console.log('document.body.children :>> ', document.body.children);

const childNodes = document.body.children;
// перебір колекції за допомогою циклу for
for (let i = 0; i < childNodes.length; ++i) {
  console.log('childNodes[i] :>> ', childNodes[i]);
}
// перебір колекції за допомогою методу для перебору колекції
for (let childNode of childNodes) {
  console.log('childNode :>> ', childNode);
}

console.log('document.body.previousElementSibling :>> ', document.body.previousElementSibling);

console.log('document.body.nextElementSibling :>> ', document.body.nextElementSibling);

console.log('document.body.parentElement :>> ', document.body.parentElement);

const someObjects = document.querySelectorAll('.list__item');
someObjects.forEach(someObject => someObject.style.color = 'red');


const listItem = document.querySelector('.list__item');

const isListParent = listItem.closest('.list');

if (isListParent) {
  console.log('Так, є.');
} else {
  console.log('Ні, немає.');
}









// Tasks 
// ===============================================================

// Задача №1.
// Отримати в константу елемент <body>.

const bodyElement = document.body;
// if (bodyElement) {
// console.log('document.body :>> ', bodyElement);
// }

// Задача №2.
// Написати функцію, яка додає в <body> список UL з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням).

function addList(amountListItem = 2) {
  const bodyElement2 = document.body;
  let ulElement = document.createElement('ul');

  if (bodyElement2) {
    for (let i = 0; i < amountListItem; i++) {
      const liElement = document.createElement('li');

      ulElement.append(liElement);
    }

    bodyElement2.insertAdjacentElement('afterbegin', ulElement);
  }
}

addList(6);

// Задача №3.
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body> і, якщо є, додати стиль кольору тесту зелений.

const bodyElement3 = document.body;

if (bodyElement3) {
  bodyElement3.classList.add('loaded');

  const isLoaded = bodyElement3.classList.contains('loaded');

  if (isLoaded) {
    bodyElement3.style.color = 'green';
  }
}

// Задача №4.
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

const itemElements = document.querySelectorAll('.item');

if (itemElements.length) {
  itemElements.forEach((item, index) => {
    item.classList.add('active');
    item.textContent = `Елемент № ${index + 1}`;
  });
}

// Задача №5.
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки.

const button = document.querySelector('.button');

function scrollToBlock(element) {
  element.scrollIntoView({
    block: "center",
    inline: "nearest",
    behavior: "smooth"
  });
}

if (button) {
  scrollToBlock(button);
}

// Задача №6.
// Дано в html: посилання з класом link.
// Треба додати до посилання дата атрибут зі значенням 100. Поім отримати значення трибуту, та, якщо значення меньше 200 пофарбувати колір тексту посилання в червоний.

const link = document.querySelector('.link');

if (link) {
  link.dataset.linkAttr = '100';

  const linkAttrValue = +link.dataset.linkAttr;

  if (linkAttrValue < 200) {
    link.style.color = 'red';
  }
}