import readlineSync from 'readline-sync';
import { countRound, randomNumber } from '../src/index.js';

const gamePrime = () => {
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
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('"yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= countRound; i += 1) {
    const number = randomNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (prime(number)) {
      if (answer.toLowerCase() === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
        break;
      }
    }
    if (!prime(number)) {
      if (answer.toLowerCase() === 'no') {
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
        break;
      }
    }
    if (i === countRound) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default gamePrime;
