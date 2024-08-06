const sumAll = function(num1, num2) {

    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num1) || typeof(num1) !== "number" || typeof(num2) !== "number") {
        return "ERROR";
    }

    let smaller = num1
    let bigger = num2;

    if (smaller > bigger) {
        bigger = num1;
        smaller = num2;
    }

    let sum = 0;

    for (let i = smaller; i < bigger+1; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
