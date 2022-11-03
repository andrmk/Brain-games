import randomNumber from '../src/utils.js';
import gameEngine from '../src/index.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calculator = (number, number2, operator) => {
  switch (operator) {
    case '+':
      return number + number2;
    case '-':
      return number - number2;
    default:
      return number * number2;
  }
};
const getTaskAndCorrect = () => {
  const number = randomNumber();
  const namber2 = randomNumber();
  const index = randomNumber(0, operators.length - 1);
  const operator = operators[index];
  const correct = calculator(number, namber2, operator);
  const task = `${number} ${operator} ${namber2}`;
  return [task, correct];
};
const gameCalc = () => {
  gameEngine(rules, getTaskAndCorrect);
};

export default gameCalc;
