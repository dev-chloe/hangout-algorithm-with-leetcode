# 메모 - [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

## Linked List(연결 리스트)

데이터를 지정하는 `node`들이 서로 연결된 자료 구조.  
연결 리스트는 선형적인 데이터 구조라는 점에서 배열과 유사하다. 하지만 연결 리스트의 요소(elements)들은 특정 메모리 주소나 인덱스에 저장되지 않으며, 각 노드는 데이터와 다음 노드의 참조를 포함한다.

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // 다음 노드를 가리키는 포인터
  }
}
```

```javascript
const list = {
  head: {
    value: 6
    next: {
      value: 10                                             
      next: {
        value: 12
        next: {
          value: 3
          next: null    
        }
      }
    }
  }
};
```

### 배열과의 차이

> - 배열은 인덱스로 접근할 수 있지만, Linked List는 순차적으로 탐색해야 함.
> - 배열은 크기가 고정되거나 미리 할당되지만, Linked List는 동적으로 크기 조절 가능.
> - 배열은 중간 삽입/삭제 시 요소들을 이동해야 하지만, Linked List는 참조만 변경하면 됨.

- `단일 연결 리스트 (Singly Linked List)`: 각 노드는 다음 노드(next)만을 참조하는 형태, head부터 next를 따라가면서 한 방향으로 탐색
- `이중 연결 리스트 (Doubly Linked List)`: 각 노드가 이전(previous)과 다음(next) 포인터를 가짐. 탐색이 양방향으로 가능하여 삭제와 삽입이 더 효율적.

### 배열 vs 연결 리스트를 사용

- 배열: 빠른 인덱스 접근이 필요할 때 (arr[3]처럼 바로 접근 가능)
- 연결 리스트: 삽입/삭제가 빈번할 때 (특히 중간 삽입/삭제), 배열보다 동적 크기 조절이 쉽고, 중간 삽입/삭제가 빠름.

> [대상 소스 코드](./Valid-Parentheses.ts#L25)

`Record<Keys, Type>`는 **객체 타입을 정의하는 유틸리티 타입**. 속성 키가 Keys이고 속성 값이 Type인 객체 유형을 생성한다. 이 유틸리티는 한 타입의 프로퍼티를 다른 타입에 매핑하는 데 사용할 수 있다.

```javascript
// Record<string, string>은 키가 string이고, 값도 string인 객체를 의미
const example: Record<string, string> = {
  name: "Alice",
  age: "25", // 숫자가 아니라 문자열이어야 함
  country: "Korea",
};

const obj: Record<string, string> = {
  key1: "value1",
  key2: 123, // ❌ 오류! 숫자는 안 됨
};
```

## 재귀

자신을 참조하고 호출하는 함수  
일반적으로 크고 복잡한 문제를 작은 부분 문제로 나눠서 해결하는 데 유용함

### 재귀 함수의 기본 구조

> 기본 조건(Base Case): 재귀 호출을 멈추는 조건 (종료 조건)  
> 재귀 단계(Recursive Case): 함수가 자기 자신을 호출하는 부분

```javascript
function recursiveFunction(param) {
  if (/* Base Case: 종료 조건 */) {
    return;
  }
  // Recursive Case: 자기 자신을 호출
  recursiveFunction(smallerParam);
}
```

### 예제: 1부터 N까지의 합 구하기

1. 반복문 (Loop) 사용

```javascript
function sumLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumLoop(5)); // 15
```

2. 재귀 함수 (Recursion) 사용

```javascript
function sumRecursive(n) {
  if (n === 1) return 1; // Base Case (종료 조건)
  return n + sumRecursive(n - 1); // Recursive Case
}

console.log(sumRecursive(5)); // 15
```

|   비교 항목  |        재귀(Recursion)         |     반복문(Loop)    |
|:----------:|:-----------------------------:|:-----------------:|
| 메모리 사용량 | 스택 메모리를 더 많이 사용 (호출 스택) |    스택 부담 없음    |
|     속도    |  보통 느림 (특히 중복 호출 많을 때)   |      보통 빠름      |
|    가독성    |          코드가 간결해짐          | 코드가 길어질 수 있음 |
|  언제 사용?  |      문제를 작은 단위로 나눌 때      |   단순한 반복 구조   |

> 재귀는 트리(Tree) 탐색, 분할 정복(Divide & Conquer) 문제에 적합  
> 반복문이 더 효율적인 경우가 많지만, 가독성 면에서는 재귀가 더 좋을 때도 있음 (스택 오버플로우 주의)

---

- reference: [recursion - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions#recursion>)
