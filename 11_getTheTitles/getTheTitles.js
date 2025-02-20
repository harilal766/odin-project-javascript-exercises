const getTheTitles = function(objectArray) {
    let titleArray = [];

    objectArray.forEach(element => {
        titleArray.push(element["title"]);
    });
    
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
