// Сучасний (Строгий) режим
"use strict"

//========================================================================================================================================================
/*
Задача №4
Створіть функцію, яка повертає результат ділення числа
a на число b з додаванням рядка "Результат ділення: "
Викличте функцію передаючі різні значення,
у тому числі не передаючи зовсім.
Функція не має повертати NaN, Infinite або помилку
*/

// function returnResult(a = 0, b = 0) {
// 	const result = a / b

// 	if (Number.isNaN(result)) {
// 		return 'Результат NaN'
// 	}

// 	if (Math.abs(result) === Infinity) {
// 		return 'Результат Infinity'
// 	}
// 		return `Результат ділення: ${result}`


// isFinite повертає true, якщо значення — звичайне число,
// яке не є Infinity, -Infinity або NaN.
// return !Number.isFinite(result) ? 'Помилка' : `Результат ділення: ${result}`
// }

// console.log(returnResult(8, 0))

//========================================================================================================================================================


// WINDOW
// Отримання ширини вікна браузера (в'юпорта)
// const windowWidth = window.innerWidth
// console.log(typeof windowWidth)
// console.log(windowWidth)

// Отримання висоти вікна браузера (в'юпорта)
// const windowHeight = window.innerHeight
// console.log(typeof windowHeight)
// console.log(windowHeight)
/*
if (windowWidth >= 768) {
	// якісь дії
}
*/

// BOM
// Navigator

// Дані про браузер
// console.log(navigator.userAgent)

// Який в нас браузер
/*
const userAgent = navigator.userAgent
if (userAgent.includes("Chrome")) {
	console.log('Браузер Хром')
} else if (userAgent.includes("Firefox")) {
	console.log('Браузер Firefox')
}
*/

// Інформація про систему
/*
console.log(navigator.userAgentData)
// Мобілка?
console.log(navigator.userAgentData.mobile)
// Платформа
console.log(navigator.userAgentData.platform)
*/
/*
if (navigator.userAgentData.mobile) {
	// юзер з мобілки...
}
*/

// Location
// Адресний рядок браузера
/*
console.log(location)
console.log(location.href)
console.log(location.hash)
*/

// const getHash = location.hash
// console.log(getHash)
// const cleanHash = getHash.replace("#", "")
// console.log(cleanHash)

// if (cleanHash === "popup") {
// 	// ....
// }


// Перенаправлення користувача
/*
console.log(location.href)
location.href += 'contacts.html'
*/

// Alert
// alert('Повідомлення')

// Сonfirm
// const confirmAnswer = confirm("Запитання")
// console.log(confirmAnswer)

// if (confirmAnswer) {
// 	//якщо так
// } else {
// 	//якщо ні
// }
//  confirmAnswer ? якщо так : якщо ні

//Prompt
/*
const promptAnswer = prompt("Запитання")
console.log(promptAnswer)

if (promptAnswer === null) {
	console.log('Юзер натиснув cancel')
} else if (promptAnswer) {
	console.log(`Відповідь користувача: ${promptAnswer}`)
} else {
	console.log(`Користувач не надав відповідь`)
}*/


// Document Object Model (DOM)
// Об'ектна модель документу

// Навігація по документу
// До тегу html
// const htmlElement = document.documentElement
// console.log(htmlElement)


// До тегу head
/*
const headElement = document.head
console.log(headElement)
*/

// До тегу body
/*
const bodyElement = document.body
console.log(bodyElement)
*/

// Перший та останній дочірній елемент
/*
const bodyElement = document.body
const firstBodyChild = bodyElement.firstElementChild
const lastBodyChild = bodyElement.lastElementChild
console.log(firstBodyChild)
console.log(lastBodyChild)
*/


// Усі дочірні елементи (Колекція)
// const bodyElement = document.body
// Колекція дочірніх елементів
// const childNodes = bodyElement.children
// console.log(childNodes)

/*
for (let index = 0; index < childNodes.length; index++) {
	console.log(childNodes[index])
}
*/

// For ... of метод перебору для колекцій
// for (let childNode of childNodes) {
// 	console.log(childNode)
// }


// !!! Найчастіше використовується !!!
// Пошук та отримання довільного елементу

// Оримання одного першого знайденого об'єкту
/*
const liElement = document.querySelector(`li`)
console.log(liElement)
*/
// Чи щось знайдено?
/*
if (liElement) {
	console.log('Працює')
	// тоді працюємо...
	liElement.style.color = `red`
	// ...
	// ...
	// ...
	// ...
}
*/


// Оримання списку (статична колекція)
// знайдених об'єктів
/*
const liElements = document.querySelectorAll(`li`)
console.log(liElements)
console.log(liElements.length)


// Чи щось знайдено?
if (liElements.length) { // !!!! Перевіряємо саме length при querySelectorAll
	// тоді працюємо...
	liElements.forEach((liElement, index) => {
		console.log(liElement)
	})
}
*/

