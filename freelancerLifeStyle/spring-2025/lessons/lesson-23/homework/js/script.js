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


const list2Item = document.querySelectorAll('.list-2__item');

if (list2Item.length) {
  list2Item.forEach((item, index) => item.innerHTML = `<span>Індекс: ${index}</span>`);
}


let newObject = document.createElement('div');
newObject.innerHTML = '<span class="big">Hello!</span>';

const objectElement = document.querySelector('.object');

//* вставити елемент ПЕРЕД відкриваючим тегом, ЗОВНІ;
objectElement.before(newObject);
objectElement.insertAdjacentElement('beforebegin', newObject);
//* вставити html ПЕРЕД відкриваючим тегом, ЗОВНІ;
objectElement.insertAdjacentHTML('beforebegin', '<span class="big">Hello!</span>');

//* вставити елемент ПІСЛЯ відкриваючого тега, ВСЕРЕДИНУ;
objectElement.prepend(newObject);
objectElement.insertAdjacentElement('afterbegin', newObject);
//* вставити html ПІСЛЯ відкриваючого тега, ВСЕРЕДИНУ;
objectElement.insertAdjacentHTML('afterbegin', '<span class="big">Hello!</span>');

//* вставити елемент ПЕРЕД закриваючим тегом, ВСЕРЕДИНУ;
objectElement.append(newObject);
objectElement.insertAdjacentElement('beforeend', newObject);
//* вставити html ПЕРЕД закриваючим тегом, ВСЕРЕДИНУ;
objectElement.insertAdjacentHTML('beforeend', '<span class="big">Hello!</span>');

//* вставити елемент ПІСЛЯ закриваючого тега, ЗОВНІ;
objectElement.after(newObject);
objectElement.insertAdjacentElement('afterend', newObject);
//* вставити html ПІСЛЯ закриваючого тега, ЗОВНІ;
objectElement.insertAdjacentHTML('afterend', '<span class="big">Hello!</span>');


const block = document.querySelector('.block');

if (block) {
  const blockClone = block.cloneNode(true);
  block.after(blockClone);
  block.remove();
}


const block2 = document.querySelector('.block2');

if (block2) {
  block2.className = 'object2';

  block2.classList.add('some-class');

  block2.classList.remove('some-class');

  block2.classList.toggle('some-class');

  console.log('block2.classList.contains("some-class") :>> ', block2.classList.contains('some-class'));

  block2.style.paddingLeft = `${20}px`;

  block2.style.paddingLeft = '';

  block2.style.cssText = `
    background-color: #000;
    padding: 10px 30px 10px 80px;
    border: 1px solid #000;
    color: #fff;
  `;

  const block2Style = getComputedStyle(block2);

  console.log('getComputedStyle(block2) :>> ', block2Style);

  const paddingTop = parseInt(block2Style.paddingTop);

  console.log('block2Style.paddingTop :>> ', block2Style.paddingTop);

  console.log('parseInt(block2Style.paddingTop) :>> ', paddingTop);

  const fontSize = parseInt(block2Style.fontSize);

  console.log('parseInt(block2Style.fontSize) :>> ', fontSize);
}


const block3Element = document.querySelector('.block3');

if (block3Element) {
  block3Element.setAttribute('title', 'This is block №3.');

  console.log('block3Element.hasAttribute("title") :>> ', block3Element.hasAttribute('title'));

  const attrTitleValue = block3Element.getAttribute('title');
  console.log('block3Element.getAttribute("title") :>> ', attrTitleValue);

  block3Element.removeAttribute('title');

  console.log('block3Element.hasAttribute("title") :>> ', block3Element.hasAttribute('title'));

  block3Element.dataset.someAttr = 'Text';
  console.log('block3Element.hasAttribute("data-some-attr") :>> ', block3Element.hasAttribute('data-some-attr'));
  console.log('block3Element.dataset.someAttr :>> ', block3Element.dataset.someAttr);

  console.log('block3Element.tagName :>> ', block3Element.tagName);
}


const block4Element = document.querySelector('.block4');

if (block4Element) {
  block4Element.hidden = true;
}


const mainElement = document.documentElement;
console.log('mainElement.clientWidth :>> ', mainElement.clientWidth);
console.log('mainElement.clientHeight :>> ', mainElement.clientHeight);

//* кількість прокручених пікселів:
console.log('window.scrollY :>> ', window.scrollY);
console.log('window.scrollX :>> ', window.scrollX);

//* прокрутка відносно поточного положення — window.scrollBy(left, top);
// Прокручиват на 200px вниз.
// window.scrollBy(0, 200);

//* прокрутка на вказані координати — window.scrollTo({options});
// window.scrollTo({
//   top: 500,
//   left: 0,
//   behavior: "smooth"
// });


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

  const isClassLoaded = bodyElement3.classList.contains('loaded');

  if (isClassLoaded) {
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
  // прокрутка до об'єкта — elem.scrollIntoView();
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