// https://leetcode.com/problems/palindrome-number/

/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */

/**
 * Example 1:
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 *
 * Example 2:
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 *
 * Example 3:
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 */

function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  const reverseNum = x.toString().split("").reverse().join("");

  return x === parseInt(reverseNum);
}

function isPalindromeWithWhile(x: number): boolean {
  if (x < 0) {
    return false;
  }

  let reverse: number = 0;
  const original: number = x;
  while (x > 0) {
    reverse = reverse * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return reverse === original;
}

console.log("---------------------");
console.log("1-1. ", isPalindrome(121));
console.log("1-2. ", isPalindrome(-121));
console.log("1-3. ", isPalindrome(10));
console.log("---------------------");
console.log("2-1. ", isPalindromeWithWhile(121));
console.log("2-2. ", isPalindromeWithWhile(-121));
console.log("2-3. ", isPalindromeWithWhile(10));
console.log("---------------------");

export { isPalindrome, isPalindromeWithWhile };
