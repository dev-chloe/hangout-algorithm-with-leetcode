/**
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
 * The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
 *
 * Example 1:
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * Incrementing by one gives 123 + 1 = 124.
 * Thus, the result should be [1,2,4].
 *
 * Example 2:
 * Input: digits = [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 * Incrementing by one gives 4321 + 1 = 4322.
 * Thus, the result should be [4,3,2,2].
 *
 * Example 3:
 * Input: digits = [9]
 * Output: [1,0]
 * Explanation: The array represents the integer 9.
 * Incrementing by one gives 9 + 1 = 10.
 * Thus, the result should be [1,0].
 */

function plusOne(digits: number[]): number[] {
  const digit = digits.join("");
  const numDigit = BigInt(digit) + BigInt(1);

  return numDigit.toString().split("").map(Number);
}

function plusOneWithParseInt(digits: number[]): number[] {
  const digit = digits.join("");
  const numDigit = parseInt(digit) + 1;

  return numDigit.toString().split("").map(Number);
}

function plusOneWithFor(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }
    digits[i] = 0;
  }

  const newDigits = new Array(digits.length + 1).fill(0);
  newDigits[0] = 1;

  return newDigits;
}

console.log("---------------------");
console.log("1-1", plusOne([1, 2, 3])); // [ 1, 2, 4 ]
console.log("1-2", plusOne([4, 3, 2, 1])); // [ 4, 3, 2, 2 ]
console.log("1-3", plusOne([9])); // [ 1, 0 ]
console.log("1-4", plusOne([1, 9])); // [ 2, 0 ]
console.log("1-5", plusOne([1, 2, 9])); // [ 1, 3, 0 ]
console.log("---------------------");
console.log("2-1", plusOneWithParseInt([1, 2, 3])); // [ 1, 2, 4 ]
console.log("2-2", plusOneWithParseInt([4, 3, 2, 1])); // [ 4, 3, 2, 2 ]
console.log("2-3", plusOneWithParseInt([9])); // [ 1, 0 ]
console.log("2-4", plusOneWithParseInt([1, 9])); // [ 2, 0 ]
console.log("2-5", plusOneWithParseInt([1, 2, 9])); // [ 1, 3, 0 ]
console.log("---------------------");
console.log("3-1", plusOneWithFor([1, 2, 3])); // [ 1, 2, 4 ]
console.log("3-2", plusOneWithFor([4, 3, 2, 1])); // [ 4, 3, 2, 2 ]
console.log("3-3", plusOneWithFor([9])); // [ 1, 0 ]
console.log("3-4", plusOneWithFor([1, 9])); // [ 2, 0 ]
console.log("3-5", plusOneWithFor([1, 2, 9])); // [ 1, 3, 0 ]
console.log("---------------------");

export { plusOne, plusOneWithParseInt, plusOneWithFor };
