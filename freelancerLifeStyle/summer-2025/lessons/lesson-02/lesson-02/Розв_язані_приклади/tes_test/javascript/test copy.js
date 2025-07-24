"use strict";
const input1 = prompt('Перше число', '0');
const input2 = prompt('Друге число', '0');
{
    const number1 = input1 !== null ? parseFloat(input1) : 0;
    const number2 = input2 !== null ? parseFloat(input2) : 0;
    const sum = number1 + number2;
    document.write(`Сума = ${sum}`);
}
