import { expect, test } from "@jest/globals";
import {
  mergeTwoLists,
  mergeTwoListsWithRecursion,
  processLists,
} from "./Merge-Two-Sorted-Lists";

test("mergeTwoLists function works Example 1 correctly", () => {
  expect(processLists(mergeTwoLists, [1, 2, 4], [1, 3, 4])).toEqual([
    1, 1, 2, 3, 4, 4,
  ]);
});
test("mergeTwoLists function works Example 2 correctly", () => {
  expect(processLists(mergeTwoLists, [], [])).toEqual([]);
});
test("mergeTwoLists function works Example 3 correctly", () => {
  expect(processLists(mergeTwoLists, [], [0])).toEqual([0]);
});

test("mergeTwoListsWithRecursion function works Example 1 correctly", () => {
  expect(
    processLists(mergeTwoListsWithRecursion, [1, 2, 4], [1, 3, 4])
  ).toEqual([1, 1, 2, 3, 4, 4]);
});
test("mergeTwoListsWithRecursion function works Example 2 correctly", () => {
  expect(processLists(mergeTwoListsWithRecursion, [], [])).toEqual([]);
});
test("mergeTwoListsWithRecursion function works Example 3 correctly", () => {
  expect(processLists(mergeTwoListsWithRecursion, [], [0])).toEqual([0]);
});
