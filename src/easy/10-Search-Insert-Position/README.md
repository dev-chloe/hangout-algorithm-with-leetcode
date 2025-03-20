# 메모 - [Search Insert Position](https://leetcode.com/problems/search-insert-position/)

## 이진 검색(binary search)

> [대상 소스 코드](./Search-Insert-Position.ts#L18-L38)

`이진 검색(binary search)` 정렬된 배열 내에서 목표 값의 위치를 찾는 검색 알고리즘이다.  

> `이진 검색`은 목표 값을 배열의 중간 요소와 비교한다.  
> 목표 값과 중간 요소가 같지 않으면 대상이 놓일 수 없는 절반은 제거하고 나머지 절반에서 검색된다.  
> 다시 중간 요소를 가져와 목표 값과 비교해 값을 찾을 때까지 반복한다.  
> 나머지 절반에서도 발견하지 못하면 목표 값은 배열에 없는 것이다.

```javascript
function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // JS는 정수 나눗셈이 없어서 Math.floor() 사용

        if (nums[mid] === target) {
            return mid; // 찾았다!
        } else if (nums[mid] < target) {
            left = mid + 1; // 오른쪽 절반 탐색
        } else {
            right = mid - 1; // 왼쪽 절반 탐색
        }
    }

    return -1; // 못 찾으면 -1 반환
}

// 예제 실행
const nums = [1, 3, 5, 6, 8, 10, 12];
console.log(binarySearch(nums, 6)); // 출력: 3
console.log(binarySearch(nums, 7)); // 출력: -1
```

### 순차 검색 vs 이진 검색

|      비교 항목    |        순차 검색       |       이진 검색       |
|:---------------:|:-------------------:|:-------------------:|
|     시간 복잡도    |         O(n)        |       O(log n)      |
|        원리      |   하나씩 확인하면서 찾음  | 절반씩 범위를 줄여서 탐색 |
| 100만 데이터(예시) | 최악의 경우 100만 번 확인 | 최악의 경우 약 20번 확인 |

### 이진 검색을 써야 할 때

> - 정렬된 배열에서 데이터를 빠르게 찾을 때
> - 삽입 위치를 찾거나 범위를 검색할 때
> - 탐색 시간이 중요한 경우 (ex. 검색 엔진, 데이터베이스 등)

---

- reference: [Binary search - Wikipedia](<https://en.wikipedia.org/wiki/Binary_search>)
