/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let reducer = digits.join('');
  let nreducer = BigInt(reducer);
  nreducer += 1n;
  nreducer = nreducer.toString();
  return nreducer.split('');
};