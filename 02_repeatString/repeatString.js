const repeatString = function(inputString, num) {
    stringToReturn = ""
    for(let i = 0; i < num; i++) {
        stringToReturn += inputString;
    }
    return stringToReturn;
};

// Do not edit below this line
module.exports = repeatString;
