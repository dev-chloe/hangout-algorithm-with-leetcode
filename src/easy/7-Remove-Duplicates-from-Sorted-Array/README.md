# 메모 - [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

> [대상 소스 코드](./Remove-Duplicates-from-Sorted-Array.ts#L50)

`Array.from()` 정적 메서드는 순회 가능 또는 유사 배열 객체에서 얕게 복사된 새로운 `Array` 인스턴스를 생성한다.

```javascript
Array.from(arrayLike)
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)
```

`Array.from()`은 매개 변수를 가진다.

> - arrayLike: 배열로 변환할 순회 가능 또는 유사 배열 객체
> - mapFn: 배열의 모든 요소에 대해 호출할 함수. 이 함수를 제공하면 배열에 추가할 모든 값이 이 함수를 통해 먼저 전달되고, mapFn의 반환 값이 대신 배열에 추가된다. 이 함수는 다음 인수를 사용하여 호출한다.
>   - element: 배열에서 처리 중인 현재 요소
>   - index: 배열에서 처리 중인 현재 요소의 인덱스
> - thisArg: mapFn 실행 시에 this로 사용할 값

```javascript
// String으로 배열 만들기
Array.from("foo");
// [ "f", "o", "o" ]

// Set으로 배열 만들기
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ] > Set은 중복을 허용하지 않음

// Map으로 배열 만들기
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];

```

---
`Set()` 생성자는 `Set` 객체를 생성한다.
> Set()은 오직 new와 함께 생성할 수 있다. new 없이 생성을 시도하면 TypeError가 발생한다.

```javascript
new Set()
new Set(iterable)
```

`Array.from()`은 옵셔널로 매개 변수를 가진다.

> - iterable: 순회 가능한 객체가 전달되면 모든 요소가 새로운 Set에 추가되며, 이 매개변수를 지정하지 않거나 값이 null일 경우 새로운 Set은 비어있게 된다.

```javascript
const mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("some text"); // Set [ 1, 5, 'some text' ]

const o = { a: 1, b: 2 };

mySet.add(o); // Set [ 1, 5, 'some text', { a: 1, b: 2 } ]
```

---

- reference: [Array.from() - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from>)
