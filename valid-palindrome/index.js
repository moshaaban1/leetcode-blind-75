var isPalindrome = function (s) {
	s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

	var start = 0;
	var end = s.length - 1;

	while (start < end) {
		if (s[start] !== s[end]) return false;
		start++;
		end--;
	}

	return true;
};
