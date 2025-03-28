/**
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
 * You must not use any built-in exponent function or operator.
 * For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 *
 * Example 1:
 * Input: x = 4
 * Output: 2
 * Explanation: The square root of 4 is 2, so we return 2.
 *
 * Example 2:
 * Input: x = 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 */

function mySqrt(x: number): number {
  if (x === 0 || x === 1) return x;

  // 이진 탐색을 위한 변수 초기화
  let left = 1; // 제곱근의 최솟값 (0은 예외 처리로 이미 반환했음)
  let right = x; // 제곱근의 최댓값 (√x는 항상 x 이하)
  let result = 0; // 최종 결과를 저장할 변수

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // left와 right의 정수로 변환한 중간값으로 설정

    if (mid * mid === x) {
      // x가 완전한 제곱수인 경우
      // mid의 제곱(mid * mid)이 x와 같다면 mid를 반환
      return mid;
    } else if (mid * mid < x) {
      // mid^2 < x이면 mid가 너무 작다는 뜻 → 더 큰 숫자 탐색
      result = mid; // result를 mid로 업데이트 (최댓값 유지)
      left = mid + 1; // 탐색 범위를 오른쪽으로 이동
    } else {
      // mid^2 > x이면 mid가 너무 크다는 뜻 → 더 작은 숫자 탐색
      right = mid - 1; // result에는 √x를 내림한 값이 저장됨
    }
  }

  return result;
}

function mySqrtWithSqrt(x: number): number {
  return Math.floor(Math.sqrt(x));
}
console.log("---------------------");
console.log("1-1", mySqrt(4)); // 2
console.log("1-2", mySqrt(8)); // 2
console.log("---------------------");
console.log("2-1", mySqrtWithSqrt(4)); // 2
console.log("2-2", mySqrtWithSqrt(8)); // 2
console.log("---------------------");

export { mySqrt, mySqrtWithSqrt };
