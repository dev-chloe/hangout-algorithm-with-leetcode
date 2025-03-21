import { expect, test } from "@jest/globals";
import { plusOne, plusOneWithFor, plusOneWithParseInt } from "./Plus-One";

test("plusOne function works Example 1 correctly", () => {
  expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
});

test("plusOne function works Example 2 correctly", () => {
  expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
});

test("plusOne function works Example 3 correctly", () => {
  expect(plusOne([9])).toEqual([1, 0]);
});

test("plusOne function works Example 4 correctly", () => {
  expect(plusOne([1, 9])).toEqual([2, 0]);
});

test("plusOneWithParseInt function works Example 1 correctly", () => {
  expect(plusOneWithParseInt([1, 2, 3])).toEqual([1, 2, 4]);
});

test("plusOneWithParseInt function works Example 2 correctly", () => {
  expect(plusOneWithParseInt([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
});

test("plusOneWithParseInt function works Example 3 correctly", () => {
  expect(plusOneWithParseInt([9])).toEqual([1, 0]);
});

test("plusOneWithParseInt function works Example 4 correctly", () => {
  expect(plusOneWithParseInt([1, 9])).toEqual([2, 0]);
});

test("plusOneWithFor function works Example 1 correctly", () => {
  expect(plusOneWithFor([1, 2, 3])).toEqual([1, 2, 4]);
});

test("plusOneWithFor function works Example 2 correctly", () => {
  expect(plusOneWithFor([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
});

test("plusOneWithFor function works Example 3 correctly", () => {
  expect(plusOneWithFor([9])).toEqual([1, 0]);
});

test("plusOneWithFor function works Example 4 correctly", () => {
  expect(plusOneWithFor([1, 9])).toEqual([2, 0]);
});
