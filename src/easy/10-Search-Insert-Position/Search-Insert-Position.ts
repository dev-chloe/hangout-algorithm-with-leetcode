/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 *
 * Example 2:
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 *
 * Example 3:
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 */

function searchInsert(nums: number[], target: number): number {
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left <= right) {
    // 중간 값 구하기
    const mid: number = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      // 타겟과 중간 값이 같을 때
      return mid;
    } else if (nums[mid] < target) {
      // 타겟이 중간 값보다 클 때,
      // 오른쪽 절반 탐색
      left = mid + 1;
    } else {
      // 타겟이 중간 값보다 작을 때,
      // 왼쪽 절반 탐색
      right = mid - 1;
    }
  }

  return left; // 삽입 위치 반환
}

// 단순 반복문을 사용하면 배열이 길 때 느려질 수 있음
function searchInsertWithFor(nums: number[], target: number): number {
  // 배열 순환
  for (let i = 0; i < nums.length; i++) {
    // target보다 크거나 같은 첫 번째 위치 찾기
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
}

console.log("---------------------");
console.log("1-1", searchInsert([1, 3, 5, 6], 5)); // 2
console.log("1-2", searchInsert([1, 3, 5, 6], 2)); // 1
console.log("1-2", searchInsert([1, 3, 5, 6], 7)); // 4
console.log("---------------------");
console.log("2-1", searchInsertWithFor([1, 3, 5, 6], 5)); // 2
console.log("2-2", searchInsertWithFor([1, 3, 5, 6], 2)); // 1
console.log("2-2", searchInsertWithFor([1, 3, 5, 6], 7)); // 4
console.log("---------------------");

export { searchInsert, searchInsertWithFor };
