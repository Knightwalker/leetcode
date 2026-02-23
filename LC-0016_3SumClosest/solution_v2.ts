/**
 * Sort + Two Pointers.
 * 
 * Fix one index (i), then use two pointers (left, right)
 * to move toward the target based on whether the current sum
 * is too small or too large. Track the closest sum greedily.
 *
 * Time: O(n^2)
 * Space: O(1) extra space
 */
function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);

    let bestSum = nums[0] + nums[1] + nums[2];
    let bestDiff = Math.abs(target - bestSum);

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            const diff = Math.abs(target - sum);

            if (diff < bestDiff) {
                bestDiff = diff;
                bestSum = sum;
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return bestSum;
}

export {};