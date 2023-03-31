var containsDuplicate = function (nums) {
	var numsMap = new Map();

	for (var i = 0; i < nums.length; i++) {
		if (numsMap.get(nums[i])) {
			return true;
		} else {
			numsMap.set(nums[i], 1);
		}
	}

	return false;
};
