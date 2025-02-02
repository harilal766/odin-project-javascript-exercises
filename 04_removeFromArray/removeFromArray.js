const removeFromArray = function(inputArray,...arg) {
    let newArray = [];
    inputArray.forEach(item => {
        if (! arg.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
