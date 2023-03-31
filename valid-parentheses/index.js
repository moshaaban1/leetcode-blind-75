var isValid = function (s) {
	var arr = s.split("");
	var stack = [];

	if (arr.length <= 1) return false;

	for (var i = 0; i < arr.length; i++) {
		if (["(", "[", "{"].includes(arr[i])) {
			stack.push(arr[i]);
		} else {
			if (
				(arr[i] === ")" && stack[stack.length - 1] === "(") ||
				(arr[i] === "]" && stack[stack.length - 1] === "[") ||
				(arr[i] === "}" && stack[stack.length - 1] === "{")
			) {
				stack.pop();
			} else {
				return false;
			}
		}
	}

	return stack.length ? false : true;
};
