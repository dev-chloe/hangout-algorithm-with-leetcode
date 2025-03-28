# 메모 - [Plus One](https://leetcode.com/problems/plus-one/)

> [대상 소스 코드](./Plus-One.ts#L51)

`Array` 인스턴스의 `fill()` 메서드는 배열의 인덱스 범위 내에 있는 모든 요소를 정적 값으로 변경한다. 그리고 수정된 배열을 반환한다.

```javascript
fill(value)
fill(value, start)
fill(value, start, end)
```

> - value: 배열을 채울 값. 배열의 모든 요소는 정확히 이 값이 될 것이다. value가 객체인 경우, 배열의 각 슬롯은 해당 객체를 참조한다.
> - start: 채우기를 시작할 0 기반 인덱스로, 정수로 변환된다.
>   - 음수 인덱스는 배열의 끝부터 거꾸로 센다. `start < 0`인 경우, `start + array.length`가 사용된다.
>   - `start < -array.length` 또는 start가 생략된 경우, 0이 사용된다.
>   - `start >= array.length`이면, 아무 인덱스도 채워지지 않는다.
> - end: 채우기를 끝낼 0 기반 인덱스로, 정수로 변환된다. `fill()`은 end까지 채우며, end는 포함하지 않는다.
>   - 음수 인덱스는 배열의 끝부터 거꾸로 센다. `end < 0`인 경우, `end + array.length`가 사용된다.
>   - `end < -array.length` 이면, 0이 사용된다.
>   - end가 정수로 변환된 후, after보다 앞에 위치하면, 아무 인덱스도 채워지지 않는다.

```javascript
console.log([1, 2, 3].fill(4)); // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
console.log(Array(3).fill(4)); // [4, 4, 4]

// 배열의 각 슬롯이 참조하는 단일 객체
const arr = Array(3).fill({}); // [{}, {}, {}] <- 하나의 객체를 배열의 모든 요소에 동일하게 할당
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]

// fill()을 사용하여 전체 1 행렬로 만들기
const arr = new Array(3); // 독립적인 배열을 생성
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(4).fill(1); // 크기가 4이고, 1로 채워진 배열 생성
}
arr[0][0] = 10;
console.log(arr[0][0]); // 10
console.log(arr[1][0]); // 1
console.log(arr[2][0]); // 1

// 배열이 아닌 객체에서 fill() 호출하기
const arrayLike = { length: 2 };
console.log(Array.prototype.fill.call(arrayLike, 1));
// { '0': 1, '1': 1, length: 2 }
```

---

- reference: [Array.prototype.fill() - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill>)
