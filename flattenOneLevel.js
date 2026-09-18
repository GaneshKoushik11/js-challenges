// Title: Flatten One Level
// Difficulty: Easy
// Tags: Array

/**
 * Description: Takes an array that may contain nested arrays (at most one level deep) and returns a new array with all elements flattened by one level.
 * @param {Array} numbers - The array to flatten.
 * @returns {Array} Returns a new array with all elements flattened by one level.
 */

function flattenOneLevel(numbers) {
    // Check if the input array is empty or null, if so return an empty array
    if (!numbers || numbers.length === 0) {
        return []
    }

    let result = []
    for (const item of numbers) {
        if (Array.isArray(item)) {
            for (const value of item) {
                result.push(value);
            }
        } else {
            result.push(item)
        }
    }
    return result
}

console.log(flattenOneLevel([1, [2, 3], 4, [5, 6]]));
// [1, 2, 3, 4, 5, 6]

console.log(flattenOneLevel([[1, 2], [3, 4]]));
// [1, 2, 3, 4]

console.log(flattenOneLevel([1, 2, 3]));
// [1, 2, 3]

console.log(flattenOneLevel([]));
// []

console.log(flattenOneLevel([1, [2, [3, 4]]]));
// [1, 2, [3, 4]]