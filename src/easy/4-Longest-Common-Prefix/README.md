# 메모 - [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)

> [대상 소스 코드](./Longest-Common-Prefix.ts#L18)

`sort()` 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환한다. 정렬은 `stable sort(안정 정렬)`가 아닐 수 있다. **기본 정렬 순서는 문자열의 유니코드 코드 포인트**를 따른다.

```javascript
arr.sort([compareFunction]);
```

`sort()`은 옵셔널로 매개 변수를 가진다.

> - comparefunction: 정렬 순서를 정의하는 함수. 생략하면 배열은 각 요소의 문자열 변환에 따라 각 문자의 유니 코드 코드 포인트 값에 따라 정렬된다.

```javascript
const numbers = [10, 2, 30, 4];
numbers.sort();
console.log(numbers); // ❌ ["10", "2", "30", "4"] → ["10", "2", "30", "4"] (문자열 정렬됨)

// 숫자 정렬 (올바르게 하려면 비교 함수 필요!)
// 오름차순
numbers.sort((a, b) => a - b);
console.log(numbers); // ✅ [2, 4, 10, 30]
// 내림차순
const numbers = [10, 2, 30, 4];
numbers.sort((a, b) => b - a);
console.log(numbers); // ✅ [30, 10, 4, 2]

// 기본적으로 "문자열 정렬"
const words = ["banana", "apple", "Cherry"];
words.sort();
console.log(words); // ✅ ["Cherry", "apple", "banana"] (유니코드 순서)

// 특정 속성을 기준으로 정렬
const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jack", age: 35 }
];

people.sort((a, b) => a.age - b.age);
console.log(people);
/*
출력:
[
  { name: "Jane", age: 25 },
  { name: "John", age: 30 },
  { name: "Jack", age: 35 }
]
*/
```

> `stable sort(안정 정렬)`: 같은 값(동일한 키)의 요소들이 원래의 상대적 순서를 유지하는 정렬 알고리즘이다. 즉, 정렬 전의 순서가 동일한 값들끼리는 정렬 후에도 그대로 유지되는 정렬 방식

```javascript
// stable sort 
const items = [
  { name: "apple", category: 2 },
  { name: "banana", category: 1 },
  { name: "cherry", category: 2 },
  { name: "date", category: 1 },
];

// ❌ 불안정한 정렬 알고리즘(예: 기본 JavaScript sort())
items.sort((a, b) => a.category - b.category); // (JS 엔진에 따라 불안정할 수 있음)

console.log(items);
/** 
출력:
[
  { "name": "date", "category": 1 },
  { "name": "banana", "category": 1 }, 
  { "name": "cherry", "category": 2 },
  { "name": "apple", "category": 2 }
]
*/
```

---
`localeCompare()` 메서드는 참조 문자열이 정렬 순으로 지정된 문자열 앞 혹은 뒤에 오는지 또는 동일한 문자열인지 나타내는 수치를 반환한다.

```javascript
localeCompare(compareString);
localeCompare(compareString, locales);
localeCompare(compareString, locales, options);
```

> - compareString: `referenceStr`가 비교되는 문자열.
> - locales & options: 이러한 인수는 함수의 동작을 사용자 정의하여 응용 프로그램에서 포맷 규칙을 사용할 언어를 지정한다. `locales`와 `options`의 인자를 무시하는 구현에서는 사용되는 로케일과 반환되는 문자열의 형식은 완전히 구현에 의존한다.

```javascript
const result = "apple".localeCompare("banana");
console.log(result); // -1

// 오름차순 정렬
const words = ["banana", "apple", "Cherry"];

words.sort((a, b) => a.localeCompare(b));
console.log(words);
// ✅ 출력: ["apple", "banana", "Cherry"]

// 대소문자 구별 없이 정렬
const words = ["banana", "apple", "Cherry"];

words.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
console.log(words);
// ✅ 출력: ["apple", "banana", "Cherry"]

// 지역별 정렬 (locale 설정)
const words = ["ä", "z", "a"];

words.sort((a, b) => a.localeCompare(b, "de"));
console.log(words);
// ✅ 출력 (독일어 기준): ["a", "ä", "z"] > 언어별 정렬 가능 또한 특수 문자처리도 가능
```

> sensitivity: "base" 옵션을 추가하면 대소문자를 무시하고 정렬할 수 있음.
---

- reference: [Array.prototype.sort() - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort>)
- reference: [String.prototype.localeCompare() - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort>)
