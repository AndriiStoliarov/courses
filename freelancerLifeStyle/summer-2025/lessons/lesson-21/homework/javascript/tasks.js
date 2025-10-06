"use strict";

// if (confirm("Почати тестування?")) {
window.onload = function () {
  // const resultItem = document.getElementById("resultItem");
  // const ulTag = document.createElement("ul");
  // ulTag.classList.add("list");
  // resultItem.append(ulTag);

  task1();
  task2();
};

// Задача 1. Виводити на екран скільки хвилин користувач вже на сайті.
function task1() {
  const start = Date.now();

  setInterval(() => {
    const current = Date.now();
    const difference = current - start;

    const totalSeconds = Math.floor(difference / 1000);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const hours = Math.floor(totalSeconds / 3600);

    const resultItem = document.getElementById("resultItem-1");
    if (resultItem) {
      resultItem.innerText = `Користувач знаходиться на сайті: ${formatSingleDigitNumber(
        hours
      )} год., ${formatSingleDigitNumber(
        minutes
      )} хв., ${formatSingleDigitNumber(seconds)} секунд.`;
    }
  }, 1000);
}
// функція, яка форматує однозначне число в формат двозначного шляхом додаванням 0 попереду.
function formatSingleDigitNumber(value) {
  return value < 10 ? "0" + value : value;
}

// Задача 2. Вводимо час початку процедури (процедура триває 30 хв.). Визначити, чи процедура ще триває.
function task2() {
  const start = Date.now();

  const appointedTime = document.querySelector(".form__input--time");
  console.log("appointedTime :>> ", appointedTime);
  appointedTime.addEventListener("change", function (event) {
    console.log("event :>> ", event.target.value);
  });

  const resultItem = document.getElementById("resultItem-2");
  if (resultItem) {
    // resultItem.innerText = `Користувач знаходиться на сайті: ${formatSingleDigitNumber(
    //   hours
    // )} год., ${formatSingleDigitNumber(minutes)} хв., ${formatSingleDigitNumber(
    //   seconds
    // )} секунд.`;
  }
}

// function createLiTag(title) {
//   const liTag = document.createElement("li");
//   liTag.classList.add("list__item");

//   const pTag = document.createElement("p");

//   const spanTag = document.createElement("span");
//   spanTag.classList.add("list__title");
//   spanTag.innerText = title;

//   pTag.append(spanTag);

//   liTag.append(pTag);

//   return liTag;
// }
// }
