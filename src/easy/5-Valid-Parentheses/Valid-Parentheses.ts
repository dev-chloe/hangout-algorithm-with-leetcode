/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 * Example 1:
 * Input: s = "()"
 * Output: true
 *
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 *
 * Example 3:
 * Input: s = "(]"
 * Output: false
 * Example 4:
 * Input: s = "([])"
 * Output: true
 */

function isValid(s: string): boolean {
  const bracketMap: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack: string[] = [];

  for (const bracket of s) {
    if (bracket === "(" || bracket === "[" || bracket === "{") {
      stack.push(bracket);
      continue;
    }
    if (stack.length === 0 || stack.pop() !== bracketMap[bracket]) {
      return false;
    }
  }
  return stack.length === 0;
}

console.log("---------------------");
console.log("1-1. ", isValid("()")); // true
console.log("1-2. ", isValid("()[]{}")); // true
console.log("1-3. ", isValid("(]")); // false
console.log("1-4. ", isValid("([])")); // true
console.log("---------------------");

export default isValid;
