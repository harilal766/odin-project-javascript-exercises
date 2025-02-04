const leapYears = function(year) {
    // verify the argument is a number

    if (year % 4 === 0){
        return true;
    } 
};

// Do not edit below this line
module.exports = leapYears;

console.log(leapYears(2000)); // is a leap year: returns true
console.log(leapYears(1985)); // is not a leap year: returns false

/*
Leap years are years divisible by four (like 1984 and 2004). 
However, years divisible by 100 are not leap years (such as 1800 and 1900) 
unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). 
(Yes, it's all pretty confusing)
*/