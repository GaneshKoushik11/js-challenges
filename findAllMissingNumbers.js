// Title: Find All Missing Numbers
// Difficulty: Easy
// Tags: Array, Set

function findMissingNumbers(numbers, min, max) {
    const available = new Set(numbers);
    const missingNumbers = [];

    for (let number = min; number <= max; number++) {
        if (!available.has(number)) {
            missingNumbers.push(number);
        }
    }

    return missingNumbers;
}

console.log(findMissingNumbers([1, 2, 4, 6], 1, 6)); // [3, 5]

console.log(findMissingNumbers([3, 5, 6, 8], 3, 8)); // [4, 7]

console.log(findMissingNumbers([1, 2, 3], 1, 3)); // []

console.log(findMissingNumbers([], 1, 4)); // [1, 2, 3, 4]

console.log(findMissingNumbers([1, 1, 3], 1, 3)); // [2]