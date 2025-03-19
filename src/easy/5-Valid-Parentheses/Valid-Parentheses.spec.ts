import { expect, test } from "@jest/globals";
import isValid from "./Valid-Parentheses";

test("isValid function works Example 1 correctly", () => {
  expect(isValid("()")).toBe(true);
});

test("isValid function works Example 2 correctly", () => {
  expect(isValid("()[]{}")).toBe(true);
});

test("isValid function works Example 1 correctly", () => {
  expect(isValid("(]")).toBe(false);
});

test("isValid function works Example 1 correctly", () => {
  expect(isValid("[]")).toBe(true);
});
