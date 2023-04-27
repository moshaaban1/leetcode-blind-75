// Using two pointer
var maxArea = function (height) {
	var left = 0;
	var right = height.length - 1;
	var max = 0;

	while (right !== left) {
		var area = Math.min(height[left], height[right]) * (right - left);

		max = area > max ? area : max;

		height[left] >= height[right] ? right-- : left++;
	}

	return max;
};
