"use strict";

if (confirm("Почати тестування?")) {
  window.onload = function () {
    const resultItemArray = document.getElementById("resultItemArray");
    if (!resultItemArray) return;

    const strings = [
      "hello",
      "abc123",
      "2025",
      "no_digits",
      "user1",
      "room 404",
      "test",
      "v2.0",
      "ID007",
      "zero0",
    ];

    resultItemArray.append(showArray(strings, "Вхідний масив рядків"));

    const resultItemString = document.getElementById("resultItemString");
    if (!resultItemString) return;

    const string =
      "Замовлення №42: сума 15,30 грн; кількість — 12 шт.; знижка 03%; доставка: 08.11.2025. Примітки: код 99, контакт: +380674561234...";

    resultItemString.append(showString(string, "Вхідний рядок"));

    const resultItemCardNumbers = document.getElementById(
      "resultItemCardNumbers"
    );
    if (!resultItemCardNumbers) return;

    const cardNumbers =
      "Мої картки: 4142-3433-2323-3434, 5555666677778888, 1234 5678 9012 3456, 4000.1111.2222.3333, 5440*8999*1205*1123.";

    resultItemCardNumbers.append(
      showString(cardNumbers, "Вхідний рядок з номерами карток")
    );

    const resultItemSites = document.getElementById("resultItemSites");
    if (!resultItemSites) return;

    const sites =
      "Офіційні сайти: https://company.gov.ua, http://school.edu.ua, https://bank.com, https://minfin.gov, http://example.org, https://cabinet.gov.ua, https://university.edu.ua.";

    resultItemSites.append(
      showString(sites, "Вхідний рядок з адресами сайтів")
    );

    const resultItemYears = document.getElementById("resultItemYears");
    if (!resultItemYears) return;

    const years =
      "Роки: 1999, 2000, 2019, 2020, 2021, 2025, 2028, 2030, 2035, 2040, 2049, 2050.";

    resultItemYears.append(showString(years, "Вхідний рядок з роками"));

    task1(strings);
    task2(strings);
    task3(strings);
    task4(strings);
    task5(strings);
    task6(string);
    task7(string);
    task8(string);
    task9(string);
    task10(string);
    task11(cardNumbers);
    task12(sites);
    task13(years);
    task14(string);
    task15();
    task16();
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

  // Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
  function task5(array) {
    const resultItem5 = document.getElementById("resultItem-5");
    if (!resultItem5) return;

    // const exp = /[13]/;
    const exp = /(1|3)/;
    const newArray = array.filter((string) => exp.test(string));

    resultItem5.append(
      showArray(newArray, "Масив рядків у яких є або цифра 1 або цифра 3")
    );
  }

  // Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
  function task6(string) {
    const resultItem6 = document.getElementById("resultItem-6");
    if (!resultItem6) return;

    const exp = /\d+/g;
    const newArray = string.match(exp) ?? [];
    // newArray === null ? (newArray = []) : newArray;
    resultItem6.append(showArray(newArray, "Усі числа, які є у тексті"));
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

  // Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
  function task7(string) {
    const resultItem7 = document.getElementById("resultItem-7");
    if (!resultItem7) return;

    // const exp = /\.{3}|\p{P}/gu;
    const exp = /\.{3}|[.,:;—]/g;
    const newArray = string.match(exp) ?? [];

    resultItem7.append(
      showArray(newArray, "Усі знаки пунктуації, які були використано")
    );
  }

  // Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
  function task8(string) {
    const resultItem8 = document.getElementById("resultItem-8");
    if (!resultItem8) return;

    // const exp = /\.{3}|\p{P}/gu;
    // const exp = /\.{3}|[.,:;—\-!?«»“”„“()<>\*]/g;
    const exp = /\.{3}|[.,:;—\-]/g;
    const newArray = string.split(exp);

    resultItem8.append(
      showArray(newArray, "Усі складові, які розділені розділовими знаками")
    );
  }

  // Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd - день, mm - місяць, yyyy - рік).
  function task9(string) {
    const resultItem9 = document.getElementById("resultItem-9");
    if (!resultItem9) return;

    // const exp = /\d{2}\.\d{2}\.\d{4}/;
    const exp = /\b\d{2}\.\d{2}\.\d{4}\b/;
    if (exp.test(string)) {
      resultItem9.append(
        showString(exp.exec(string), "Текст містить дату у форматі dd.mm.yyyy")
      );
    }
  }

  // Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
  function task10(string) {
    const resultItem10 = document.getElementById("resultItem-10");
    if (!resultItem10) return;

    // const exp = /(?<!\d,)\b\d{2}\b(?!,\d)/g;
    const exp = /\b\d{2}\b/g;
    const newArray = string.match(exp) ?? [];
    const digitsAmount = newArray.length ?? 0;

    resultItem10.append(
      showArray(newArray, `У рядку ${digitsAmount} двоцифрових чисел`)
    );
  }

  // Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434» ). Знайти усі такі номери (при цьому символи “-” можуть бути, а можуть і не бути, тобто так «4142343323233434»).
  function task11(string) {
    const resultItem11 = document.getElementById("resultItem-11");
    if (!resultItem11) return;

    // const exp = /\b(\d{4}.?){4}\b/g;
    const exp = /\b(\d{4}[-\s]?){4}\b/g;
    const newArray = string.match(exp) ?? [];

    resultItem11.append(showArray(newArray, "Усі номери банківських карток"));
  }

  // Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”, але не обов'язково у кінці). Наприклад: “https://company.gov.ua”.
  function task12(string) {
    const resultItem12 = document.getElementById("resultItem-12");
    if (!resultItem12) return;

    const isGovernment = /\.gov[^\s]*\b/gi.test(string);
    if (isGovernment) {
      const exp = /\bhttps?:\/\/[^\s]*gov[^\s]*\b/gi;
      const newArray = string.match(exp) ?? [];

      resultItem12.append(
        showArray(newArray, "Усі адреси сайтів, які є урядовими")
      );
    }
  }

  // Задача 13. Вибрати усі роки між 2020 та 2049 з отриманого повідомлення.
  function task13(string) {
    const resultItem13 = document.getElementById("resultItem-13");
    if (!resultItem13) return;

    // const exp = /\b((202[0-9])|(203[0-9])|(204[0-9]))\b/g;
    // const exp = /\b(20[2-4][0-9])\b/g;
    const exp = /\b(20[2-4]\d)\b/g;
    const newArray = string.match(exp) ?? [];

    resultItem13.append(showArray(newArray, "Усі роки між 2020 та 2049"));
  }

  // Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном оператора Київстар.
  function task14(string) {
    const resultItem14 = document.getElementById("resultItem-14");
    if (!resultItem14) return;

    const isKyivstarsNumber = /\+380[69][678]/g.test(string);
    if (isKyivstarsNumber) {
      // const exp = /^(\+38)?(067|068|096|097|098)\d{7}$/;
      // const exp = /^(\+38)?0(6|9)(6|7|8)\d{7}$/;
      const exp = /\+380[69][678]\d{7}/g;
      const newArray = string.match(exp);

      resultItem14.append(
        showString(
          newArray,
          'Цей номер телефону є номером оператора "Київстар"'
        )
      );
    }
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
}
