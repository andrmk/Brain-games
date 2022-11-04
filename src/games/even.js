import randomNumber from '../utils.js';
import gameEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const getTaskAndCorrect = () => {
  const number = randomNumber();
  const correct = isEven(number) ? 'yes' : 'no';
  return [number, correct];
};
const gameEven = () => {
  gameEngine(rules, getTaskAndCorrect);
};

export default gameEven;
