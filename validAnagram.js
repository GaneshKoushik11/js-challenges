// Title: Valid Anagram
// Difficulty: Easy
// Tags: Frequency Counter, String

function validAnagram(str1, str2) {
    let freq = {}

    if (str1.length != str2.length) {
        return false
    }

    for (let char of str1) {
        freq[char] = (freq[char] || 0) + 1
    }

    for (let char of str2) {
        if (!freq[char]) return false
        freq[char] = (freq[char] || 0) - 1
    }

    return true
}

console.log(validAnagram("listen", "silent"))