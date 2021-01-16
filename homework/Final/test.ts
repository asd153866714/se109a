import { expect } from "https://deno.land/x/expect/mod.ts";
import { quickSort } from "./quick-sort.ts";

Deno.test("should return empty array", () => {
  expect(quickSort([])).toEqual([]);
});

Deno.test("should return an array have 1 element", () => {
  expect(quickSort([3])).toEqual([3]);
});

Deno.test("should return sorted array", () => {
  let testArray1 = [5, 2, 1, 8, 4, 7, 6, 3];
  let testArray2 = [34, 25, 78, 67, 109, 1, 18, 76, 200];
  let testArray3 = [5, 2, 2, 1, 8, 8, 4];

  expect(quickSort(testArray1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(quickSort(testArray2)).toEqual([1, 18, 25, 34, 67, 76, 78, 109, 200]);
  expect(quickSort(testArray3)).toEqual([1, 2, 2, 4, 5, 8, 8]);
});
