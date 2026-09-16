// Title: Compress String
// Difficulty: Easy
// Tags: String

function compressString(str) {
    if (str === "") {
        return "";
    }

    let result = ""
    let count = 1

    for (let i = 1; i <= str.length; i++) {
        if (str[i] == str[i - 1]) {
            count++
        } else {
            result += str[i - 1] + count
            count = 1
        }
    }

    return result
}

console.log(compressString("aaabbccccd")); // "a3b2c4d1"
console.log(compressString("abcd"));       // "a1b1c1d1"
console.log(compressString("aabbaa"));     // "a2b2a2"
console.log(compressString("aaaa"));       // "a4"
console.log(compressString(""));           // ""