import randomNumber from '../src/utils.js';
import gameEngine from '../src/index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const gcd = (x, y) => {
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
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
