/**
 * Brute Force (All Pair Evaluation).
 *
 * Check every pair of lines (i < j), compute the area formed,
 * and track the maximum area found.
 *
 * Time: O(n^2)
 * Space: O(1) extra space
 */
function maxArea(height: number[]): number {
    let maxArea = 0;
    const n = height.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            const width = j - i;
            const area = Math.min(height[i], height[j]) * width;

            if (area > maxArea) {
                maxArea = area;
            }
        }
    }

    return maxArea;
}

export {};