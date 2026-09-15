// Title: Intersection of Two Arrays
// Difficulty: Easy
// Tags: Frequency Counter, Set, Array

function intersection(arr1, arr2) {
    let freq = {}
    let duplicates = []
    let numbers = [...new Set(arr1), ...new Set(arr2)]
    for (let number of numbers) {
        freq[number] = (freq[number] || 0) + 1
        if (freq[number] === 2) {
            duplicates.push(number)
        }
    }
    return duplicates
}

console.log(intersection([4, 2, 2, 1, 3], [2, 3, 5]));