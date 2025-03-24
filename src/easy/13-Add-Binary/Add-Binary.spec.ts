import { expect, test } from "@jest/globals";
import { addBinary, addBinaryWithBigInt } from "./Add-Binary";

test("addBinary function works Example 1 correctly", () => {
  expect(addBinary("11", "1")).toBe("100");
});

test("addBinary function works Example 2 correctly", () => {
  expect(addBinary("1010", "1011")).toBe("10101");
});

test("addBinaryWithBigInt function works Example 1 correctly", () => {
  expect(addBinaryWithBigInt("11", "1")).toBe("100");
});

test("addBinaryWithBigInt function works Example 2 correctly", () => {
  expect(addBinaryWithBigInt("1010", "1011")).toBe("10101");
});
