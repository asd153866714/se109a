function quickSort(arr: any[]): any[] {
  // 如果 array 為空陣列或只有一個元素，直接返回，不需排序。
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0]; // 將陣列元素的第一項設為基準值
  let left = []; // 用來儲存比基準值小的元素
  let right = []; // 用來儲存比基準值大的元素

  for (let i = 1; i < arr.length; i++) {
    // 設定 i 從 index 1 開始，因為陣列第一項被我們設為 pivot 因此不需考慮
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    }
    if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

export { quickSort };
