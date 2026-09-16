
// Title: Reverse Words in a Sentence
// Difficulty: Easy
// Tags: Array, String

function reverseWords(sentence) {
    let words = sentence.trim().split(/\s+/)
    let results = []

    for (let i = words.length - 1; i >= 0; i--) {
        results.push(words[i])
    }

    return results.join(" ")

}

console.log(reverseWords("JavaScript is powerful"));
// "powerful is JavaScript"

console.log(reverseWords("I love React"));
// "React love I"

console.log(reverseWords("  hello   world  "));
// "world hello"

console.log(reverseWords("coding"));
// "coding"

console.log(reverseWords(""));
// ""