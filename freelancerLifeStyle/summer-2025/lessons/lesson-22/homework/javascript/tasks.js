"use strict";

// if (confirm("Почати тестування?")) {
window.onload = function () {
  const resultItem = document.getElementById("resultItem");
  if (!resultItem) return;

  const strings = [
    "hello",
    "abc123",
    "2025",
    "no_digits",
    "user1",
    "room 404",
    "price: 100$",
    "test",
    "v2.0",
    "ID007",
    "zero0",
    "plaintext",
  ];

  resultItem.append(showArray(strings, "Вхідний масив рядків"));

  task1(strings);
  task2(strings);
  task3(strings);
  task4(strings);
  // task5();
  // task6();
  // task7();
  // task8();
  // task9();
  // task10();
  // task11();
};

// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
function task1(array) {
  const resultItem1 = document.getElementById("resultItem-1");
  if (!resultItem1) return;

  const exp = /\d/;
  const newArray = array.filter((string) => exp.test(string));

  resultItem1.append(showArray(newArray, "Масив рядків у яких є цифри"));
}
/**
 * Функція, яка виводить масив.
 */
function showArray(array, caption) {
  const spanParentTag = document.createElement("span");

  const spanTagStart = document.createElement("span");
  spanTagStart.innerText = `${caption}: [`;
  spanParentTag.append(spanTagStart);
  // for (const item of array) {
  //   const spanTag = document.createElement("span");
  //   spanTag.innerText = item;
  //   spanParentTag.append(spanTag);
  // }
  const string = array.join(", ");
  spanParentTag.append(string);

  const spanTagEnd = document.createElement("span");
  spanTagEnd.innerText = "].";
  spanParentTag.append(spanTagEnd);

  return spanParentTag;
}

// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
function task2(array) {
  const resultItem2 = document.getElementById("resultItem-2");
  if (!resultItem2) return;

  const exp = /^\D*$/;
  const newArray = array.filter((string) => exp.test(string));

  resultItem2.append(showArray(newArray, "Масив рядків у яких немає цифр"));
}

// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
function task3(array) {
  const resultItem3 = document.getElementById("resultItem-3");
  if (!resultItem3) return;

  // const exp = /[aeiouAEIOU]/;
  const exp = /[aeiou]/i;
  const newArray = array.filter((string) => exp.test(string));

  resultItem3.append(
    showArray(newArray, "Масив рядків у яких є голосні літери")
  );
}

//TODO Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
function task4(array) {
  const resultItem4 = document.getElementById("resultItem-4");
  if (!resultItem4) return;

  const exp = /[aeiou]/i;
  const newArray = array.filter((string) => exp.test(string));
  console.log("newArray :>> ", newArray);

  resultItem4.append(
    showArray(newArray, "Масив рядків у яких немає голосних літер")
  );
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
    const [year, month, day] = value.split("-").map((figure) => Number(figure));

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
    const [year, month, day] = value.split("-").map((figure) => Number(figure));

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
// }
