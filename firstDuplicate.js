// Title: First Duplicate
// Difficulty: Easy
// Tags: Frequency Counter, Array

function firstDuplicate(numbers) {
    let freq = {}

    for (let number of numbers) {
        freq[number] = (freq[number] || 0) + 1
        if (freq[number] === 2) {
            return number
        }
    }

    return null
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2])); // 3
console.log(firstDuplicate([1, 2, 1, 2]));       // 1
console.log(firstDuplicate([1, 2, 3, 4]));       // null
console.log(firstDuplicate([7, 7]));             // 7
console.log(firstDuplicate([]));                 // null