// Title: Remove Duplicates
// Difficulty: Easy
// Tags: Frequency Counter, Array

function removeDuplicates(numbers) {
    let result = []
    let freq = {}
    for (let num of numbers) {
        freq[num] = (freq[num] || 0) + 1

        if (freq[num] === 1) {
            result.push(num)
        }
    }

    return result
}

console.log(removeDuplicates([1, 2, 2, 3, 1, 4])); // [1, 2, 3, 4]
console.log(removeDuplicates([5, 5, 5]));          // [5]
console.log(removeDuplicates([1, 2, 3]));          // [1, 2, 3]
console.log(removeDuplicates([]));                 // []
console.log(removeDuplicates([0, -1, 0, -1, 2])); // [0, -1, 2]