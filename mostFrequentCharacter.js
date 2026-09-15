// Title: Most Frequent Character
// Difficulty: Easy
// Tags: Frequency Counter, String

function mostFrequentCharacter(str) {
    let freq = {}
    let maxChar = ""
    let maxCount = 0

    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1
    }

    for (let char of str) {
        if (freq[char] > maxCount) {
            maxCount = freq[char]
            maxChar = char
        }
    }

    return maxChar
}

console.log(mostFrequentCharacter("javascript"))