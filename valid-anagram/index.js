var isAnagram = function (s, t) {
	if (s.length !== t.length) return false;
	const map = new Map();

	for (var i = 0; i < s.length; i++) {
		const value = map.get(s[i]) || 0;
		map.set(s[i], value + 1);
	}

	for (var i = 0; i < s.length; i++) {
		const value = map.get(t[i]);
		if (!value || value <= 0) return false;
		map.set(t[i], value - 1);
	}

	return true;
};
