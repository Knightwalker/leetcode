function removeDuplicates(nums: number[]): number {
    let k = 1;
    let maxN = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[i] && nums[j] > maxN) {
                nums[i + 1] = nums[j];
                maxN = nums[j];
                k++;
                break;
            }
        }
    }
    return k;
};

let nums = [1,1,2];
let expectedNums = [1,2]; // The expected answer with correct length
let k = removeDuplicates(nums); // Calls your implementation

console.log(k === expectedNums.length);
for (let i = 0; i < k; i++) {
  console.log(nums[i] === expectedNums[i]);
}

export {};