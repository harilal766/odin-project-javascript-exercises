const add = function(n1,n2) {
	return n1 + n2;
};

const subtract = function(n1,n2) {
	return n1-n2;
};

const sum = function(numbers = []) {
	return numbers.reduce((acc,num) => acc+num,0);
};

const multiply = function(n1,n2) {
  return n1*n2;
};

const power = function(num,powerNum) {
	let pow = 1;
  for (let i=0; i<powerNum; i++){
    pow *= num;
  }
  return pow;

};

const factorial = function() {
	
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
