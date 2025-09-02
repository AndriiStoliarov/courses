"use strict";
// Ввести ім’я користувача і його вік. Якщо вік більше 17 привітати, інакше – повідомити про заборону відвідування сайту
function createMatrixWithZero(rowNumber, colNumber) {
    return Array.from({ length: rowNumber }, () => new Array(colNumber).fill(0));
}
/**
 * Дозволяє випадковим чином розмстити вказану кількість потрібних значень
 * @param{GameField} matrix - масив, у якому розміщувати
 * @param{number} targetNumber -  кількість знчень
 * @param{number|string} targetValue - які саме значеня
 */
function setValuesInMatrix(matrix, targetNumber, targetValue) {
    while (targetNumber > 0) {
        const randomRowIndex = Math.floor(Math.random() * matrix.length);
        const randomColIndex = Math.floor(Math.random() * matrix[0].length);
        if (matrix[randomRowIndex][randomColIndex] === 0) {
            matrix[randomRowIndex][randomColIndex] = targetValue;
            targetNumber--;
        }
    }
}
//----------
/**
 * Генерує ігрове поле
 * @param{number} rowNumber  - кількість рядків
 * @param{number} colNumber - кількість стовпців
 * @param{number} shipNumber - кількість кораблів
 * @param{number} blockNumber - кількість блоків
 * @returns{GameField} - ігрове поле
 */
function generateGameField(rowNumber, colNumber, shipNumber, blockNumber) {
    const matr = createMatrixWithZero(rowNumber, colNumber);
    setValuesInMatrix(matr, shipNumber, 1);
    setValuesInMatrix(matr, blockNumber, 'block');
    return matr;
}
//----------
const gameField = generateGameField(5, 5, 4, 5);
console.log(gameField);
