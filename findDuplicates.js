// Title: Find Duplicates
// Difficulty: Easy
// Tags: Frequency Counter, Array

function findDuplicates(numbers) {
    const freq = {}
    const duplicates = [];

    for (const number of numbers) {
        freq[number] = (freq[number] || 0) + 1

        if (freq[number] === 2) {
            duplicates.push(number)
        }
    }

    return duplicates
}

console.log(findDuplicates([1, 2, 3, 2, 4, 1]))