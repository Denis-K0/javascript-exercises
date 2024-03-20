const sumAll = function(num1, num2) {
    let result = 0;

    if (0 > num1 || 0 > num2 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }
    
    if (num1 < num2) {
        for(;num1 <= num2; num1++) {
            result += num1;
        }    
    } else if (num1 > num2) {
        for(;num1 >= num2; num2++) {
            result += num2;
        } 
    } else if (num1 == num2) {
        result = num1;
    }
    
    return result;
    
};

// Do not edit below this line
module.exports = sumAll;
