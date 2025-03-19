import { expect, test } from "@jest/globals";
import {
  removeDuplicates,
  removeDuplicatesWithSet,
} from "./Remove-Duplicates-from-Sorted-Array";

test("removeDuplicates function works Example 1 correctly", () => {
  expect(removeDuplicates([1, 1, 2])).toBe(2);
});

test("removeDuplicates function works Example 2 correctly", () => {
  expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
});

test("removeDuplicatesWithSet function works Example 1 correctly", () => {
  expect(removeDuplicatesWithSet([1, 1, 2])).toBe(2);
});

test("removeDuplicatesWithSet function works Example 2 correctly", () => {
  expect(removeDuplicatesWithSet([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
});
