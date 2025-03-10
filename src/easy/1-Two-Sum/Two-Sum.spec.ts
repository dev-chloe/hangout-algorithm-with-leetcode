import { expect, test } from "@jest/globals";
import twoSum from "./Two-Sum";

test("twoSum function works Example 1 correctly", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("twoSum function works Example 2 correctly", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test("twoSum function works Example 3 correctly", () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});
