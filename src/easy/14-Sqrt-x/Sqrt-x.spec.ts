import { expect, test } from "@jest/globals";
import { mySqrt, mySqrtWithSqrt } from "./Sqrt-x";

test("mySqrt function works Example 1 correctly", () => {
  expect(mySqrt(4)).toBe(2);
});

test("mySqrt function works Example 2 correctly", () => {
  expect(mySqrt(8)).toBe(2);
});

test("mySqrtWithSqrt function works Example 1 correctly", () => {
  expect(mySqrtWithSqrt(4)).toBe(2);
});

test("mySqrtWithSqrt function works Example 2 correctly", () => {
  expect(mySqrtWithSqrt(8)).toBe(2);
});
