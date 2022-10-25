import readlineSync from 'readline-sync';
import { countRound, randomNumber } from '../src/index.js';

const gameCalc = () => {
  const randomOperator = () => {
    const operators = ['+', '-', '*'];
    const random = operators.map((i) => [Math.random(), i]).sort().map((i) => i[1]);
    return random[0];
  };
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  for (let i = 1; i <= countRound; i += 1) {
    const number = randomNumber();
    const namber2 = randomNumber();
    const operator = randomOperator();
    const result = eval(`${number} ${operator} ${namber2}`);
    console.log(`Question: ${number} ${operator} ${namber2}`);
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

export default gameCalc;
