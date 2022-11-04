import randomNumber from '../utils.js';
import gameEngine from '../index.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calculate = (number, number2, operator) => {
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
  const correct = String(calculate(number, namber2, operator));
  const task = `${number} ${operator} ${namber2}`;
  return [task, correct];
};
const gameCalc = () => {
  gameEngine(rules, getTaskAndCorrect);
};

export default gameCalc;
