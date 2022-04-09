function isPalindrome(str) {
    let reverseWord = word.split(" ").reverse().join("");
    return str === reverseWord;
}

let word = "racecar"