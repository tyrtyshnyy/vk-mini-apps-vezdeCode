export const createCarts = (number) => {
  const players = [];
  for (let i = 0; i < number; i++) {
    players.push(i + 1);
  }
  return players;
};

export const randomNumber = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

export const randomItem = (array) => Math.floor(Math.random() * array.length);
