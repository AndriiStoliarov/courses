"use strict";

if (confirm("Почати тестування?")) {
  window.onload = function () {
    const resultItem = document.getElementById("resultItem");
    if (!resultItem) return;

    const client = new Client("Tetiana Horobets", 5000);
    resultItem.append(client.render());

    let goldenClient = new GoldenClient("Dmytro Horbunov", 2000, 40000, 3);
    goldenClient.addMoney(300);
    goldenClient.withdrawalMoney(3000);
    const fine = goldenClient.penaltyDefinition();
    resultItem.append(goldenClient.render());

    const spanElement = document.createElement("span");
    spanElement.innerText = `Пня за використання кредитних коштів: ${fine} грн.`;
    resultItem.append(spanElement);
  };

  class Client {
    constructor(initialFullName, initialMoney) {
      this.id = this.getRangeNumber(100, 999);
      this.fullName = initialFullName;
      this.money = initialMoney;
    }
    // methods:
    toString() {
      return `Client[id: ${this.id}, fullName: ${this.fullName}, money: ${this.money}]`;
    }
    // метод для додавання грошової маси.
    addMoney(inputMoney) {
      this.money += inputMoney;
    }
    // метод для вилучення грошової маси.
    withdrawalMoney(outputMoney) {
      this.money -= outputMoney;
    }

    createUlTag() {
      const ulTag = document.createElement("ul");

      return ulTag;
    }

    createLiTag() {
      const liTag = document.createElement("li");

      return liTag;
    }

    createSpanTag() {
      const spanTag = document.createElement("span");

      return spanTag;
    }

    render() {
      const ulTag = this.createUlTag();

      const liTag = this.createLiTag();
      const spanTag = this.createSpanTag();
      spanTag.innerText = this.toString();
      liTag.append(spanTag);
      ulTag.append(liTag);

      return ulTag;
    }
    // метод повертає випадкове число в заданому інтервалі.
    getRangeNumber(numberFrom, numberTo) {
      const randomNumber =
        numberFrom + Math.floor(Math.random() * (numberTo - numberFrom + 1));
      return randomNumber;
    }
  }

  class GoldenClient extends Client {
    constructor(fullName, money, initialCreditLimit, initialPercentage) {
      super(fullName, money);
      this.creditLimit = initialCreditLimit;
      this.creditMoney = 0;
      this.percentage = initialPercentage;
    }
    // methods:
    toString() {
      return `GoldenClient[id: ${this.id}, fullName: ${this.fullName}, money: ${this.money}, creditLimit: ${this.creditLimit}, creditMoney ${this.creditMoney}, percentage: ${this.percentage}]`;
    }

    addMoney(inputMoney) {
      const credit = this.creditLimit - this.creditMoney;

      if (credit < this.creditLimit) {
        const difference = inputMoney - credit;
        this.creditLimit += difference;
      } else {
        super.addMoney(inputMoney);
      }
    }

    withdrawalMoney(outputMoney) {
      if (this.money < outputMoney) {
        const difference = outputMoney - this.money;
        this.creditMoney += difference;
        this.money = 0;
      } else {
        super.withdrawalMoney(outputMoney);
      }
    }

    penaltyDefinition() {
      return (this.creditMoney * this.percentage) / 100;
    }

    createUlTag() {
      const ulTag = document.createElement("ul");

      return ulTag;
    }

    createLiTag() {
      const liTag = document.createElement("li");

      return liTag;
    }

    createSpanTag() {
      const spanTag = document.createElement("span");

      return spanTag;
    }

    render() {
      const ulTag = this.createUlTag();

      const liTag = this.createLiTag();
      const spanTag = this.createSpanTag();
      spanTag.innerText = this.toString();
      liTag.append(spanTag);
      ulTag.append(liTag);

      return ulTag;
    }
  }
}
