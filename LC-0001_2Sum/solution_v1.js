function twoSum_v1(nums, target) {
    let res = [];
    let len = nums.length;
    for (let i = 0; i < len - 1; i++) {
        let n1 = nums[i]
        for (let j = i + 1; j < len; j++) {
            let n2 = nums[j]
            if (n1 + n2 === target) {
                res = [i, j]
                return res;
            }
        }
    }
    
    return res;
};

console.log(twoSum_v1([2,7,11,15], 9));