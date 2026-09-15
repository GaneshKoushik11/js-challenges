// Title: First Unique Character
// Difficulty: Easy
// Tags: Frequency Counter, String

function firstUniqueCharacter(str) {
    let freq = {}
    for (let word of str) {
        freq[word] = (freq[word] || 0) + 1
    }

    for (let char of str) {
        if (freq[char] == 1) {
            return char
        }
    }

    return null
}

console.log(firstUniqueCharacter("javascript"))