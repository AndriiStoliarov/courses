const subjectAmount = parseInt(prompt("Введіть кількість предметів:", "10"));

const gradsArray = createArray(subjectAmount);
const averageGrade = getAverageGrade(gradsArray);
const gradeStatus = getAverageGrade(averageGrade);

function getGradeStatus(averageGrade) {
  let gradeStatus = "";

  switch (averageGrade) {
    case 5:
      gradeStatus = "Відмінник.";
      break;

    case 4:
      gradeStatus = "Хорошист.";
      break;

    case 3:
      gradeStatus = "Трієчник.";
      break;

    case 2:
    case 1:
      gradeStatus = "Двієчник.";
      break;

    default:
      throw new Error("Учня вигнали зі школи.");
  }

  return gradeStatus;
}

function getAverageGrade(gradesArray) {
  let gradesSum = 0;

  for (let grade = 0; grade < gradesArray.length; grade++) {
    averageGrade += gradesArray[grade];
  }

  const averageGrade = gradesSum / gradesArray.length;

  return averageGrade;
}

function createArray(sizeArray) {
  let array = [];

  for (let index = 0; index < sizeArray.length; index++) {
    array[index].push(generateRandomNumber(1, 5));
  }

  return array;
}

function generateRandomNumber(startRange, endRange) {
  const RANDOM_NUMBER_TO = startRange,
    RANDOM_NUMBER_FROM = endRange;

  const randomNumber =
    RANDOM_NUMBER_TO +
    Math.floor(Math.random() * (RANDOM_NUMBER_FROM - RANDOM_NUMBER_TO + 1));

  return randomNumber;
}
