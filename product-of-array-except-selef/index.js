// Using prefix, postfix sum
var productExceptSelf = function (nums) {
	var prefix = 1;
	var postfix = 1;
	const res = [];

	for (var i = 0; i < nums.length; i++) {
		res[i] = prefix;
		prefix *= nums[i];
	}

	for (var i = nums.length - 1; i >= 0; i--) {
		res[i] = res[i] * postfix;
		postfix *= nums[i];
	}

	return res;
};
