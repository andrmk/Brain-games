import randomNumber from '../src/utils.js';
import gameEngine from '../src/index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const prime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
const getTaskAndCorrect = () => {
  const number = randomNumber();
  const correct = prime(number) ? 'yes' : 'no';
  return [number, correct];
};
const gamePrime = () => {
  gameEngine(rules, getTaskAndCorrect);
};

export default gamePrime;
