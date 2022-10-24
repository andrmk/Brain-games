const countRound = 3;
const randomNumber = (min = 1, max = 20) => Math.floor(Math.random() * (max - min + 1)) + min;

export { countRound, randomNumber };
