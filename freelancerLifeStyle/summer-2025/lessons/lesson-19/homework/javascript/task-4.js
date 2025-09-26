"use strict";

if (confirm("Почати тестування?")) {
  window.onload = function () {
    const tableDataNodes = document.querySelectorAll(".table__data");

    for (const node of tableDataNodes) {
      node.innerText = getRangeNumber(10, 99);
    }

    const tableNodes = document.querySelectorAll(".table");

    for (const table of tableNodes) {
      table.onclick = onTdClick;

      const resultNude = table.querySelector(".result");
      const parentResultNude = resultNude.closest(".table__header");
      resultNude.innerText = parentResultNude.getAttribute("counter");
    }
  };

  function onTdClick(event) {
    const clickedElement = event.target;

    if (clickedElement.tagName === "TD") {
      const currentTable = event.currentTarget;
      event.currentTarget.classList.add("table--border-red");

      const resultNude = currentTable.querySelector(".result");
      const parentResultNude = resultNude.closest(".table__header");

      let counter = Number(parentResultNude.getAttribute("counter"));
      counter++;

      parentResultNude.setAttribute("counter", counter);
      resultNude.innerText = counter;
    } else {
      event.currentTarget.classList.remove("table--border-red");
    }
  }

  function getRangeNumber(numberFrom, numberTo) {
    const randomNumber =
      numberFrom + Math.floor(Math.random() * (numberTo - numberFrom + 1));
    return randomNumber;
  }
}
