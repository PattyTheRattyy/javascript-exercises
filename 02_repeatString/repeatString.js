const repeatString = function(inputString, num) {
    if (num < 0) {
        return "ERROR";
    }
    stringToReturn = ""
    for(let i = 0; i < num; i++) {
        stringToReturn += inputString;
    }
    return stringToReturn;
};

// Do not edit below this line
module.exports = repeatString;
