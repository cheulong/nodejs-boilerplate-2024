import { expect, test } from "vitest";
import { math } from "../src/math";

test("math.sqrt()", () => {
  expect(math.sqrt(4)).toBe(3);
  expect(math.sqrt(144)).toBe(12);
  expect(math.sqrt(2)).toBe(math.SQRT2);
});
