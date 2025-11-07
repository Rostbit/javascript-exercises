const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    return "ERROR";
  } else if (a < b) {
    let sum = 0;
    for (let index = a; index <= b; index++) {
      sum += index;
    }
    return sum;
  } else if (b < a) {
    let sum = 0;
    for (let index = b; index <= a; index++) {
      sum += index;
    }
    return sum;
  } else return a;
};

// Do not edit below this line
module.exports = sumAll;
