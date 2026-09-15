// Title: Second Largest Element
// Difficulty: Easy
// Tags: Array, Sorting

function secondLargest(numbers) {
    let largest = -Infinity
    let second = - Infinity

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            second = largest
            largest = numbers[i]
        } else if (numbers[i] > second && numbers[i] != largest) {
            second = numbers[i]
        }
    }
    return second === -Infinity ? null : second;
}

console.log(secondLargest([10, 5, 8, 10, 3])); // 8
console.log(secondLargest([5, 5, 4]));         // 4
console.log(secondLargest([1, 2, 3]));         // 2
console.log(secondLargest([-5, -2, -10]));     // -5
console.log(secondLargest([7, 7, 7]));         // null
console.log(secondLargest([5]));               // null
console.log(secondLargest([]));                // null