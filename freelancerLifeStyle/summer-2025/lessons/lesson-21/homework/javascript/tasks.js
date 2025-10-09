"use strict";

if (confirm("Почати тестування?")) {
  window.onload = function () {
    task1();
    task2();
    task3();
    task4();
    task5();
    task6();
    task7();
    task8();
    task9();
    task10();
    task11();
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
        resultItem.innerText = `${formatSingleDigitNumber(
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
    const resultItem5 = document.getElementById("resultItem-5");
    if (!resultItem5) return;

    const START_WORKING_DAY_TIME = "08:00";

    const [hours, minutes] = START_WORKING_DAY_TIME.split(":").map((figure) =>
      Number(figure)
    );

    const startTime = new Date();
    startTime.setHours(hours, minutes, 0, 0);

    const currentDatetime = new Date();
    const nextDatetime = new Date(currentDatetime);

    if (currentDatetime.getHours() <= 8) {
      nextDatetime.setDate(currentDatetime.getDate());
    } else if (currentDatetime.getDay() !== 5) {
      nextDatetime.setDate(currentDatetime.getDate() + 1);
    } else {
      nextDatetime.setDate(currentDatetime.getDate() + 3);
    }
    nextDatetime.setHours(hours, minutes, 0, 0);

    const difference = nextDatetime - currentDatetime;
    const differenceTotalSeconds = Math.floor(difference / 1000);
    const differenceMinutes = Math.floor((differenceTotalSeconds % 3600) / 60);
    const differenceHours = Math.floor(differenceTotalSeconds / 3600);

    resultItem5.innerText = `До початку робочого дня залишилось: ${formatSingleDigitNumber(
      differenceHours
    )} год., ${formatSingleDigitNumber(differenceMinutes)} хв.`;
  }

  // Задача 6. Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.
  function task6() {
    const resultItem6 = document.getElementById("resultItem-6");
    if (!resultItem6) return;

    const WORLD_TIMEZONES = {
      london: "Europe/London",
      paris: "Europe/Paris",
      sydney: "Australia/Sydney",
    };

    const londonTime = getCityTimeZone(WORLD_TIMEZONES.london);
    const [londonHours] = londonTime.split(":").map((figure) => Number(figure));

    const parisTime = getCityTimeZone(WORLD_TIMEZONES.paris);
    const [parisHours] = parisTime.split(":").map((figure) => Number(figure));

    const sydneyTime = getCityTimeZone(WORLD_TIMEZONES.sydney);
    const [sydneyHours] = sydneyTime.split(":").map((figure) => Number(figure));

    resultItem6.innerText = `У Лондоні: ${formatSingleDigitNumber(
      londonHours
    )} год., у Парижі: ${formatSingleDigitNumber(
      parisHours
    )} год., у Сіднеї: ${formatSingleDigitNumber(sydneyHours)} год..`;

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

  // Задача 7. Дано список студентів (ім’я і дата народження: у формі тексту (день.місяць.рік). Знайти найстаршого студента.
  function task7() {
    const resultItem7 = document.getElementById("resultItem-7");
    if (!resultItem7) return;

    const students = [
      { name: "Oleksandr Bondar", dob: "23.11.2000" },
      { name: "Iryna Melnyk", dob: "17.02.2003" },
      { name: "Dmytro Horbunov", dob: "30.06.2001" },
      { name: "Tetiana Horobets", dob: "08.01.2002" },
      { name: "Serhii Petrov", dob: "14.07.1999" },
      { name: "Kateryna Sydorenko", dob: "29.03.2000" },
      { name: "Yaroslav Koval", dob: "02.12.2002" },
      { name: "Mariia Lysenko", dob: "19.05.2001" },
      { name: "Mykola Tkachenko", dob: "25.08.1998" },
      { name: "Oksana Romanenko", dob: "11.10.1999" },
    ];

    console.log("Задача 7. Список студентів :>> ", students);

    if (students.length > 0) {
      const oldestStudent = students.reduce((previousStudent, student) => {
        const previousStudentDob = convertToDateObject(previousStudent.dob);
        const studentDob = convertToDateObject(student.dob);

        return previousStudentDob < studentDob ? previousStudent : student;
      });

      resultItem7.innerText = `Найстарший студент: ${oldestStudent.name}, дата народження: ${oldestStudent.dob}. Список студентів (дивіться консоль).`;
    }

    // функция, яка створює об'єкт типу Date на основі текстового формату.
    function convertToDateObject(dateString) {
      const [day, month, year] = dateString
        .split(".")
        .map((figure) => Number(figure));
      return new Date(year, month - 1, day);
    }
  }

  // Задача 8. Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач зробив рух мишкою.
  function task8() {
    const resultItem8 = document.getElementById("resultItem-8");
    if (!resultItem8) return;

    const start = Date.now();
    document.addEventListener("mousemove", handlerMousemove);

    function handlerMousemove() {
      const end = Date.now();
      const difference = end - start;
      const totalSeconds = Math.floor(difference / 1000);

      resultItem8.innerText = `${totalSeconds} сек..`;

      document.removeEventListener("mousemove", handlerMousemove);
    }
  }

  // Задача 9. Користувачка планувала оформила декретну відпустку на 200 днів (дата початку відпустки вводиться). Визначити чи відпустка вже триває і чи не закінчилась.
  function task9() {
    const resultItem9 = document.getElementById("resultItem-9");
    if (!resultItem9) return;

    const appointedDate = document.querySelector(".form__input--date");
    appointedDate.addEventListener("change", function (event) {
      const MATERNITY_LEAVE_DURATION = 200;

      const value = event.target.value;
      const [year, month, day] = value
        .split("-")
        .map((figure) => Number(figure));

      const startDate = new Date(year, month - 1, day);

      const timestamp =
        startDate.getTime() + MATERNITY_LEAVE_DURATION * 24 * 60 * 60 * 1000;
      const endDate = new Date(timestamp);

      const currentDate = new Date();

      if (currentDate < startDate) {
        resultItem9.innerText = "Відпустка ще не почалася.";
      } else if (currentDate > startDate && currentDate < endDate) {
        resultItem9.innerText = "Відпустка ще триває...";
      } else {
        resultItem9.innerText = "Відпустка вже закінчилася.";
      }
    });
  }

  // Задача 10. Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності. Визначити чи є він придатним на даний момент.
  function task10() {
    const resultItem10 = document.getElementById("resultItem-10");
    if (!resultItem10) return;

    const productionDate = document.querySelector(".form__input--yogurt-date");
    const shelfLifeValue = document.querySelector(
      ".form__input--yogurt-shelf-life"
    );

    let productionDateYogurt = "";

    productionDate.addEventListener("change", function (event) {
      const value = event.target.value;
      const [year, month, day] = value
        .split("-")
        .map((figure) => Number(figure));

      productionDateYogurt = new Date(year, month - 1, day);

      resultItem10.innerText = "";
      shelfLifeValue.value = 0;
    });

    shelfLifeValue.addEventListener("change", function (event) {
      const shelfLifeDays = event.target.value;

      const timestamp =
        productionDateYogurt.getTime() + shelfLifeDays * 24 * 60 * 60 * 1000;
      const expirationDate = new Date(timestamp);

      const currentDate = new Date();

      if (currentDate < productionDateYogurt) {
        resultItem10.innerText = "Йогурт знаходиться в процесі виробництва.";
      } else if (
        currentDate > productionDateYogurt &&
        currentDate < expirationDate
      ) {
        resultItem10.innerText = "Йогурт на даний момент э придатним.";
      } else {
        resultItem10.innerText = "Термін придатності йогурту вже закінчився.";
      }
    });
  }

  // Задача 11. Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і вставкою.
  function task11() {
    const resultItem11 = document.getElementById("resultItem-11");
    if (!resultItem11) return;

    const ELEMENTS_AMOUNT = 1000;
    const array = getRandomNumbersArray(ELEMENTS_AMOUNT, 1, 800);
    console.log("Задача 11. Масив з 1000 елементів від 1 до 800. :>> ", array);

    const durationBubbleSort = getDurationBubbleSort(array);
    const durationInsertSort = getDurationInsertSort(array);

    resultItem11.innerText = `Час сортування бульбашкою: ${durationBubbleSort} сек.. Час сортування вставкою: ${durationInsertSort} сек.. Масив з 1000 елементів від 1 до 800 (дивіться консоль).`;

    // функция, повертає час, який було витрачено на обмін елементів при бульбашковому сортуванні массива.
    function getDurationBubbleSort(array) {
      let arrayCopy = [...array];
      const start = new Date();
      let endIndexLimit = arrayCopy.length;
      let change = false;

      do {
        change = false;
        for (let index = 1; index < endIndexLimit; index++) {
          if (arrayCopy[index - 1] > arrayCopy[index]) {
            const temp = arrayCopy[index - 1];
            arrayCopy[index - 1] = arrayCopy[index];
            arrayCopy[index] = temp;
            change = true;
          }
        }
        endIndexLimit--;
      } while (change);

      const end = new Date();
      const difference = (end - start) / 1000;

      return difference;
    }

    // функция, повертає час, який було витрачено на обмін елементів при сортуванні массива вставкою.
    function getDurationInsertSort(array) {
      let arrayCopy = [...array];
      const start = new Date();

      for (let k = 1; k < arrayCopy.length; k++) {
        const currentElement = arrayCopy[k];
        let i = k - 1;
        while (i >= 0 && arrayCopy[i] > currentElement) {
          arrayCopy[i + 1] = arrayCopy[i];
          i = i - 1;
        }
        arrayCopy[i + 1] = currentElement;
      }

      const end = new Date();
      const difference = (end - start) / 1000;

      return difference;
    }

    // функція повертає масив заповнений випадковими числами в заданому інтервалі.
    function getRandomNumbersArray(sizeArray, numberFrom, numberTo) {
      return Array.from({ length: sizeArray }, () =>
        getRangeNumber(numberFrom, numberTo)
      );

      function getRangeNumber(numberFrom, numberTo) {
        const randomNumber =
          numberFrom + Math.floor(Math.random() * (numberTo - numberFrom + 1));
        return randomNumber;
      }
    }
  }
}
