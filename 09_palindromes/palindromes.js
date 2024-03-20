const palindromes = function (string) {
    string = string.replace(/[^1-9a-zA-Z]/g, "").toLowerCase();
    reserveString = string.split("").reverse().join("");
    if (string === reserveString) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
