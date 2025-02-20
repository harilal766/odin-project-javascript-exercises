const fibonacci = function(num) {
    fib = "OOPS"; let fibArray = [0,1];
    // if input string is not a number convert it to integer
    if (typeof num !== "number"){
        num = parseInt(num);
    }

    // make sure negatives arent accepted
    if (num <0) return "OOPS";
    if (num === 0) return num;
    
    let firstPrev = 1;
    let secodPrev= 0;

    for (let i=2; i<= num; i++){
        let current =  firstPrev + secodPrev;
        secodPrev = firstPrev;
        firstPrev = current;
    }
    
    return firstPrev;
    // 0 => 0
};

// Do not edit below this line
module.exports = fibonacci;
