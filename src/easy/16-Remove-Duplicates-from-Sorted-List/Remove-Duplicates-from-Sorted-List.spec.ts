import { expect, test } from "@jest/globals";
import {
  deleteDuplicates,
  processLists,
} from "./Remove-Duplicates-from-Sorted-List";

test("deleteDuplicates function works Example 1 correctly", () => {
  expect(processLists(deleteDuplicates, [1, 1, 2])).toEqual([1, 2]);
});

test("deleteDuplicates function works Example 2 correctly", () => {
  expect(processLists(deleteDuplicates, [1, 1, 2, 3, 3])).toEqual([1, 2, 3]);
});
