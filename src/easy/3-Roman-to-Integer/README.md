# 메모 - [Roman to Integer](https://leetcode.com/problems/roman-to-integer/)

> [대상 소스 코드](./Roman-to-Integer.ts#L48)

`keyof` 연산자는 객체 타입을 받아 객체의 key들로 구성된 문자열 또는 숫자 유니온 타입을 생성한다.

```typescript
type Type = {
  name: string;
  age: number;
  married: boolean;
}

type Union = keyof Type;
// type Union = name | age | married

const a:Union = 'name';
const b:Union = 'age';
const c:Union = 'married';
```

---
`JavaScript`에 이미 `Typeof` 연산자가 존재하는데, `TypeScript`는 타입 컨텍스트에서 변수나 프로퍼티의 타입을 나타내기 위해 타입 컨텍스트에서 사용할 수 있는 typeof 연산자를 추가한다.

```typescript
  const fruit = {
    red: 'apple',
    yellow: 'banana',
    purple: 'grape'
  }

  console.log(fruit); // { red: 'apple', yellow: 'banana', purple: 'grape' }
  
  // 객체인 fruit의 프로퍼티 전체를 타입으로 사용하겠다고 선언
  type Fruit = typeof fruit;

  // 즉, 다음과 같다.
  type Fruit = {
    red: string,
    yellow: string,
    purple: string
  }

  // fruit 객체와 똑같은 key명과 타입으로 프로퍼티를 생성해야만 한다.
  const fruit2: Fruit = {
    red: 'cherry',  
    yellow: 'lemon',
    purple: 'plum'
  }
  console.log(fruit2); // { red: 'cherry', yellow: 'lemon', purple: 'plum' }
```

---
`as keyof typeof`는 typeof로 먼저 값의 타입을 가져오고, keyof로 해당 타입의 키들을 유니온 타입으로 변환한 후, as를 사용해 타입을 명시적으로 변환하는 것이다.

> 유니온 타입: 하나 이상의 타입을 가질 수 있도록 허용하는 타입

```typescript
  function getValue<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  const person = { name: "Bob", age: 30 };
  const key = "name" as keyof typeof person; // key는 "name" | "age" 타입이 됨

  console.log(getValue(person, key)); // "Bob"
```

---

> [대상 소스 코드](./Roman-to-Integer.ts#L50)

`reduce()` 메서드는 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환한다.

```javascript
  arr.reduce(callback[, initialValue])
```

`reduce()`은 네 개의 인자를 가진다.

> - callback: 배열의 각 요소에 대해 실행할 함수. 다음 네 가지 인수를 받는다.
>   - accumulator(누산기): 누산기는 콜백의 반환값을 누적이다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 `initialValue`를 제공한 경우에는 `initialValue`의 값
>   - currentValue(현재 값): 처리할 현재 요소
>   - currentIndex(현재 인덱스): 처리할 현재 요소의 인덱스. `initialValue`를 제공한 경우 0, 아니면 1부터 시작. 옵션
>   - currentIndex(현재 인덱스): `reduce()`를 호출한 배열. 옵션
> - initialValue: `callback`의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용한다. 빈 배열에서 초기값 없이 `reduce()`를 호출하면 오류가 발생한다.

```javascript
[0, 1, 2, 3, 4].reduce(
  function (accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
  },
);
// 10

[0, 1, 2, 3, 4].reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  array,
) {
  return accumulator + currentValue;
}, 10);
// 20

var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 6
```

---

- reference: [keyof - TypeScript](<https://www.typescriptlang.org/docs/handbook/2/keyof-types.html>)
- reference: [Typeof - TypeScript](<https://www.typescriptlang.org/docs/handbook/2/typeof-types.html>)
- reference: [keyof & Typeof](<https://velog.io/@ddaisylee/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-keyof-typeof>)
- reference: [Array.prototype.reduce() - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce>)
