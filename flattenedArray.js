// Title: Flatten Array
// Difficulty: Medium
// Tags: Array

/**
 * Description: Takes an array that may contain nested arrays (at any depth) and returns a new array with all elements flattened.
 * @param {Array} numbers - The array to flatten.
 * @returns {Array} Returns a new array with all elements flattened.
 */

function flattenArray(numbers) {
    // Check if the input array is empty or null, if so return an empty array
    if (!numbers || numbers.length === 0) {
        return []
    }

    let result = []
    for (const item of numbers) {
        if (Array.isArray(item)) {
            const flattened = flattenArray(item)
            result.push(...flattened)
        } else {
            result.push(item)
        }
    }
    return result
}

console.log(flattenArray([1, [2, 3], 4, [5, 6]]));
// [1, 2, 3, 4, 5, 6]

console.log(flattenArray([[1, 2], [3, 4]]));
// [1, 2, 3, 4]

console.log(flattenArray([1, 2, 3]));
// [1, 2, 3]

console.log(flattenArray([]));
// []

console.log(flattenArray([1, [2, [3, 4]]]));
// [1, 2, 3, 4]