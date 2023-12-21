const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strn = n.toString();

  let maxNumber = 0;

  for (let i = 0; i < strn.length; i++) {
    const currentStr = strn.slice(0, i) + strn.slice(i + 1);
    const currentNumber = parseInt(currentStr);

    if (currentNumber > maxNumber) {
      maxNumber = currentNumber;
    }
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
