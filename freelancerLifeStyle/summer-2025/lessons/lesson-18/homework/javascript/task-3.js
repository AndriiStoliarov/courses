"use strict";
if (confirm("Почати тестування?")) {
  const yearOfBirth = parseInt(prompt("Введіть рік народження:", "1982"));

  const currentYear = new Date().getFullYear();

  if (
    isNaN(yearOfBirth) ||
    !isFinite(yearOfBirth) ||
    yearOfBirth < 1900 ||
    yearOfBirth > currentYear
  ) {
    throw new Error("Incorrect number entered.");
  } else {
    const resultTitle = document.getElementById("resultTitle");
    const spanTag = document.createElement("span");
    spanTag.classList.add("tasks__title");
    spanTag.innerText = "Відповідь:";
    resultTitle.prepend(spanTag);

    const yearsOld = currentYear - yearOfBirth;

    const pTag = document.createElement("p");
    pTag.innerHTML = 'Кількість років: <span id="result"></span>.';
    document.getElementById("resultItem").append(pTag);
    document.getElementById("result").innerText = yearsOld;
  }
}
