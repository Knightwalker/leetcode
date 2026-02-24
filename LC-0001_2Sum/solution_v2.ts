/**
 * Hash Map (One-Pass).
 *
 * Traverse array once while storing previously seen numbers
 * in a map (value -> index). For each number, check whether
 * its complement (target - number) has already been seen.
 *
 * Time: O(n)
 * Space: O(n)
 */
function twoSum(nums: number[], target: number): number[] {
    const seen: Record<string, number> = {};
    let res: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const complement = target - n;

        // If complement was seen before, we found the pair
        if (complement in seen) {
            res = [seen[complement], i];
            return res;
        }

        // Store current number and its index
        seen[n] = i;
    }

    return res;
}

console.log(twoSum([2, 7, 11, 15], 9));

export {};