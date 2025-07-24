const input1: string | null = prompt('Перше число', '0')
const input2: string | null = prompt('Друге число', '0')
{
  const number1: number = input1 !== null ? parseFloat(input1) : 0
  const number2: number = input2 !== null ? parseFloat(input2) : 0
  const sum: number = number1 + number2

  document.write(`Сума = ${sum}`)
}
