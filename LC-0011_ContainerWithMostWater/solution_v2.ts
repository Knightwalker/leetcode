/**
 * Two Pointers (Greedy Optimization).
 *
 * Start with two pointers at both ends of the array.
 * At each step, compute the area formed by the lines,
 * update the maximum area, and move the pointer pointing
 * to the shorter line inward (since width decreases,
 * we must try increasing height).
 *
 * Time: O(n)
 * Space: O(1) extra space
 */
function maxArea(height: number[]): number {
   let l = 0;
   let r = height.length - 1;
   let maxArea = 0;

   while (l < r) {
       const width = r - l;
       const area = Math.min(height[l], height[r]) * width;

       // Greedy update of best area found so far
       maxArea = Math.max(maxArea, area);

       // Move the pointer with the smaller height
       // (only way to potentially increase area)
       if (height[l] < height[r]) {
           l++;
       } else {
           r--;
       }
   }
   
   return maxArea;
}

export {};