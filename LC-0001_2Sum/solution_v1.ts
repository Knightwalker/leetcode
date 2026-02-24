/**
 * Brute Force (Double Loop).
 *
 * Iterate over all unique index pairs (i < j)
 * and return the first pair whose sum equals target.
 *
 * Time: O(n^2)
 * Space: O(1) extra space
 */
function twoSum(nums: number[], target: number): number[] {
    let res: number[] = [];
    const len = nums.length;

    for (let i = 0; i < len - 1; i++) {
        const n1 = nums[i];

        for (let j = i + 1; j < len; j++) {
            const n2 = nums[j];

            if (n1 + n2 === target) {
                // Return indices immediately once found
                res = [i, j];
                return res;
            }
        }
    }

    return res;
}

console.log(twoSum([2, 7, 11, 15], 9));

export {};