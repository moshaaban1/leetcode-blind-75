var twoSum = function (numbers, target) {
	var start = 0;
	var end = number.length - 1;

	while (start < end) {
		var sum = numbers[start] + numbers[end];

		if (sum === target) return [start + 1, end + 1];

		sum > target ? end-- : start++;
	}
};
