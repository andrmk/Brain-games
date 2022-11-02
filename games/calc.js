import randomNumber from '../src/utils.js';
import gameEngine from '../src/index.js';

const rules = 'What is the result of the expression?';
const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const random = operators.map((i) => [Math.random(), i]).sort().map((i) => i[1]);
  return random[0];
};
const getTaskAndCorrect = () => {
  const number = randomNumber();
  const namber2 = randomNumber();
  const operator = randomOperator();
  const correct = eval(`${number} ${operator} ${namber2}`);
  const task = `${number} ${operator} ${namber2}`;
  return [task, correct];
};
const gameCalc = () => {
  gameEngine(rules, getTaskAndCorrect);
};

export default gameCalc;
