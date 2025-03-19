import { expect, test } from "@jest/globals";
import longestCommonPrefix from "./Longest-Common-Prefix";

test("longestCommonPrefix function works Example 1 correctly", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl");
});

test("longestCommonPrefix function works Example 2 correctly", () => {
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual("");
});

test("longestCommonPrefix function works Example 3 correctly", () => {
  expect(longestCommonPrefix([])).toEqual("");
});

test("longestCommonPrefix function works Example 4 correctly", () => {
  expect(longestCommonPrefix(["flower", "flow", "flowerpot"])).toEqual("flow");
});
