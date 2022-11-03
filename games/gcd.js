import randomNumber from '../src/utils.js';
import gameEngine from '../src/index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const gcd = (x, y) => {
  let num1 = x;
  let num2 = y;
  while (num2) {
    const empty = num2;
    num2 = num1 % num2;
    num1 = empty;
  }
  return num1;
};
const getTaskAndCorrect = () => {
  const number = randomNumber();
  const namber2 = randomNumber();
  const correct = gcd(number, namber2);
  const task = `${number} ${namber2}`;
  return [task, correct];
};
const gameGcd = () => {
  gameEngine(rules, getTaskAndCorrect);
};

export default gameGcd;
