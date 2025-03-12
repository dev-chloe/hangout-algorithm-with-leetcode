import { expect, test } from "@jest/globals";
import romanToInt from "./Roman-to-Integer";

test("romanToInt function works Example 1 correctly", () => {
  expect(romanToInt("III")).toBe(3);
});

test("romanToInt function works Example 2 correctly", () => {
  expect(romanToInt("LVIII")).toBe(58);
});

test("romanToInt function works Example 3 correctly", () => {
  expect(romanToInt("MCMXCIV")).toBe(1994);
});
