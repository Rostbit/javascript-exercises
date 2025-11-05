const reverseString = function (string) {
  let stringReversed = ``;
  for (let index = string.length - 1; index >= 0; index--) {
    stringReversed += string[index];
  }
  return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
