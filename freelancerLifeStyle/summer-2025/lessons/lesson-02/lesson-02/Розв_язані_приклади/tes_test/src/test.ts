const number1: number = parseFloat(prompt('Перше число', '0') as string)
const number2: number = parseFloat(prompt('Друге число', '0') as string)
const sum: number = number1 + number2

document.write(`Сума = ${sum}`)
