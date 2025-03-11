import { expect, test } from "@jest/globals";
import { isPalindrome, isPalindromeWithWhile } from "./Palindrome-Number";

test("isPalindrome function works Example 1 correctly", () => {
  expect(isPalindrome(121)).toBe(true);
});

test("isPalindrome function works Example 2 correctly", () => {
  expect(isPalindrome(-121)).toBe(false);
});

test("isPalindrome function works Example 3 correctly", () => {
  expect(isPalindrome(10)).toBe(false);
});

test("isPalindromeWithWhile function works Example 1 correctly", () => {
  expect(isPalindromeWithWhile(121)).toBe(true);
});

test("isPalindromeWithWhile function works Example 2 correctly", () => {
  expect(isPalindromeWithWhile(-121)).toBe(false);
});

test("isPalindromeWithWhile function works Example 3 correctly", () => {
  expect(isPalindromeWithWhile(10)).toBe(false);
});
