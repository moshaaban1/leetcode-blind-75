var groupAnagrams = function (strs) {
	const res = {};

	for (let str of strs) {
		const charsCount = [...Array(26)].map(() => 0);

		for (let char of str) charsCount[char.charCodeAt() - "a".charCodeAt()] += 1;
		res[charsCount] ? res[charsCount].push(str) : (res[charsCount] = [str]);
	}

	return Object.values(res);
};
