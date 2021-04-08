export const pickPlayer = () => {
  const randomNumber = Math.floor(Math.random() * 10);

  if (randomNumber % 2 === 0) {
    return 1;
  } else {
    return 2;
  }
};
