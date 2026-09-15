// Title: Find Missing Number
// Difficulty: Easy
// Tags: Array, Summation

function findMissingNumber(numbers, n) {
    let expectedSum = n * (n + 1) / 2
    let actualSum = 0

    for (let number of numbers) {
        actualSum += number
    }
    return expectedSum - actualSum
}

console.log(findMissingNumber([1, 2, 4, 5], 5)); // 3
console.log(findMissingNumber([2, 3, 4, 5], 5)); // 1
console.log(findMissingNumber([1, 2, 3, 4], 5)); // 5
console.log(findMissingNumber([], 1));           // 1