// Селектор класів
// !!! Обов'язково використовуємо крапку для імені класу
/*
const liElements = document.querySelectorAll(`.list__item`)
console.log(liElements)
*/

// Уточнення пошуку
// const liElements = document.querySelectorAll(`.list__item.active`)
// console.log(liElements)


// Усі об'єкти які мають в назві класу __item
/*
const liElements = document.querySelectorAll(`[class*="__item"]`)
console.log(liElements)
*/

// Селектор ID
/*
const someElement = document.querySelector('#some-id')
console.log(someElement)
*/


// Навігація до батьківських
// та сусідніх елементів
// const activeElement = document.querySelector(`.list__item.active`)
// if (activeElement) {
// 	const activeElementPreviousSibling = activeElement.previousElementSibling
// 	const activeElementNextSibling = activeElement.nextElementSibling
// 	console.log(activeElementPreviousSibling)
// 	console.log(activeElementNextSibling)
// }


// Отримання батьківського об'єкту
/*
const listElement = document.querySelector('.list')
if (listElement) {
	const parentElement = listElement.parentElement
	console.log(parentElement)
}
*/

// Closest
// (Перевірка наявності батьківського об'єкту)
// ! Шукає не тільки батьківський об'єкт
// а й перевіряє чи є вказаний селектор у самого об'єкту
/*
const listItem = document.querySelector(`.list__item`)
if (listItem) {
	console.log(listItem)
	const parentElement = listItem.closest(`.active`)
	console.log(parentElement)
	if (parentElement) {
		console.log('Знайдено!')
	}
}
*/

// Зміна документу
// innerHTML - дає змогу отримати те що всередені об'єкту
// включно з тегами.
// Також дозволяє перезаписувати контент в середені об'єкту
// const listItems = document.querySelectorAll('.list__item')
// if (listItems.length) {
// 	listItems.forEach((listItem, index) => {
// 		// console.log(listItem.innerHTML)
// 		// listItem.innerHTML = `<span> Привіт! №${index}</span>`
// 		// listItem.innerHTML += `<span> Привіт! №${index}</span>`
// 	})
// }

// textContent дає змогу отримати текст всередені об'єкту.
// Також дозволяє перезаписувати текст в середені об'єкту
// const listItems = document.querySelectorAll('.list__item')
//if (listItems.length) {
//listItems.forEach(listItem => {
// console.log(listItem.textContent)
// listItem.textContent = '<span>Привіт!</span>'
//})
//}


// Створення об'єктів
//let newElement = document.createElement(`div`) // Тут тільки тег
//newElement.innerHTML = `<span>Привіт!</span>`
// console.log(newElement)

// const page = document.querySelector('.page')
// if (page) {
// Вставка створеного об'єкту
// Перед
// page.before(newElement)
// Після
// page.after(newElement)
// Всередену на початок
// page.prepend(newElement)
// Всередену в кінець
// page.append(newElement)
//}

// insertAdjacentHTML/Text/Element

// const page = document.querySelector('.page')
/*
let template = ``
template += `<div class="block">`
if (page) {
	template += `<span>Сторінка існує!</span>`
}
template += `</div>`

console.log(template)
*/
// page.insertAdjacentHTML("beforeend", template)
// page.insertAdjacentText("afterend", template)
// page.insertAdjacentElement("beforeend", newElement)

/*
"beforebegin" – вставити html безпосередньо перед .page,
"afterbegin" – вставити html на початок .page,
"beforeend" – вставити html в кінець .page,
"afterend" – вставити html безпосередньо після .page.
*/
/*
page.insertAdjacentHTML("beforeend",
	`<div class= "about" >...</div>`
)
*/

// Перенесення елементу
// const list = document.querySelector('.list')
// const header = document.querySelector('.header')
// if (list && header) {
// 	header.insertAdjacentElement('beforeend', list)
// }


// Клонування елементу
// cloneNode() - клонує сам об'єкт
// coneNode(true) - клонує об'єкт з вмістом
// const page = document.querySelector('.page')
// if (page) {
//const clonePage = page.cloneNode()
// const clonePage = page.cloneNode(true)
// console.log(clonePage)
// }


// Видалення об'єкту
/*
const list = document.querySelector('.list')
list.remove()
*/

// Стилі та класи
// className classList

// className - перезапис класу

// const list = document.querySelector('.list')
// // ....
// // ...
// if (list) {
// 	list.className += ' some-class red'
// }


// classList - метод роботи з класами
// const list = document.querySelector('.list')
// const listItem = document.querySelector('.list__item')
// if (list && listItem) {
// !!! НЕ використовуємо крапку для імені класу
// list.classList.add(`red`)
// listItem.classList.remove('active')
// listItem.classList.toggle('active')
// listItem.classList.toggle('active', false)
// list.classList.contains('active')

/*
if (listItem.classList.contains('active')) {
	console.log('Клас є!')
}
*/
// }


