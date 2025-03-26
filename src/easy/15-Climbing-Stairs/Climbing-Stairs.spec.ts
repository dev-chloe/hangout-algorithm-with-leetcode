import { expect, test } from "@jest/globals";
import {
  climbStairs,
  climbStairsRecursive,
  climbStairsWithReqursive,
} from "./Climbing-Stairs";

test("climbStairs function works Example 1 correctly", () => {
  expect(climbStairs(2)).toBe(2);
});

test("climbStairs function works Example 2 correctly", () => {
  expect(climbStairs(3)).toBe(3);
});

test("climbStairs function works Example 3 correctly", () => {
  expect(climbStairs(4)).toBe(5);
});

test("climbStairs function works Example 4 correctly", () => {
  expect(climbStairs(5)).toBe(8);
});

test("climbStairsRecursive function works Example 1 correctly", () => {
  expect(climbStairsRecursive(2)).toBe(2);
});

test("climbStairsRecursive function works Example 2 correctly", () => {
  expect(climbStairsRecursive(3)).toBe(3);
});

test("climbStairsRecursive function works Example 3 correctly", () => {
  expect(climbStairsRecursive(4)).toBe(5);
});

test("climbStairsRecursive function works Example 4 correctly", () => {
  expect(climbStairsRecursive(5)).toBe(8);
});

test("climbStairsWithReqursive function works Example 1 correctly", () => {
  expect(climbStairsWithReqursive(2)).toBe(2);
});

test("climbStairsWithReqursive function works Example 2 correctly", () => {
  expect(climbStairsWithReqursive(3)).toBe(3);
});

test("climbStairsWithReqursive function works Example 3 correctly", () => {
  expect(climbStairsWithReqursive(4)).toBe(5);
});

test("climbStairsWithReqursive function works Example 4 correctly", () => {
  expect(climbStairsWithReqursive(5)).toBe(8);
});
