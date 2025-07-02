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
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active, при повторному кліку прибрати клас.

const itemElements = document.querySelectorAll('.item');

if (itemElements.length) {
  itemElements.forEach(itemElement => {
    itemElement.addEventListener("click", () => document.documentElement.classList.toggle('active'));
  });
}

// Задача №2.
// Дано в css/scss: body прозорий.
// При повному завантаженню сторінки додати клас до body, який прибирає прозорість.

window.addEventListener("load", () => document.body.classList.add('body--opacity-off'));

//? Задача №3.
// Дано в html: header main footer.
// При наведенні курсору на header змінювати колір фону у footer. Коли курсор йде з header повертати початковий фон для footer.

//? background animation
const headerElement = document.querySelector('header');

if (headerElement) {
  headerElement.addEventListener("mouseenter", changeFooterColor);
  headerElement.addEventListener("mouseleave", changeFooterColor);
}

function changeFooterColor() {
  const footerElement = document.querySelector('footer');

  if (footerElement) {
    footerElement.classList.toggle('footer--bg-color');
  }
}

// Задача №4.
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію, яка будує інтервал, який буде змінювати контент в елементі item, виводячи цифру, яка збільшується на одиницю: 1 2 3 ... і т.д. Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.Функція має запускатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

const item2Element = document.querySelector(".item-2");

if (item2Element) {
  window.addEventListener("scroll", showNumbers);

  function showNumbers(e) {
    if (item2Element.getBoundingClientRect().top - window.innerHeight <= 0) {
      console.log('Видно!')
      // e.preventDefault();
    }

    console.log(window.scrollY)
  }
}


// const delay = +currentElement.dataset.delay;
// const amount = +currentElement.dataset.amount;

// console.log('delay :>> ', delay);
// console.log('amount :>> ', amount);


// const target = document.querySelector(".item-2");

// if (target) {
//   const options = {
//     root: null,
//     rootMargin: "0px 0px 0px 0px",
//     // Відсоток від розміру об'єкту. При появі якого спрацьовує подія Де 0 це будь яка поява, 1 це повна поява об'кта в в'юпорті.
//     threshold: 0.2,
//   };

//   const callback = (entries, observer) => {
//     entries.forEach(entry => {
//       const currentElement = entry.target;

//       if (entry.isIntersecting) {
//         const delay = +currentElement.dataset.delay;
//         const amount = +currentElement.dataset.amount;
//         console.log('entry.isIntersecting :>> ', entry.isIntersecting);
//         console.log('я тебе бачу')
//         console.log('delay :>> ', delay);
//         console.log('amount :>> ', amount);

//         entry.preventDefault();
//       }
//     })
//   };

//   const observer = new IntersectionObserver(callback, options);
//   observer.observe(target);
// };




// function showNumbers() {

// }