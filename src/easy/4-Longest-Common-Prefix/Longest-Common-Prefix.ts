/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 */

function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return "";

  strs.sort((a, b) => a.localeCompare(b));

  const first = strs[0];
  const last = strs[strs.length - 1];

  let result = "";

  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) {
      result += first[i];
    } else {
      break;
    }
  }
  return result;
}

console.log("---------------------");
console.log("1-1. ", longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log("1-2. ", longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log("1-3. ", longestCommonPrefix([])); // ""
console.log("1-4. ", longestCommonPrefix(["flower", "flow", "flowerpot"])); // "flow"
console.log("---------------------");

export default longestCommonPrefix;
