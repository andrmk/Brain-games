import randomNumber from '../src/utils.js';
import gameEngine from '../src/index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const getProgression = () => {
  const arreyProgression = [];
  const number = randomNumber(1, 100);
  const range = randomNumber(2, 5);
  for (let i = 0; i < range * 10; i += range) {
    arreyProgression.push(number + i);
  }
  return arreyProgression;
};
const getTaskAndCorrect = () => {
  const progression = getProgression();
  const index = randomNumber(0, 9);
  const correct = progression[index];
  progression[index] = '..';
  const task = progression.join(' ');
  return [task, correct];
};
const gameProgression = () => {
  gameEngine(rules, getTaskAndCorrect);
};

export default gameProgression;
