/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * Example 1:
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 * Example 2:
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 * 피보나치 수열과 동일한 패턴을 따름
 * 한 번에 1계단 또는 2계단씩 오를 수 있기 때문에,
 * n번째 계단에 도달하는 방법의 수는 (n-1)번째 계단까지 도달하는 방법의 수와 (n-2)번째 계단까지 도달하는 방법의 수를 합친 값과 같다.
 *
 * f(n)=f(n−1)+f(n−2)
 */

// for
function climbStairs(n: number): number {
  // n이 1 또는 2이면, 정답은 n입니다.
  // n=1 > 1가지 방법 (1)
  // n=2 > 2가지 방법 (1+1, 2)
  if (n <= 2) return n;

  // first는 f(1) = 1, second는 f(2) = 2 를 의미
  let first = 1;
  let second = 2;

  // i = 3부터 n까지 반복하면서, f(n) = f(n-1) + f(n-2) 를 계산
  for (let i = 3; i <= n; i++) {
    // 현재 단계에서의 총 방법 수를 구함
    const temp = first + second;
    // 이전 값을 업데이트 (f(n-2) → f(n-1))
    first = second;
    // 현재 값을 업데이트 (f(n-1) → f(n))
    second = temp;
  }

  return second;
}

// recursive
function climbStairsRecursive(n: number): number {
  if (n <= 2) return n;
  // n > 2인 경우, climbStairsRecursive(n-1) + climbStairsRecursive(n-2)를 호출.
  return climbStairsRecursive(n - 1) + climbStairsRecursive(n - 2);
}

// recursive + memoization
// 중복 계산이 많아서 비효율적
function climbStairsWithReqursive(n: number): number {
  // 기본 케이스: n=0 또는 n=1이면 방법이 1가지이므로 1을 반환
  // n = 0 > 방법 1개(아무것도 안 함)
  // n = 1 > 방법 1개(1칸 오르기)
  if (n <= 1) return 1;

  // memo 배열을 크기 n+1로 생성하고,모든 값을 -1로 초기화하여 "아직 계산되지 않은 값"을 나타냄.
  const memo: number[] = new Array(n + 1).fill(-1);
  return climbStairsHelper(n, memo);
}

function climbStairsHelper(n: number, memo: number[]): number {
  if (n <= 1) return 1;

  // 이미 계산된 값이 memo[n]에 저장되어 있다면, 중복 계산 없이 즉시 반환.
  if (memo[n] !== -1) {
    return memo[n];
  }

  // memo[n]에 저장하여 동일한 n에 대한 중복 연산을 방지.
  memo[n] = climbStairsHelper(n - 1, memo) + climbStairsHelper(n - 2, memo);
  // memo[n] 값을 반환하여, 계산된 결과를 재사용 가능하게 함.
  return memo[n];
}

console.log("---------------------");
console.log("1-1", climbStairs(2)); // 2
console.log("1-2", climbStairs(3)); // 3
console.log("1-3", climbStairs(4)); // 5
console.log("1-4", climbStairs(5)); // 8
console.log("---------------------");
console.log("2-1", climbStairsRecursive(2)); // 2
console.log("2-2", climbStairsRecursive(3)); // 3
console.log("2-3", climbStairsRecursive(4)); // 5
console.log("2-4", climbStairsRecursive(5)); // 8
console.log("---------------------");
console.log("3-1", climbStairsWithReqursive(2)); // 2
console.log("3-2", climbStairsWithReqursive(3)); // 3
console.log("3-3", climbStairsWithReqursive(4)); // 5
console.log("3-4", climbStairsWithReqursive(5)); // 8
console.log("---------------------");

export { climbStairs, climbStairsRecursive, climbStairsWithReqursive };
