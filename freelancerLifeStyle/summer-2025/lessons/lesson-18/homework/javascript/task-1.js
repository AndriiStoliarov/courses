"use strict";
if (confirm("Почати тестування?")) {
}

function getSummation() {
  const firstNumber = parseInt(document.getElementById("first-number").value);
  const secondNumber = parseInt(document.getElementById("second-number").value);
  const result = firstNumber + secondNumber;

  document.getElementById("result").value = result;
}

function getSubtraction() {
  const firstNumber = parseInt(document.getElementById("first-number").value);
  const secondNumber = parseInt(document.getElementById("second-number").value);
  const result = firstNumber - secondNumber;

  document.getElementById("result").value = result;
}

function getMultiplication() {
  const firstNumber = parseInt(document.getElementById("first-number").value);
  const secondNumber = parseInt(document.getElementById("second-number").value);
  const result = firstNumber * secondNumber;

  document.getElementById("result").value = result;
}

function getDivision() {
  const firstNumber = parseInt(document.getElementById("first-number").value);
  const secondNumber = parseInt(document.getElementById("second-number").value);
  const result = firstNumber / secondNumber;

  document.getElementById("result").value = result;
}
