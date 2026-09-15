// Title: Two Sum
// Difficulty: Easy
// Tags: Array, Hash Map

function twoSum(numbers, target) {
    let result = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] == target) {
                result = [i, i + 1]
            }
        }
    }
    return result
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6));      // [1, 2]
console.log(twoSum([3, 3], 6));         // [0, 1]
console.log(twoSum([1, 2, 3], 10));     // []
console.log(twoSum([], 5));             // []