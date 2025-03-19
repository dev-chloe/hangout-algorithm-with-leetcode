// sum.test.ts
import { expect, test } from "@jest/globals";
import sum from "./sum";

test("sum function works correctly", () => {
  expect(sum(1, 2)).toBe(3);
});
