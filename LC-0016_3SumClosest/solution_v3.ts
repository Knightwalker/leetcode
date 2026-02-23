/**
 * Sort + Two Pointers with duplicate skipping and early exit.
 *
 * Sort the array, fix one index (i), then use two pointers
 * to move toward the target. Skip duplicate anchors to reduce
 * redundant work. Exit early if exact match is found.
 *
 * Time: O(n^2)
 * Space: O(1) extra space
 */
function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);

    let bestSum = nums[0] + nums[1] + nums[2];
    let bestDiff = Math.abs(target - bestSum);

    for (let i = 0; i < nums.length - 2; i++) {

        // Skip duplicate anchors to avoid redundant scans
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

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
            } else if (sum > target) {
                right--;
            } else {
                // Exact match — cannot get closer than this
                return bestSum;
            }
        }
    }

    return bestSum;
}

export {};