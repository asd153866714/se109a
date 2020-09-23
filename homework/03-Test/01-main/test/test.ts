import { assertEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";
import { tail, reverse, intersection } from '../src/my_lodash.ts'

Deno.test('tail', () => {
    assertEquals(tail([1, 3, 5]), [3, 5])
})

Deno.test('reverse', () => {
    assertEquals(reverse([1, 2, 3]), [3, 2, 1])
})

Deno.test('intersection', () => {
    assertEquals(intersection([1, 2, 3], [1, 3, 5]), [1, 3])
})