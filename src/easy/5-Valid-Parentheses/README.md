# 메모 - [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

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

---
> [대상 소스 코드](./Valid-Parentheses.ts#L33)

`for...of` 명령문은 반복 가능한 객체 (Array, Map, Set, String, TypedArray, arguments 객체 등을 포함)에 대해서 반복하고 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성한다.

```javascript
for (variable of iterable) {
  statement;
}
```

> - variable: 각 반복에 서로 다른 속성값이 variable에 할당된다.
> - lociterable: 반복되는 열거가능(enumerable)한 속성이 있는 객체.

```javascript
let iterable = [10, 20, 30];
for (let value of iterable) {
  console.log(value);
}
// 10
// 20
// 30

// 블록 내부 변수를 수정하지 않는 경우.
let iterable = [10, 20, 30];
for (let value of iterable) {
  console.log(value);
}
// 10
// 20
// 30

```

---
> [대상 소스 코드](./Valid-Parentheses.ts#L36)

`continue` 문은 현재 또는 레이블이 지정된 루프의 현재 반복에서 명령문의 실행을 종료하고 반복문의 처음으로 돌아가여 루프문의 다음 코드를 실행한다.

```javascript
  continue [label];
```

> - label: 명령문의 레이블과 연관된 식별자.

```javascript
var i = 0;
var n = 0;

while (i < 5) {
  i++;

  if (i === 3) {
    continue;
  }

  n += i;
}

// label과 함께 continue 사용하기
var i = 0;
var j = 8;

checkiandj: while (i < 4) {
  console.log("i: " + i);
  i += 1;

  checkj: while (j > 4) {
    console.log("j: " + j);
    j -= 1;

    if (j % 2 == 0) continue checkj;
    console.log(j + " is odd.");
  }
  console.log("i = " + i);
  console.log("j = " + j);
}

/*
  i: 0

  j: 8
  7 is odd.
  j: 7
  j: 6
  5 is odd.
  j: 5

  i = 1
  j = 4

  i: 1
  i = 2
  j = 4

  i: 2
  i = 3
  j = 4

  i: 3
  i = 4
  j = 4
*/
```

---
> [대상 소스 코드](./Valid-Parentheses.ts#L38)

`pop()` 메서드는 Array 인스턴스의 메서드로, 배열에서 마지막 요소를 제거하고 그 요소를 반환한다. 이 메서드는 배열의 길이를 변경한다.

```javascript
  pop()
```

```javascript
  const myFish = ["angel", "clown", "mandarin", "sturgeon"];

  const popped = myFish.pop();

  console.log(myFish); // ['angel', 'clown', 'mandarin' ]

  console.log(popped); // 'sturgeon'
```

---

- reference: [Record<Keys, Type> - TypeScript](<https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type>)
- reference: [for...of - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of>)
- reference: [continue - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/continue>)
- reference: [Array.prototype.pop() - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/pop>)
