/**
 * Time: O(n^3) (all triples)
 * Space: O(1) extra space.
 */
function threeSumClosest(nums: number[], target: number): number {
    // Track the best (closest) sum seen so far.
    // Initialize with the first valid triple (assumes nums.length >= 3 per problem constraints)
    let bestSum = nums[0] + nums[1] + nums[2];

    // Brute force: enumerate all unique index triples (i < j < k).
    // This guarantees distinct indices and avoids permutations.
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                let diff = Math.abs(target - sum);
                let bestDiff = Math.abs(target - bestSum);

                if (diff < bestDiff) {
                    bestSum = sum;
                }
            }
        }
  }

  return bestSum;  
};

export {};