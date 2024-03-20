const fibonacci = function(num) {
    let a = 1;
    let b = 1;
    let c;
    
    if (num < 0) { 
        return "OOPS";
    } else if (num == 0) {
        return 0;
    } else if (num < 3) {
        return 1;
    }

    for(let i = 2; i < num; i++) {
        c = a + b;
        b = a
        a = c
    }

    return a
};

// Do not edit below this line
module.exports = fibonacci;
