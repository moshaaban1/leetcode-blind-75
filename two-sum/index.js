var twoSum = function (nums, target) {
	const map = new Map();

	for (var i = 0; i < nums.length; i++) {
		const diff = target - nums[i];
		if (map.has(diff)) return [map.get(diff), i];
		else map.set(nums[i], i);
	}
};
