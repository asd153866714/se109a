# Quick Sort 快速排序

## 說明

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

```
$ Deno test
Check file:///D:/Xing/School-Classes/se109a/homework/Final/.deno.test.ts
running 3 tests
test should return empty array ... ok (3ms)
test should return an array have 1 element ... ok (1ms)
test should return sorted array ... ok (1ms)

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (11ms)
```
