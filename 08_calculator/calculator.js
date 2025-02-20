const add = function(n1,n2) {
	return n1 + n2;
};

const subtract = function(n1,n2) {
	return n1-n2;
};

const sum = function(numbers = []) {
	return numbers.reduce((acc,num) => acc+num,0);
};

const multiply = function(numbers = []) {
  let mul = 1;
  numbers.forEach((number) => {
    mul *= number;
  });
  return mul;
};

const power = function(num,powerNum) {
	let pow = 1;
  for (let i=0; i<powerNum; i++){
    pow *= num;
  }
  return pow;

};

const factorial = function(num) {
	let fact = 1;
  // reduce n until it becomes zero
  // condition for 0 and 1
  if (num === 2){
   fact = 2;
  }
  else if (num > 2){
    fact = num;
    for (let i=1; i<num; i++){
      fact *= num-i;
    }
  }
  
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
