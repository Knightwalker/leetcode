/**
 * Brute Force (Combinatorics Enumeration).
 *
 * Iterate over all unique triples (i < j < k),
 * compute their sum, and greedily track the closest
 * sum to the target.
 *
 * Time: O(n^3)
 * Space: O(1) extra space
 */
function threeSumClosest(nums: number[], target: number): number {
    let bestSum = nums[0] + nums[1] + nums[2];

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