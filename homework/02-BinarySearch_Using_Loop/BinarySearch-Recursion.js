function binarySearch(arr, value, from, to) {
    if (from > to) return null
    let mid = Math.floor((from + to) / 2)      // Math.floor(n) => 回傳小於或等於 n 的最大整數
    if (value === arr[mid]) return mid
    if (value > arr[mid]) return binarySearch(arr, value, mid+1, to)
    if (value < arr[mid]) return binarySearch(arr, from, 0, mid-1)
}

function search(array, value) {
    let newArray = array.sort((a, b) => a - b)
    let n = array.length - 1
    return binarySearch(newArray, value, 0, n) 
}

var result = search([1, 3, 4, 6, 7, 8], 4)
console.log(result)