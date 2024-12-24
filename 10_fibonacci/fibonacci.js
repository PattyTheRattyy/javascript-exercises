function fibonacciFunc(memberNum) {
    if (memberNum === 0){
        return [0];
    } else if (memberNum === 1){
        return [0,1];
    }
    return fibonacciFunc(memberNum-1) + fibonacciFunc(memberNum-2);
};
const fibonacci = function(memberNum) {
    fibArray = [];
    for (i = 2; i < memberNum; i++){
        fibArray.push(fibonacciFunc(i));
    }
    return fibArray[memberNum-1];
}


// Do not edit below this line
module.exports = fibonacci;
