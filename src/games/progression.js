import randomNumber from '../utils.js';
import gameEngine from '../index.js';

const rules = 'What number is missing in the progression?';
const getProgression = (number, range) => {
  const arreyProgression = [];
  for (let i = 0; i < range * 10; i += range) {
    arreyProgression.push(number + i);
  }
  return arreyProgression;
};
const getTaskAndCorrect = () => {
  const progression = getProgression(randomNumber(1, 100), randomNumber(2, 5));
  const index = randomNumber(0, 9);
  const correct = String(progression[index]);
  progression[index] = '..';
  const task = progression.join(' ');
  return [task, correct];
};
const gameProgression = () => {
  gameEngine(rules, getTaskAndCorrect);
};

export default gameProgression;
