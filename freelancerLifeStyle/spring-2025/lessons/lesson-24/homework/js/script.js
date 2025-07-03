"use strict";

function someFunction() {
  console.log('Go go go!');
}

setTimeout(() => {
  someFunction();
}, 10000);


async function getMeteoData() {
  const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&forecast_days=1', {});

  if (response.ok) {
    let responseResult = await response.json();
    initData(responseResult);
  } else {
    console.log("error");
  }
}

getMeteoData();

function initData(data) {
  console.log(data);

  data.hourly.temperature_2m.forEach(temperature => console.log('temperature :>> ', temperature));
}


// Tasks 
// ===============================================================

// Задача №1.
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active, при повторному кліку прибрати клас.

document.addEventListener("click", documentAction);

function documentAction(event) {
  const targetElement = event.target;

  if (targetElement.closest('.item')) {
    changeClass(targetElement);
  }
}

function changeClass(element) {
  element.classList.toggle('active');
}

//* Або
// const itemElements = document.querySelectorAll('.item');

// if (itemElements.length) {
//   itemElements.forEach(itemElement => {
//     itemElement.addEventListener("click", () => itemElement.classList.toggle('active'));
//   });
// }

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

const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  // Відсоток від розміру об'єкту. При появі якого спрацьовує подія Де 0 це будь яка поява, 1 це повна поява об'кта в в'юпорті.
  threshold: 0.2,
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    const currentElement = entry.target;

    if (entry.isIntersecting) {
      showNumbers(currentElement);

      observer.unobserve(currentElement);
    }
  })
};

const observer = new IntersectionObserver(callback, options);

const target = document.querySelector(".item-2");

if (target) {
  observer.observe(target);
}

function showNumbers(element) {
  const delay = +element.dataset.delay;
  const amount = +element.dataset.amount;

  let i = 1;
  let timer = setInterval(() => {
    element.textContent = `${i}`;

    i === amount ? clearInterval(timer) : ++i;
  }, delay);
}