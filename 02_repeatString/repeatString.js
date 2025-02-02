const repeatString = function(string,limit) {
    resultString = "";

    if (limit < 0) {
        resultString = "ERROR";
    }
    else {
        for (let i=0; i<limit; i++) {
            resultString += string;
        }
    }
    return resultString;
    
};

// Do not edit below this line
module.exports = repeatString;
