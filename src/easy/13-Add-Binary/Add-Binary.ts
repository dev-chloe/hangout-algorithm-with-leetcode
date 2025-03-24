/**
 * Given two binary strings a and b, return their sum as a binary string.
 *
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 *
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 */

function addBinary(a: string, b: string): string {
  const numA = parseInt(a, 2);
  const numB = parseInt(b, 2);
  const sum = numA + numB;
  return sum.toString(2);
}

function addBinaryWithBigInt(a: string, b: string): string {
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
}

console.log("---------------------");
console.log("1-1", addBinary("11", "1")); // "100"
console.log("1-2", addBinary("1010", "1011")); // "10101"
console.log("---------------------");
console.log("2-1", addBinaryWithBigInt("11", "1")); // "100"
console.log("2-2", addBinaryWithBigInt("1010", "1011")); // "10101"
console.log("---------------------");

export { addBinary, addBinaryWithBigInt };
