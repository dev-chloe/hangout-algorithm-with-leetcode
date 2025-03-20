# 메모 - [Length of Last Word](https://leetcode.com/problems/length-of-last-word/)

> [대상 소스 코드](./Length-of-Last-Word.ts#L22)

`널 병합 연산자 (??)` 는 왼쪽 피연산자가 `null` 또는 `undefined`일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자이다.

```javascript
leftExpr ?? rightExpr;
```

```javascript
const foo = null ?? "default string";
console.log(foo); // "default string"

const baz = 0 ?? 42;
console.log(baz); // 0

// AND (&&) 와 OR 연산자 (||)를 ??와 직접적으로 결합하여 사용하는 것은 불가능
// SyntaxError가 발생
null || undefined ?? "foo"; // raises a SyntaxError
true || undefined ?? "foo"; // raises a SyntaxError

// 우선 순위를 명시적으로 나타내기 위해 괄호를 사용하면 가능
(null || undefined) ?? "foo"; // returns "foo"

// 널 병합 연산자는 명확한 값으로 undefined과 null을 처리
// optional chaining 연산자 (?.)는 null or undefined일 수 있는 객체의 속성에 접근할 때 유용
let foo = { someFooProp: "hi" };

console.log(foo.someFooProp?.toUpperCase()); // "HI"
console.log(foo.someBarProp?.toUpperCase()); // undefined
```

## typescript에서의 오류 발생

```typescript
function lengthOfLastWord(s: string): number {
  s.trim().split(" ").pop().length // Object is possibly 'undefined'. 에러 발생
}
console.log(lengthOfLastWord("")) 
// 배열이 비어 있어 pop()이 undefined 반환
// undefined 의 length를 호출할 수 있어 런타임 오류 발생 가능
```

---
> [대상 소스 코드](./Length-of-Last-Word.ts#L26)

`Array` 인스턴스의 `at()` 메서드는 정숫값을 받아 해당 인덱스에 있는 항목을 반환하며, 양수와 음수를 사용할 수 있다. 음의 정수는 배열의 마지막 항목부터 거슬러 센다.

```javascript
at(index)
```

> - index: 반환할 배열 요소의 0부터 시작하는 인덱스로, 정수로 변환된다. 음수 인덱스는 배열 끝부터 거슬러 센다. index < 0인 경우, index + array.length로 접근한다.

```javascript
// 몇 가지 요소가 있는 배열
const cart = ["사과", "바나나", "배"];

// 주어진 배열의 마지막 요소를 반환하는 함수
function returnLast(arr) {
  return arr.at(-1);
}

// 'cart' 배열에서 마지막 요소를 가져옴
const item1 = returnLast(cart);
console.log(item1); // '배'

// 'cart'배열에 요소를 추가
cart.push("오렌지");
const item2 = returnLast(cart);
console.log(item2); // '오렌지'
```

---

- reference: [Array.prototype.pop() - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/pop>)
- reference: [Array.prototype.at() - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/at>)
