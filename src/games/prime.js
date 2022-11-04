import randomNumber from '../utils.js';
import gameEngine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (n) => {
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
  const correct = isPrime(number) ? 'yes' : 'no';
  return [number, correct];
};
const gamePrime = () => {
  gameEngine(rules, getTaskAndCorrect);
};

export default gamePrime;
