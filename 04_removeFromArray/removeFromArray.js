

const removeFromArray = function(array, ...nums) {

    let arrayToReturn = [];

    array.forEach((num) => {
        if (!nums.includes(num)){
            arrayToReturn.push(num)
        }
    });
    return arrayToReturn;
};

  
// Do not edit below this line
module.exports = removeFromArray;
