const repeatString = function(string, num) {
    let result = "";
    
    if (num < 0) {
        return "ERROR";
    }
    
    for (let i = 1; i <= num; i++) {
        result = result + string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;

// repeatString('hey', 3) // returns 'heyheyhey'
// ```

// This function will take two arguments, `string` and `num`.