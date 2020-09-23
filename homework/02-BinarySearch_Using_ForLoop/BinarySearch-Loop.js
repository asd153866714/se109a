function binarySearch(array, value) {
    let newArry = array.sort((a, b) => a - b)
    
    let from = 0,
        to = newArry.length - 1;

    while (from <= to) {
        let mid = Math.floor((from + to) / 2)
        if (value === newArry[mid]) return mid
        if (value > newArry[mid]) from = mid + 1
        if (value < newArry[mid]) to = mid - 1
    }
    return null
}

var result = binarySearch([1, 3, 4, 6, 7, 8], 4)
console.log(result)

var result = binarySearch([3, 4, 2, 1, 5], 4)
console.log(result)

var result = binarySearch([3, 4, 2, 1, 5], 9)
console.log(result)