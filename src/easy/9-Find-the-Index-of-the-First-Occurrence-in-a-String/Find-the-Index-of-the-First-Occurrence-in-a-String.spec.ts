import { expect, test } from "@jest/globals";
import strStr from "./Find-the-Index-of-the-First-Occurrence-in-a-String";

test("strStr function works Example 1 correctly", () => {
  expect(strStr("sadbutsad", "sad")).toBe(0);
});

test("strStr function works Example 2 correctly", () => {
  expect(strStr("leetcode", "leeto")).toBe(-1);
});

test("strStr function works Example 3 correctly", () => {
  expect(strStr("testthis", "stt")).toBe(2);
});
