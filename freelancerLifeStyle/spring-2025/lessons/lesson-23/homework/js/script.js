"use strict";

// Задача №1.
// Отримати в константу елемент <body>.

const bodyElement = document.body;
if (bodyElement) {
  console.log('document.body :>> ', bodyElement);
}

// Задача №2.
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням).

function addList(amountListItem = 2) {
  let bodyElement2 = document.body;
  let ulElement = document.createElement('ul');

  if (bodyElement2) {
    for (let i = 0; i < amountListItem; i++) {
      const liElement = document.createElement('li');

      ulElement.append(liElement);
    }

    bodyElement.insertAdjacentElement('afterbegin', ulElement);
  }
}

addList(6);

// Задача №3.
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зелений.

let bodyElement3 = document.body;

if (bodyElement3) {
  bodyElement3.classList.add('loaded');
  const isLoaded = bodyElement3.classList.contains('loaded');

  if (isLoaded) {
    bodyElement3.style.color = 'green';
  }
}