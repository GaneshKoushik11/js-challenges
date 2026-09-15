// Title: Longest Word in Sentence
// Difficulty: Easy
// Tags: String, Array

function longestWord(sentence) {
    if (sentence == "") {
        return null
    }
    const cleanedSentence = sentence.replace(/[^a-zA-Z0-9\s]/g, "");
    const words = cleanedSentence.trim().split(/\s+/);
    let longest = ""

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i]
        }
    }

    return longest
}

console.log(longestWord("JavaScript is very powerful"));
// "JavaScript"

console.log(longestWord("I love frontend development"));
// "development"

console.log(longestWord("Hello world"));
// "Hello"

console.log(longestWord("Coding, testing, and debugging!"));
// "debugging"

console.log(longestWord(""));
// null