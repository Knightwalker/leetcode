function twoSum(nums: number[], target: number): number[] {
    let seen: Record<string, number> = {};
    let res: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        let complement = target - n;

        if (complement in seen) {
            res = [seen[complement], i];
            return res;
        }
        seen[n] = i;
    }
    
    return res;
};

console.log(twoSum([2,7,11,15], 9));

export {};