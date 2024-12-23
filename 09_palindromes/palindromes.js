const palindromes = function (word) {
    word = word.toLowerCase();
    rightIndex = word.at(-1);
    for (leftIndex = 0; i < word.length; i++) {
        if (word.at(leftIndex) != word.at(rightIndex)) {
            return false;
        }
        rightIndex--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
