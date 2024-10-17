var isDate = function (input) {
  //   write your code here
	let ans=Date.parse(input);
	if(ans!==NaN){
		return true;
	}
	else {
		return false;
	}
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
