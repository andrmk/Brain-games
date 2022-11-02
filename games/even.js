import randomNumber from '../src/utils.js';
import gameEngine from '../src/index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const even = (number) => number % 2 === 0;
const getTaskAndCorrect = () => {
  const number = randomNumber();
  const correct = even(number) ? 'yes' : 'no';
  return [number, correct];
};
const gameEven = () => {
  gameEngine(rules, getTaskAndCorrect);
};

export default gameEven;
