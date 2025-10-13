"use strict";

if (confirm("Почати тестування?")) {
  window.onload = function () {
    const resultItem = document.getElementById("resultItem");
    if (!resultItem) return;

    const buttonCheck = document.querySelector(".form__button--student");
    buttonCheck.onclick = function () {
      try {
        const monthElement = document.querySelector(".form__input--month");
        const makeElement = document.querySelector(".form__input--make");
        const month = monthElement.value;
        const make = makeElement.value;
        new Student(month, make);
      } catch (error) {
        resultItem.innerText = error.message;
      }
    };
  };

  class CheckedNumber {
    constructor(value, minValue, maxValue) {
      this.value = value;
      this.minValue = minValue;
      this.maxValue = maxValue;
    }

    isNumber() {
      const parseValue = Number(this.value);

      if (!this.value) {
        throw new Error("Поле не має бути пустим.");
      } else if (isNaN(parseValue) || !isFinite(parseValue)) {
        throw new Error("Введено не число.");
      } else {
        return true;
      }
    }

    isNumberRange() {
      const parseValue = Number(this.value);

      if (parseValue < this.minValue || parseValue > this.maxValue) {
        throw new Error("Число виходить за рамки заданого інтервалу.");
      } else {
        return true;
      }
    }

    toString() {
      return this.value;
    }
  }

  class Pair {
    constructor(value1, minValue1, maxValue1, value2, minValue2, maxValue2) {
      this.month = value1;
      this.make = value2;
      this.number1 = new CheckedNumber(value1, minValue1, maxValue1);
      this.number2 = new CheckedNumber(value2, minValue2, maxValue2);
    }

    isNumber() {
      this.number1.isNumber();
      this.number2.isNumber();
    }

    isNumberRange() {
      this.number1.isNumberRange();
      this.number2.isNumberRange();
    }

    isHolidayMonths() {
      const MONTH_6 = 6;
      const MONTH_7 = 7;
      const MONTH_8 = 8;

      const parseMonth = Number(this.month);

      if (
        MONTH_6 === parseMonth ||
        MONTH_7 === parseMonth ||
        MONTH_8 === parseMonth
      ) {
        return true;
      } else {
        return false;
      }
    }

    isLastMonth() {
      const MONTH_5 = 5;
      const MONTH_1 = 1;

      const parseMonth = Number(this.month);

      if (MONTH_5 === parseMonth || MONTH_1 === parseMonth) {
        return true;
      } else {
        return false;
      }
    }

    isBadMake() {
      const BAD_MAKE = 60;

      const parseMake = Number(this.make);

      if (parseMake <= BAD_MAKE) {
        return true;
      } else {
        return false;
      }
    }

    totalChecking() {
      const isHolidayMonths = this.isHolidayMonths();
      const isLastMonth = this.isLastMonth();
      const isBadMake = this.isBadMake();

      if (isHolidayMonths) {
        resultItem.innerText = "Зараз тривають каникули.";
      } else if (isLastMonth && isBadMake) {
        resultItem.innerText = "Оцінка погана, виправити оцінку не зможе.";
      } else if (!isLastMonth && isBadMake) {
        resultItem.innerText = "Оцінка погана, виправити оцінку зможе.";
      } else {
        resultItem.innerText = "Оцінка хороша.";
      }
    }
  }

  class Student extends Pair {
    constructor(month, make) {
      super(month, 1, 12, make, 1, 100);
      super.isNumber();
      super.isNumberRange();
      super.totalChecking();
    }
    get Month() {
      return this.number1.value;
    }
    get Make() {
      return this.number2.value;
    }
  }
}
