// Title: Chunk Array
// Difficulty: Medium
// Tags: Array

/**
 * Description: Takes an array of numbers and returns an array of arrays, where each inner array has at most `size` elements.
 * @param {number[]} numbers - The array of numbers to chunk.
 * @param {number} size - The maximum number of elements in each inner array.
 * @returns {number[][]} Returns an array of arrays, where each inner array has at most `size` elements.
 */

function chunkArray(numbers, size) {
    // Check if the input array is empty or null, if so return an empty array
    if (!numbers || numbers.length === 0) {
        return []
    }

    // Check if the size is less than or equal to 0, if so return an empty array
    if (size <= 0) {
        return []
    }

    let result = []
    for (let i = 0; i < numbers.length; i += size) {
        const chunk = numbers.slice(i, i + size);
        console.log(chunk, "chunk", i, i + size)
        result.push(chunk)
    }
    return result
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));
// [[1, 2], [3, 4], [5]]

console.log(chunkArray([1, 2, 3, 4, 5, 6], 3));
// [[1, 2, 3], [4, 5, 6]]

console.log(chunkArray([1, 2], 5));
// [[1, 2]]

console.log(chunkArray([], 3));
[]

console.log(chunkArray([1, 2, 3], 1));
// [[1], [2], [3]]