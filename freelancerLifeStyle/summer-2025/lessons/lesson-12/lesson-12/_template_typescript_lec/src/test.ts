// Ввести ім’я користувача і його вік. Якщо вік більше 17 привітати, інакше – повідомити про заборону відвідування сайту

// const userName: string = prompt('Введіть ім"я') ?? 'Guest'
// const userAge: number = Number(prompt('Ваш вік'))

// if (userAge > 17) document.write(`Вітаємо ${userName} !`)
// else document.write('Заборона відвідування сайту')
// -----------------------
// Користувач вводить ім’я. Якщо відмовиться, то заборонити доступ
// type stringOrNull = string | null

// const userName: stringOrNull  = prompt('Ваше ім"я')

// if (userName === null) document.write('Заборона')
// else document.write(`Вітаємо ${userName} !`)
//------------- cуму двох чисел
// function sum(num1, num2) {
//   return num1+num2
// }
// /**
//  * Знаходить суму двох чисел
//  * @param{number} num1 - перше число
//  * @param{number} num2 - друге число
//  * @returns{number} - суму двох чисел
//  */
// function sum(num1: number, num2: number): number {
//   return num1 + num2
// }

// const sum = (num1, num2) => num1+num2

// /**
//  * Знаходить суму двох чисел
//  * @param{number} num1 - перше число
//  * @param{number} num2 - друге число
//  * @returns{number} - суму двох чисел
//  */
// const sum = (num1: number, num2: number): number => num1 + num2
// console.log(sum(Number('12'), 9))
// document.write(sum(12, 9).toString())
// ------------------------------------
// З клавіатури вводиться номер місяця. За номером місяця визначити пору року

// type Season = 'winter' | 'spring' | 'summer' | 'fall'
// /**
//  * Визначає пору року за номером місяця
//  * @param {number} monthNumber - номер місяця
//  * @returns {Season} - пору року
//  */
// function getSeason(monthNumber: number): Season {
//   let season: Season
//   switch (monthNumber) {
//     case 1:
//     case 2:
//     case 12:
//       season = 'winter'
//       break
//     case 3:
//     case 4:
//     case 5:
//       season = 'spring'
//       break
//     case 6:
//     case 7:
//     case 8:
//       season = 'summer'
//       break
//     case 9:
//     case 10:
//     case 11:
//       season = 'fall'
//       break
//     default:
//       throw new Error('Month number is incorrect')
//   }
//   return season
// }
// //---
// const monthNum: number = Number(prompt('Введіть номер місяця'))
// document.write(getSeason(monthNum))
// ---------------------------------------------
// Передається або номер дня, або назву дня на англійькій. Треба сказати чи вихідний чи робочий.
// type DayType = 'working day' | 'weekend'
// //---1. Сигнатури можливі
// function getDayType(day: number): DayType
// function getDayType(day: string): DayType
// //---2. Реалізація
// function getDayType(day: string | number): DayType {
//   if (typeof day === 'number') return day >= 6 ? 'weekend' : 'working day'

//   return day === 'sat' || day === 'sun' ? 'weekend' : 'working day'
// }
// //-----
// document.write(getDayType('mon'))

//--------------------
// Планувальник відпусток. Дано масив імен водіїв і масив номерів, коли можнай йти у відпустку. Потрібно випадково вибрати ім’я водія і випадково вибрати номер місяця для відпустки.

// const usersNames: string[] = ['Ivan', 'Oleh', 'Irina']
// const monthsVacation: number[] = [3, 6, 7, 8]

// const randomUserIndex: number = Math.floor(Math.random() * usersNames.length)
// const randomName: string = usersNames[randomUserIndex]

// const randomMonthIndex: number = Math.floor(
//   Math.random() * monthsVacation.length
// )
// const randomMonth: number = monthsVacation[randomMonthIndex]

// document.write(`${randomName} - ${randomMonth}`)
//======================================
// Сформувати двовимірний масив (5*5) ігрового поля. Усі елементи нулі, або 1-корабель (4 штуки), або ‘block’- земля (5 штук)

type GameField = (number | string)[][]

function createMatrixWithZero(rowNumber: number, colNumber: number): GameField {
  return Array.from({ length: rowNumber }, () => new Array(colNumber).fill(0))
}

/**
 * Дозволяє випадковим чином розмстити вказану кількість потрібних значень
 * @param{GameField} matrix - масив, у якому розміщувати
 * @param{number} targetNumber -  кількість знчень
 * @param{number|string} targetValue - які саме значеня
 */
function setValuesInMatrix(
  matrix: GameField,
  targetNumber: number,
  targetValue: number | string
): void {
  while (targetNumber > 0) {
    const randomRowIndex: number = Math.floor(Math.random() * matrix.length)
    const randomColIndex: number = Math.floor(Math.random() * matrix[0].length)
    if (matrix[randomRowIndex][randomColIndex] === 0) {
      matrix[randomRowIndex][randomColIndex] = targetValue
      targetNumber--
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
function generateGameField(
  rowNumber: number,
  colNumber: number,
  shipNumber: number,
  blockNumber: number
): GameField {
  const matr: GameField = createMatrixWithZero(rowNumber, colNumber)
  setValuesInMatrix(matr, shipNumber, 1)
  setValuesInMatrix(matr, blockNumber, 'block')
  return matr
}
//----------
const gameField: GameField = generateGameField(5, 5, 4, 5)
console.log(gameField)
