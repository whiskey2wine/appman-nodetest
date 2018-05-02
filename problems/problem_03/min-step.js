const minStep = input => {
  // put your code here !!
  let input2 = input;
  let i = 0,
    j = 0;
  while (input > 1) {
    if (input % 2 === 0) {
      input = input / 2;
    } else {
      input = input - 1;
    }
    i++;
  }
  while (input2 > 1) {
    if (input2 % 2 === 0) {
      input2 = input2 / 2;
    } else {
      input2 = input2 + 1;
    }
    j++;
  }
  return Math.min(i, j);
};
module.exports = { minStep };
