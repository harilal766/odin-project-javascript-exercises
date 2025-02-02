const reverseString = function(inputString) {
    leng = inputString.length;
    let reverseString = "";

    for (let i=leng-1; i>=0; i--){
        reverseString += inputString[i];
    }

    return reverseString;


};

// Do not edit below this line
module.exports = reverseString;
