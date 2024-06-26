const add = function(...number) {
  return number.reduce((total, currentItem) => total + currentItem);
	
};

const subtract = function(...number) {
	return number.reduce((total, currentItem) => total - currentItem);
};

const sum = function(number) {
	return number.reduce((total, currentItem) => total + currentItem, 0);
};

const multiply = function(number) {
  return number.reduce((total, currentItem) => total * currentItem, 1);
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
