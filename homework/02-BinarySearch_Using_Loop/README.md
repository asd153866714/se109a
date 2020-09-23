# 迴圈版的 BinarySearch
## 執行
```bash
$ deno run BinarySearch-Loop.js
2
3
null
```

## 說明

* 先將陣列由小到大排序
```js
let newArry = array.sort((a, b) => a - b)
```
<br>

* 把 from 指向陣列開頭，to 指向陣列結尾
```js
let from = 0,
    to = newArry.length - 1;
```
<br>

* 如果 from 小於等於 to
    * 將 mid 指向陣列中間的節點
    * 如果符合就回傳值
    * 如果 value 大於 mid 的值，將 from 指向 mid + 1 的位置
    * 如果 value 小於 mid 的值，將 to 指向 mid - 1 的位置
* 如果沒找到就回傳 null

```js
while (from <= to) {
    let mid = Math.floor((from + to) / 2)
    if (value === newArry[mid]) return mid
    if (value > newArry[mid]) from = mid + 1
    if (value < newArry[mid]) to = mid - 1
}
return null
```