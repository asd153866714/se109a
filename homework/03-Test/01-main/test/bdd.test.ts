import { expect } from "https://deno.land/x/expect/mod.ts";
import { tail, reverse, intersection } from "../src/my_lodash.ts";

Deno.test("tail", () => {
  expect(tail([1, 3, 5])).toEqual([3, 5]);
  expect(tail([])).toEqual([]);
});

Deno.test("reverse", () => {
  expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
  expect(reverse([1])).toEqual([1]);
  expect(reverse([])).toEqual([]);
  expect(reverse(["a"])).toEqual(["a"]);
});

Deno.test("intersection", () => {
  expect(intersection([1, 2, 3], [1, 3, 5])).toEqual([1, 3]);
  expect(intersection(["a", "b", "c"], ["b", "c"])).toEqual(["b", "c"]);
  expect(intersection([1, 2, 3], [4, 5])).toEqual([]);
});
