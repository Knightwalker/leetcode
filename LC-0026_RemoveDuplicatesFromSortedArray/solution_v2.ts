function removeDuplicates(nums: number[]): number {
    let left = 0;
    for (let right = 1; right < nums.length; right++) {
        if (nums[right] !== nums[left]) {
            left++;
            nums[left] = nums[right];
        }
    }
    return left + 1;
};

let nums = [1,1,2];
let expectedNums = [1,2]; // The expected answer with correct length
let k = removeDuplicates(nums); // Calls your implementation

console.log(k === expectedNums.length);
for (let i = 0; i < k; i++) {
  console.log(nums[i] === expectedNums[i]);
}

export {};