// Title: Maximum Consecutive Ones
// Difficulty: Easy
// Tags: Array

function maximumConsecutiveOnes(numbers) {
    if (numbers.length == 0) {
        return 0
    }
    let currentCount = 0
    let maxCount = 0

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == 1) {
            currentCount++
            if (currentCount > maxCount) {
                maxCount = currentCount
            }
        } else {
            currentCount = 0
        }
    }

    return maxCount
}

console.log(maximumConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
console.log(maximumConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2
console.log(maximumConsecutiveOnes([1, 1, 1, 1]));       // 4
console.log(maximumConsecutiveOnes([0, 0, 0]));          // 0
console.log(maximumConsecutiveOnes([]));                 // 0