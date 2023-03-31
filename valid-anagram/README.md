# Solutions

## Hash Table

1. First, check if both strings's length is equal. If it doesn't return false.
2. Create hash table to store the frequency of each character in the first string.
3. Iterate over the another string and for each char check if it exists in the hash table and it's frequency is greater than 0.
4. If it does, decrease the frequency by 1.
5. If it doesn't, return false.

**Time Complexity:** O(n)

**Space Complexity:** O(n)
