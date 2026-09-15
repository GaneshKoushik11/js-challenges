// Title: Move Zeros
// Difficulty: Easy
// Tags: Array

function moveZeros(numbers) {
    let result = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== 0) {
            result.push(numbers[i])
        }
    }
    let arr = numbers.length - result.length
    for (let i = 0; i < arr; i++) {
        result.push(0)
    }
    return result
}

console.log(moveZeros([0, 1, 0, 3, 12]));    // [1, 3, 12, 0, 0]
console.log(moveZeros([4, 0, 5, 0, 0, 7])); // [4, 5, 7, 0, 0, 0]
console.log(moveZeros([1, 2, 3]));           // [1, 2, 3]
console.log(moveZeros([0, 0, 0]));           // [0, 0, 0]
console.log(moveZeros([]));                  // []