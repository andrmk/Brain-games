import readlineSync from 'readline-sync';

const gameEven = () => {
  const randomNumber = (min = 1, max = 20) => Math.floor(Math.random() * (max - min + 1)) + min;
  const countRound = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= countRound; i += 1) {
    const number = randomNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (number % 2 === 0) {
      if (answer.toLowerCase() === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
        break;
      }
    }
    if (number % 2 !== 0) {
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
export default gameEven;
