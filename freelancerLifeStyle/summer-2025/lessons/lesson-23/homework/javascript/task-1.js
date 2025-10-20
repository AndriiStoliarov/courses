"use strict";

if (confirm("Почати тестування?")) {
  window.onload = function () {
    const resultItem1 = document.getElementById("resultItem-1");
    if (!resultItem1) return;

    const phoneNumberInput = document.querySelector(".form__input--number");
    phoneNumberInput.onchange = (event) => {
      try {
        const currentPhoneNumber = event.target.value;

        const phoneNumber = new PhoneNumber(currentPhoneNumber);

        resultItem1.innerText = `${phoneNumber.Number} -> ${phoneNumber}.`;
      } catch (error) {
        resultItem1.innerText = error.message;
      }
    };
  };

  class IsValidPhoneNumber extends Error {
    constructor() {
      super();
      this.message = "Номер не відповідає формату.";
      // this.message = "Phone number is not valid!";
      this.name = "IsValidPhoneNumber";
    }
  }

  class PhoneNumber {
    constructor(initNumber) {
      this.Number = initNumber;
    }

    set Number(value) {
      if (/^0\d{9}$/.test(value)) {
        this.number = value;
      } else {
        throw new IsValidPhoneNumber();
      }
    }

    get Number() {
      return this.number;
    }

    [Symbol.toPrimitive](hint) {
      if (hint === "string") {
        const prefix = this.Number.slice(1, 3);
        let operator;

        switch (prefix) {
          case "50":
          case "66":
          case "95":
          case "99":
            operator = "MTC";
            break;
          case "67":
          case "68":
          case "96":
          case "97":
          case "98":
            operator = "Kyivstar";
            break;
          case "63":
          case "73":
          case "93":
            operator = "Lifecell";
            break;
          default:
            operator = "Unknown operator";
        }

        return operator;
      }
    }
  }
}
