const maxFloor = input => {
  // put your code here !!
  let x;
  for (let i = 1; i <= input; i++) {
    input = input - i;
    x = i;
  }
  return x;
};

module.exports = { maxFloor };
