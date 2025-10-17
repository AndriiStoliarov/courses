"use strict";

// if (confirm("Почати тестування?")) {
window.onload = function () {
  task5();
};

// Задача 5. Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.
function task5() {
  const resultItem5 = document.getElementById("resultItem-5");
  if (!resultItem5) return;
  const resultItemAges = document.getElementById("resultItem-ages");
  if (!resultItemAges) return;

  const ages = [12, 13, 15, 12, 15, 12, 13, 13, 12, 15];
  resultItemAges.append(showArray(ages, "Масив з віком учнів"));

  let agesMap = new Map();

  for (const age of ages) {
    let counter = agesMap.get(age) ?? 0;
    agesMap.set(age, counter + 1);
  }

  // for (const [counter, age] of agesMap) {
  //   const liTag = renderItem(`${age} р., зустрічається ${counter} р..`);
  //   resultItem5.append(liTag);
  // }
  agesMap.forEach((counter, age) => {
    const liTag = renderItem(`${age} р., зустрічається ${counter} р..`);
    resultItem5.append(liTag);
  });

  const max = Math.max(...agesMap.keys());

  resultItem5.append(showString(max, " Максимальній вік учня"));
}
/**
 * Функція, яка створює необхідні теги для відображення.
 */
function renderItem(item) {
  const liTag = document.createElement("li");
  const spanTag = document.createElement("span");
  spanTag.innerText = item;
  liTag.append(spanTag);

  return liTag;
}
/**
 * Функція, яка виводить масив.
 */
function showArray(array, caption) {
  const spanParentTag = document.createElement("span");

  const spanTagStart = document.createElement("span");
  spanTagStart.innerText = `${caption}: [`;
  spanParentTag.append(spanTagStart);

  const string = array.join(", ");
  spanParentTag.append(string);

  const spanTagEnd = document.createElement("span");
  spanTagEnd.innerText = "].";
  spanParentTag.append(spanTagEnd);

  return spanParentTag;
}

/**
 * Функція, яка виводить рядок.
 */
function showString(string, caption) {
  const spanParentTag = document.createElement("span");

  const spanTagStart = document.createElement("span");
  spanTagStart.innerText = `${caption}: "`;
  spanParentTag.append(spanTagStart);

  spanParentTag.append(string);

  const spanTagEnd = document.createElement("span");
  spanTagEnd.innerText = '".';
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

// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
function task4(array) {
  const resultItem4 = document.getElementById("resultItem-4");
  if (!resultItem4) return;

  // const exp = /^[^aeiou]{1,}$/i;
  const exp = /^[^aeiou]+$/i;
  const newArray = array.filter((string) => exp.test(string));

  resultItem4.append(
    showArray(newArray, "Масив рядків у яких немає голосних літер")
  );
}

// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл. Замінити пробіл на дефіс.
function task15() {
  const resultItem15 = document.getElementById("resultItem-15");
  if (!resultItem15) return;

  const fullNameInput = document.querySelector(".form__input--full-name");
  fullNameInput.addEventListener("change", (event) => {
    resultItem15.innerText = "";

    const currentFullName = event.target.value.trim();

    const exp = /\s/gi;
    const fullName = currentFullName.replace(exp, "-");

    resultItem15.append(showString(fullName, "Пробіл замінено на дефіс"));
  });
}

// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «місяць/рік».
function task16() {
  const resultItem16 = document.getElementById("resultItem-16");
  if (!resultItem16) return;

  const dateInput = document.querySelector(".form__input--date");
  dateInput.addEventListener("change", (event) => {
    resultItem16.innerText = "";

    const currentDate = event.target.value.trim();

    // const exp = /^(\d{2})\.(\d{2})\.(\d{4})$/;
    const exp = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/;
    const date = currentDate.replace(exp, "$2/$3");

    resultItem16.append(showString(date, "Дати у форматі «місяць/рік»"));
  });
}
// }
