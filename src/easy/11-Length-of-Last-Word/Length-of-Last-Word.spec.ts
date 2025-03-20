import { expect, test } from "@jest/globals";
import {
  lengthOfLastWord,
  lengthOfLastWordWithAt,
  lengthOfLastWordWithFor,
} from "./Length-of-Last-Word";

test("lengthOfLastWord function works Example 1 correctly", () => {
  expect(lengthOfLastWord("Hello World")).toBe(5);
});

test("lengthOfLastWord function works Example 2 correctly", () => {
  expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
});

test("lengthOfLastWord function works Example 3 correctly", () => {
  expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
});

test("lengthOfLastWordWithAt function works Example 1 correctly", () => {
  expect(lengthOfLastWordWithAt("Hello World")).toBe(5);
});

test("lengthOfLastWordWithAt function works Example 2 correctly", () => {
  expect(lengthOfLastWordWithAt("   fly me   to   the moon  ")).toBe(4);
});

test("lengthOfLastWordWithAt function works Example 3 correctly", () => {
  expect(lengthOfLastWordWithAt("luffy is still joyboy")).toBe(6);
});

test("lengthOfLastWordWithFor function works Example 1 correctly", () => {
  expect(lengthOfLastWordWithFor("Hello World")).toBe(5);
});

test("lengthOfLastWordWithFor function works Example 2 correctly", () => {
  expect(lengthOfLastWordWithFor("   fly me   to   the moon  ")).toBe(4);
});

test("lengthOfLastWordWithFor function works Example 3 correctly", () => {
  expect(lengthOfLastWordWithFor("luffy is still joyboy")).toBe(6);
});
