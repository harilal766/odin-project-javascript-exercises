const palindromes = function (inputString) {
    // remove spaces and special characters
    inputString = inputString.replace(/[^a-zA-Z0-9]/g,"");
    // lower the text
    inputString = inputString.toLowerCase();
    
    return inputString === inputString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
