const add = ((a, b) => a+b);

const subtract = ((a,b) => a-b);

const sum = ((a,b) => a+b);
//what is sum

const multiply = ((a,b) => a*b);

const power = ((a,b) => Math.pow(a,b));

function factorial(a) {
  if (a === 0){
    return 1;
  }
  return a * factorial(a-1);
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
