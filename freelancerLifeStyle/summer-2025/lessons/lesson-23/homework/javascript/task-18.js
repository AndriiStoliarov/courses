"use strict";

if (confirm("Почати тестування?")) {
  window.onload = function () {
    const resultItem = document.getElementById("resultItem");
    if (!resultItem) return;

    const color = document.querySelector(".form__input--color");
    color.addEventListener("change", setBackgroundColor);

    document.body.style.backgroundColor = localStorage.getItem("currentColor");

    sessionStorage.setItem("backgroundChanges", 0);
    resultItem.value = sessionStorage.getItem("backgroundChanges");
  };

  function setBackgroundColor(event) {
    const currentColor = event.target.value;

    localStorage.setItem("currentColor", currentColor);
    const backgroundColor = localStorage.getItem("currentColor");

    if (backgroundColor) {
      document.body.style.backgroundColor = backgroundColor;

      let backgroundChanges = sessionStorage.getItem("backgroundChanges");
      backgroundChanges++;
      sessionStorage.setItem("backgroundChanges", backgroundChanges);
      resultItem.value = sessionStorage.getItem("backgroundChanges");
    }
  }
}
