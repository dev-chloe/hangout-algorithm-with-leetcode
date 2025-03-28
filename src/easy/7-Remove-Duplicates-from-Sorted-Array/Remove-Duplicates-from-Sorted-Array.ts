/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
 *
 * Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
 * - Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
 *   The remaining elements of nums are not important as well as the size of nums.
 * - Return k.
 *
 * Custom Judge:
 * The judge will test your solution with the following code:
 *
 *  int[] nums = [...]; // Input array
 *  int[] expectedNums = [...]; // The expected answer with correct length
 *  int k = removeDuplicates(nums); // Calls your implementation
 *  assert k == expectedNums.length;
 *  for (int i = 0; i < k; i++) {
 *     assert nums[i] == expectedNums[i];
 *  }
 * If all assertions pass, then your solution will be accepted.
 *
 * Example 1:
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 *
 * Example 2:
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 * Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 */

function removeDuplicates(nums: number[]): number {
  let result = 1; // 고유한 값이 들어갈 위치(첫 번째 요소부터 시작)
  for (let i = 1; i < nums.length; i++) {
    // j = 1부터 시작하면 nums[j]와 nums[0]을 비교할 수 있음
    // j = 0부터 시작하면, 자기 자신과 비교하는 불필요한 연산이 생김
    if (nums[i] !== nums[i - 1]) {
      // i가 가리키는 값과 다르면 고유한 값
      nums[result] = nums[i];
      result++;
    }
  }
  return result;
}

function removeDuplicatesWithSet(nums: number[]): number {
  const uniqueNums = Array.from(new Set(nums)); // 중복 제거된 배열 생성

  for (let i = 0; i < uniqueNums.length; i++) {
    nums[i] = uniqueNums[i]; // 원래 배열을 덮어쓰기
  }

  return uniqueNums.length; // 고유 원소 개수 반환
}

console.log("---------------------");
console.log("1-1", removeDuplicates([1, 1, 2])); // 2
console.log("1-2", removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
console.log("---------------------");
console.log("1-1", removeDuplicatesWithSet([1, 1, 2])); // 2
console.log("1-2", removeDuplicatesWithSet([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
console.log("---------------------");

export { removeDuplicates, removeDuplicatesWithSet };
