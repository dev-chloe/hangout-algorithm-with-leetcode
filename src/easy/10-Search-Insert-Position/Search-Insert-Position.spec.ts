import { expect, test } from "@jest/globals";
import { searchInsert, searchInsertWithFor } from "./Search-Insert-Position";

test("searchInsert function works Example 1 correctly", () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
});

test("searchInsert function works Example 2 correctly", () => {
  expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
});

test("searchInsert function works Example 3 correctly", () => {
  expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
});

test("searchInsertWithFor function works Example 1 correctly", () => {
  expect(searchInsertWithFor([1, 3, 5, 6], 5)).toBe(2);
});

test("searchInsertWithFor function works Example 2 correctly", () => {
  expect(searchInsertWithFor([1, 3, 5, 6], 2)).toBe(1);
});

test("searchInsertWithFor function works Example 3 correctly", () => {
  expect(searchInsertWithFor([1, 3, 5, 6], 7)).toBe(4);
});
