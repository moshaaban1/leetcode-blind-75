# Solutions

## Hash Table

1. Iterate through each string in the input array and count the frequency of each character.
2. Sort the characters in the string. Example: "abca" => [2, 1, 1], "baac" => [2, 1, 1].
3. Use the sorted string as the key in the hash table. The corresponding value for each key will be an array of strings that are anagrams of the key.

**Time Complexity:** O(n)

**Space Complexity:** O(n)
