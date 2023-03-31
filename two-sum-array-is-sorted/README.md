# Solutions

## Two Pointer

1. Instantiate two pointers, one begins from the start and the other from the end.
2. Compute the sum of the values at the start and end pointers, and compare it to the target.
3. If the sum is equal to the target, return the indices of both pointers.
4. If the sum is less than the target, increment the start pointer by 1.
5. If the sum is greater than the target, decrement the end pointer by 1.

**Time Complexity:** O(n)

**Space Complexity:** O(1)
