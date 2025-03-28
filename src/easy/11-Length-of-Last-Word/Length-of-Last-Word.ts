/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 *
 * Example 1:
 * Input: s = "Hello World"
 * Output: 5
 * Explanation: The last word is "World" with length 5.
 *
 * Example 2:
 * Input: s = "   fly me   to   the moon  "
 * Output: 4
 * Explanation: The last word is "moon" with length 4.
 *
 * Example 3:
 * Input: s = "luffy is still joyboy"
 * Output: 6
 * Explanation: The last word is "joyboy" with length 6.
 */

function lengthOfLastWord(s: string): number {
  return (s.trim().split(" ").pop() ?? "").length;
}

function lengthOfLastWordWithAt(s: string): number {
  return (s.trim().split(" ").at(-1) ?? "").length;
}

function lengthOfLastWordWithFor(s: string): number {
  const stringArr = [];
  const cutS = s.split(" ");
  for (const element of cutS) {
    if (element !== "") {
      stringArr.push(element);
    }
  }
  return stringArr[stringArr.length - 1].length;
}

console.log("---------------------");
console.log("1-1", lengthOfLastWord("Hello World")); // 5
console.log("1-2", lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log("1-3", lengthOfLastWord("luffy is still joyboy")); // 6
console.log("1-4", lengthOfLastWord("")); // 0
console.log("---------------------");
console.log("2-1", lengthOfLastWordWithAt("Hello World")); // 5
console.log("2-2", lengthOfLastWordWithAt("   fly me   to   the moon  ")); // 4
console.log("2-3", lengthOfLastWordWithAt("luffy is still joyboy")); // 6
console.log("---------------------");
console.log("3-1", lengthOfLastWordWithFor("Hello World")); // 5
console.log("3-2", lengthOfLastWordWithFor("   fly me   to   the moon  ")); // 4
console.log("3-3", lengthOfLastWordWithFor("luffy is still joyboy")); // 6
console.log("---------------------");

export { lengthOfLastWord, lengthOfLastWordWithAt, lengthOfLastWordWithFor };
