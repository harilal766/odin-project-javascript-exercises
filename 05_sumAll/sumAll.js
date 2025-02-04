const sumAll = function(min,max) {
    if (!Number.isInteger(min) || !Number.isInteger(max) ||
        min <0 || max<0)
    {
        return "ERROR";
    }
    else {
        if (min > max){
            const TEMP = min;
            min = max;
            max = TEMP;
        }
        let sum = 0;
        for(let i=min; i<=max; i++){
            sum += i;
        }
        return sum;
    }
};


console.log(sumAll(1,4))
// Do not edit below this line
module.exports = sumAll;
