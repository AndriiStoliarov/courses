"use strict";

// if (confirm("Почати тестування?")) {
window.onload = function () {
  // const resultItem = document.getElementById("resultItem");
  // const ulTag = document.createElement("ul");
  // ulTag.classList.add("list");
  // resultItem.append(ulTag);

  task1();
  task2();
  task3();
  task4();
  task5();
  task6();
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
  const resultItem2 = document.getElementById("resultItem-2");
  const appointedTime = document.querySelector(".form__input--time");
  appointedTime.addEventListener("change", function (event) {
    const PROCEDURE_DURATION = 30;

    const value = event.target.value;
    const [hours, minutes] = value.split(":").map((figure) => Number(figure));

    const startTime = new Date();
    startTime.setHours(hours, minutes, 0, 0);

    const timestamp = startTime.getTime() + PROCEDURE_DURATION * 60 * 1000;
    const endTime = new Date(timestamp);

    const currentTime = new Date();

    if (currentTime < startTime) {
      resultItem2.innerText = "Процедура ще не почалася.";
    } else if (currentTime > startTime && currentTime < endTime) {
      resultItem2.innerText = "Процедура ще триває...";
    } else {
      resultItem2.innerText = "Процедура вже закінчилася.";
    }
  });
}

// Задача 3. Визначити скільки залишилось до кінця робочого дня (до 17:00).
function task3() {
  const END_WORKING_DAY_TIME = "17:00";

  const [hours, minutes] = END_WORKING_DAY_TIME.split(":").map((figure) =>
    Number(figure)
  );

  const endTime = new Date();
  endTime.setHours(hours, minutes, 0, 0);

  const currentTime = new Date();

  const difference = endTime - currentTime;
  const differenceTotalSeconds = Math.floor(difference / 1000);
  const differenceMinutes = Math.floor((differenceTotalSeconds % 3600) / 60);
  const differenceHours = Math.floor(differenceTotalSeconds / 3600);

  const resultItem3 = document.getElementById("resultItem-3");

  if (difference > 0) {
    resultItem3.innerText = `До кінця робочого дня залишилось: ${formatSingleDigitNumber(
      differenceHours
    )} год., ${formatSingleDigitNumber(differenceMinutes)} хв.`;
  } else {
    resultItem3.innerText = "Робочий день вже закінчився.";
  }
}

// Задача 4. Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і час у межах	поточного тижня (від понеділка 0 год., 0 хв., до неділі 23 год. 59 хв.).
function task4() {
  const resultItem4 = document.getElementById("resultItem-4");
  if (!resultItem4) return;

  const appointedTime = document.querySelector(".form__input--datetime");
  appointedTime.addEventListener("change", function (event) {
    const value = event.target.value;
    const appointedDatetime = new Date(value);

    if (isDateInCurrentWeek(appointedDatetime)) {
      resultItem4.innerText =
        "Вказана дата і час знаходиться у межах поточного тижня.";
    } else {
      resultItem4.innerText =
        "Вказана дата і час знаходиться за межами поточного тижня.";
    }
  });

  function isDateInCurrentWeek(dateToCheck) {
    const currentDatetime = new Date();
    // неділя = 0, робимо її 7
    const dayOfWeek =
      currentDatetime.getDay() === 0 ? 7 : currentDatetime.getDay();

    const startOfWeek = new Date(currentDatetime);
    startOfWeek.setHours(0, 0, 0, 0);
    startOfWeek.setDate(currentDatetime.getDate() - dayOfWeek + 1);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    return dateToCheck >= startOfWeek && dateToCheck <= endOfWeek;
  }
}

// Задача 5. При заході на сайт вітати користувача або відображати повідомлення про те, скільки хвилин залишилось до початку робочого дня (початок о 8:00).
function task5() {
  const START_WORKING_DAY_TIME = "08:00";

  const [hours, minutes] = START_WORKING_DAY_TIME.split(":").map((figure) =>
    Number(figure)
  );

  const startTime = new Date();
  startTime.setHours(hours, minutes, 0, 0);

  const currentDatetime = new Date();
  const nextDatetime = new Date(currentDatetime);

  if (currentDatetime.getDay() !== 5) {
    nextDatetime.setDate(currentDatetime.getDate() + 1);
  } else {
    nextDatetime.setDate(currentDatetime.getDate() + 3);
  }
  nextDatetime.setHours(hours, minutes, 0, 0);

  const difference = nextDatetime - currentDatetime;
  const differenceTotalSeconds = Math.floor(difference / 1000);
  const differenceMinutes = Math.floor((differenceTotalSeconds % 3600) / 60);
  const differenceHours = Math.floor(differenceTotalSeconds / 3600);

  const resultItem5 = document.getElementById("resultItem-5");
  resultItem5.innerText = `До початку робочого дня залишилось: ${formatSingleDigitNumber(
    differenceHours
  )} год., ${formatSingleDigitNumber(differenceMinutes)} хв.`;
}

// Задача 6. Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.
function task6() {
  const WORLD_TIMEZONES = {
    london: "Europe/London",
    paris: "Europe/Paris",
    sydney: "Australia/Sydney",
  };

  const london = getCityTimeZone(WORLD_TIMEZONES.london);
  console.log("london :>> ", london);

  function getCityTimeZone(cityTimeZone) {
    const currentTime = new Date();

    const city = currentTime.toLocaleString("uk-UA", {
      timeZone: cityTimeZone,
      hour: "2-digit",
      minute: "2-digit",
    });

    return city;
  }
}
// }
