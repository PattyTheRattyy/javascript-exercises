const reverseString = function(stringToReverse) {
    reversedString = "";
    for (let i = stringToReverse.length-1; i > -1; i--) {
        reversedString += stringToReverse[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
