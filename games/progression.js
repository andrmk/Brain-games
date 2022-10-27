import readlineSync from 'readline-sync';
import { countRound } from '../src/index.js';

const gameProgression = () => {
  const getProgression = () => {
    const arreyProgression = [];
    const getRandomNum = () => Math.ceil(Math.random() * 100);
    const number = getRandomNum();
    const range = Math.ceil(Math.random() * 5);
    for (let i = 0; i < range * 10; i += range) {
      arreyProgression.push(number + i);
    }
    return arreyProgression;
  };
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= countRound; i += 1) {
    const progression = getProgression();
    const index = Math.round(Math.random() * 9);
    const result = progression[index];
    const progressionForQuestion = progression;
    progressionForQuestion[index] = '..';
    console.log(`Question: ${progressionForQuestion}`);
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

export default gameProgression;
