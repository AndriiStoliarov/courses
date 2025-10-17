"use strict";

if (confirm("Почати тестування?")) {
  window.onload = function () {
    const resultItem3 = document.getElementById("resultItem-3");
    if (!resultItem3) return;

    const inputAmountElement = document.querySelector(".form__input--amount");
    inputAmountElement.addEventListener("change", (event) => {
      resultItem3.innerHTML = "";
      const currentAmount = event.target.value;

      const newArray = [...generateRandomEvenNumber(currentAmount, 2, 100)];

      console.log(
        "generateRandomEvenNumber(currentAmount, 2, 100) :>> ",
        JSON.stringify(generateRandomEvenNumber(currentAmount, 2, 100).next())
      );

      resultItem3.append(showArray(newArray, "Масив парних чисел"));
    });
  };

  // генератор повертає вказану кількість випадкових парних числ в заданому інтервалі.
  function* generateRandomEvenNumber(numberAmount, numberFrom, numberTo) {
    for (let i = 0; i < numberAmount; i++) {
      yield getRangeEvenNumber(numberFrom, numberTo);
    }

    function getRangeEvenNumber(numberFrom, numberTo) {
      const randomNumber =
        numberFrom + Math.floor(Math.random() * (numberTo - numberFrom + 1));

      return randomNumber % 2 === 0 ? randomNumber : randomNumber + 1;
    }
  }

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
}
