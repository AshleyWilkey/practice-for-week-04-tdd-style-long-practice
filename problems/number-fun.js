function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(n) {
  // Your code here
  if (n === 0) {
    return "Division by zero is not allowed.";
  } else {
    return 1 / n;
  }
}

module.exports = {
  returnsThree,
  reciprocal,
};
