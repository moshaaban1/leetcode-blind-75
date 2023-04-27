var search = function (nums, target) {
	var l = 0;
	var r = nums.length - 1;

	while (l <= r) {
		var middle = parseInt((l + r) / 2);

		if (nums[middle] === target) return middle;

		if (nums[middle] >= nums[l]) {
			if (target > nums[middle] || target < nums[l]) l = middle + 1;
			else r = middle - 1;
		} else {
			if (target < nums[middle] || target > nums[r]) r = middle - 1;
			else l = middle + 1;
		}
	}

	return -1;
};
