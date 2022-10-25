import readlineSync from 'readline-sync';
import { countRound, randomNumber } from '../src/index.js';

const gameGcd = () => {
  const gcd = (x, y) => {
    while (y) {
      const t = y;
      y = x % y;
      x = t;
    }
    return x;
  };
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= countRound; i += 1) {
    const number = randomNumber();
    const namber2 = randomNumber();
    const result = gcd(number, namber2);
    console.log(`Question: ${number} ${namber2}`);
    const answer = readlineSync.question('Your answer: ');
    if (parseInt(answer) === result) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`);
      break;
    }
    if (i === countRound) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default gameGcd;