// Управління стилями
// style
// const list = document.querySelector('.list')
// if (list) {
/*
list.style.color = `black`
list.style.paddingTop = `50px`
list.style.fontSize = `50px`
list.style.backgroundColor = `red`
*/

// Задання багатьох стілів
/*
list.style.cssText += `
	padding-top: 20px;
	background-color: #794f45;
	font-size: 30px;
`*/
// }

// Отримання стилю (його значення)
// getComputedStyle
// const list = document.querySelector('.list')
// if (list) {
// 	const listStyle = getComputedStyle(list)
// 	//const listStyleFontSize = listStyle.fontSize
// 	//const listStyleFontSize = parseFloat(listStyle.fontSize)
// 	//console.log(listStyleFontSize)
// }

// Робота з атрибутами
// const list = document.querySelector('.list')
// if (list) {
// Перевіряємо наявність атрибута.
// list.hasAttribute('name')
// console.log(list.hasAttribute('class'))
// Получаємо значення атрибута.
// list.getAttribute('name')
// console.log(list.getAttribute('class'))
// Встановлюємо значення атрибута.
// list.setAttribute('name', 'value')
// list.setAttribute(`title`, `Підказка`)
// Видаляємо атрибут.
// list.removeAttribute('name')
// list.removeAttribute('class')

/*
if (list.hasAttribute('class')) {
	console.log('Class Є!')
}
*/
// }


// DATA атирибути
// Завжди буде повертатись рядок
// Унарний оператор + переведе рядок в число
// Краще використовувати parseFloat

// const list = document.querySelector('.list')
// if (list) {
// 	const speed = parseFloat(list.dataset.speed) || 500
// 	const direction = list.dataset.direction || "left"
// 	const scrollSpeed = +list.dataset.scrollSpeed || 100

// 	console.log(speed);
// }

// Або:
/*
if (list.hasAttribute('data-scroll-animate')) {

} else {

}
*/
/*
if (direction === 'left') {

} else {

}
*/

// Корисні властивості
// const list = document.querySelector('.list')
// if (list) {
// 	// Отримання імені тегу
// 	// console.log(list.tagName)

// 	if (list.tagName === "UL") {
// 		console.log('Це UL')
// 	}
// }


// Атрибут hidden
// list.hidden = true

// Розміри та кординати

// Розміри вікна браузера (з полосами прокрутки)
// об'єкт window
// const windowWidth = window.innerWidth
// const windowHeight = window.innerHeight
// console.log(windowWidth)
// console.log(windowHeight)


// Розміри вікна браузера (без прокрутки)
// об'єкт body
// clientWidth clientHeight

// const mainElement = document.body;
// const windowClientWidth = mainElement.clientWidth
// const windowClientHeight = mainElement.clientHeight
// console.log(windowClientWidth)
// console.log(windowClientHeight)


// Кількість прокручений пікселів
// об'єкт window
// const windowScrollTop = window.scrollY
// const windowScrollLeft = window.scrollX
// console.log(windowScrollTop)
// console.log(windowScrollLeft)


// window.scrollTo({ options })
// прокрутка на вказані кординати

// window.scrollTo({
// 	top: 1000,
// 	left: 0,
// 	behavior: "smooth" // Safari не працює
// })


// elem.scrollIntoView();
// Проктурка до об'єкту

// const list = document.querySelector('.list')
// function scrollToBlock(element) {
// 	const block = element.dataset.scroll || "start"
// 	element.scrollIntoView({
// 		//"start", "center", "end". За замовчуванням "start".
// 		block: block,
// 		//"start", "center", "end" чи "nearest". За замовчуванням "nearest".
// 		inline: "nearest",
// 		behavior: "smooth"
// 	});
// }
// scrollToBlock(list)


// Позиція об'єкта
// offsetLeft та offsetTop
// offsetParent - батьківський об'єкт
// (transform, або position absolute, relative, fixed чи sticky)
// відносно якого рахується кординати
// const list = document.querySelector('.list')
// if (list) {
// 	const listLeftPos = list.offsetLeft
// 	const listTopPos = list.offsetTop
// 	console.log(listLeftPos)
// 	console.log(listTopPos)
// }


// Кординати відносно вікна браузера
// getBoundingClientRect
/*
const list = document.querySelector('.list')
if (list) {
	console.log(list.getBoundingClientRect().top)
	console.log(list.getBoundingClientRect().left)
}*/

// Загальні розміри елемента (без зовнішніх відступів)
// offsetWidth и offsetHeight
/*
const list = document.querySelector('.list')
if (list) {
	console.log(list.offsetWidth)
	console.log(list.offsetHeight)
}*/
/*
// Intersection Observer API
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
*/


// NodeList, HTMLCollection, Array
// const list = document.querySelector('.list')
// const listItems = document.querySelectorAll('.list__item')
// const listItems = list.children
// list.insertAdjacentHTML('beforeend', `<li class="list__item">5</li>`)

// console.log(listItems)

// Перевід колекції в масив
// const listItemsArray = Array.from(listItems)
// console.log(listItemsArray)
