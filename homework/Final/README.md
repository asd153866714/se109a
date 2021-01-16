# Quick Sort 快速排序

## 參考資料

- [JS 學資料結構與演算法 (排序篇)— 快速排序法 Quick Sort](https://oldmo860617.medium.com/js-%E5%AD%B8%E8%B3%87%E6%96%99%E7%B5%90%E6%A7%8B%E8%88%87%E6%BC%94%E7%AE%97%E6%B3%95-1-%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F%E6%B3%95-quick-sort-8904e226ad5d)
- [VisuAlgo - Sorting](https://visualgo.net/en/sorting)

## 說明

**快速排序**運用 Divide and Conquer 的概念。Divide：選定 pivot ，挪到陣列邊緣，然後把陣列分成大的一邊和小的一邊。 Conquer：兩邊分別排序。

- 從要排序的陣列中選定一個**基準數 (pivot)**，這裡選擇了陣列中的第一個數。
- 建立兩個空陣列 left 和 right 分別儲存小於和大於 pivot 的數。
- 遍歷要排序的陣列，小於或等於 pivot 的數存入 left 陣列，大於 pivot 的數存入 right 陣列。
- 以遞迴的方式，再接著分別排序 left 和 right 陣列

## 複雜度分析

- 最佳：O(n log n)
- 平均：O(n log n)
- 最差：O(n^2)
- 空間複雜度：O(log n)

## 實作

如果 array 為空陣列或只有一個元素，直接返回，不需排序。

```js
if (arr.length <= 1) {
  return arr;
}
```

將陣列元素的第一項設為基準值，並新增兩個空陣列。

```js
let pivot = arr[0];
let left = [];
let right = [];
```

遍歷要排序的陣列，小於或等於 pivot 的數存入 left 陣列，大於 pivot 的數存入 right 陣列。

```js
for (let i = 1; i < arr.length; i++) {
  if (arr[i] <= pivot) {
    left.push(arr[i]);
  }
  if (arr[i] > pivot) {
    right.push(arr[i]);
  }
}
```

以遞迴的方式，再接著分別排序 left 和 right 陣列，最後的回傳值為排序後的結果。

```js
return [...quickSort(left), pivot, ...quickSort(right)];
```

## 測試

測試空陣列

```js
Deno.test("should return empty array", () => {
  expect(quickSort([])).toEqual([]);
});
```

測試只有一個元素的陣列

```js
Deno.test("should return an array have 1 element", () => {
  expect(quickSort([3])).toEqual([3]);
});
```

測試未排序過的陣列、有重複元素的陣列

```js
Deno.test("should return sorted array", () => {
  let testArray1 = [5, 2, 1, 8, 4, 7, 6, 3];
  let testArray2 = [34, 25, 78, 67, 109, 1, 18, 76, 200];
  let testArray3 = [5, 2, 2, 1, 8, 8, 4];

  expect(quickSort(testArray1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(quickSort(testArray2)).toEqual([1, 18, 25, 34, 67, 76, 78, 109, 200]);
  expect(quickSort(testArray3)).toEqual([1, 2, 2, 4, 5, 8, 8]);
});
```

測試結果

```
$ Deno test
Check file:///D:/Xing/School-Classes/se109a/homework/Final/.deno.test.ts
running 3 tests
test should return empty array ... ok (3ms)
test should return an array have 1 element ... ok (1ms)
test should return sorted array ... ok (1ms)

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (11ms)
```
