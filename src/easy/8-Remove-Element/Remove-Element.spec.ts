import { expect, test } from "@jest/globals";
import removeElement from "./Remove-Element";

test("removeElement function works Example 1 correctly", () => {
  expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
});

test("removeElement function works Example 2 correctly", () => {
  expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
});
