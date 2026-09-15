// Title: Valid Palindrome
// Difficulty: Easy
// Tags: Two Pointers, String

function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "")

    let left = 0
    let right = cleaned.length - 1

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false
        }

        left++;
        right--;
    }

    return true
}

console.log(isPalindrome("racecar"));                        // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("Was it a car or a cat I saw?"));  // true
console.log(isPalindrome("hello"));                          // false
console.log(isPalindrome(""));                               // true