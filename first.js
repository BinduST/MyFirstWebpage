var reverseANumber = function (num) {
	return num.toString().split("").reverse().join("");
};

var result = reverseANumber(12345);
console.log('The reversed no. is ',result);