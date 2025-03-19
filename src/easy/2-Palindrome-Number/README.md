# 메모 - [Palindrome Number](https://leetcode.com/problems/palindrome-number/description/)

`Number` 는 37이나 -9.25와 같은 숫자를 표현하고 다룰 때 사용하는 **원시 래퍼 객체**다.

`Number(value)`처럼 함수로 사용하면 문자열이나 다른 값을 Number 타입으로 변환합니다. 만약 만약 인수를 숫자로 변환할 수 없으면 `NaN`을 리턴합니다.

> [대상 소스 코드](./Palindrome-Number.ts#L29)

`toString()` 메서드는 특정한 `Number` 객체를 나타내는 문자열을 반환한다.

```javascript
numObj.toString([radix]);
```

`toString()`은 옵셔널로 매개 변수를 가진다.

> - 수의 값을 나타내기 위해 사용되기 위한 기준을 정하는 2와 36사이의 정수. (진수를 나타내는 기수의 값.)

```javascript
function hexColour(c) {
  if (c < 256) {
    return Math.abs(c).toString(16);
  }
  return 0;
}

console.log(hexColour(233));
// Expected output: "e9"

console.log(hexColour("11"));
// Expected output: "b"
```

---
`split()` 메서드는 `String` 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눈다.

```javascript
split();
split(separator);
split(separator, limit);
```

`split()`은 옵셔널로 매개 변수를 가진다.

> - separator: 원본 문자열을 끊어야 할 부분을 나타내는 문자열을 나타낸다. 실제 문자열이나 정규표현식을 받을 수 있다.  
> - limit: 끊어진 문자열의 최대 개수를 나타내는 정수. 이 매개변수를 전달하면 split() 메서드는 주어진 separator가 등장할 때마다 문자열을 끊지만 배열의 원소가 limit개가 되면 멈춘다.

```javascript
const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words);
// Array ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]

const wordsWithLimit = str.split(" ", 3);
console.log(wordsWithLimit);
// Array ["The", "quick", "brown"]

const strCopy = str.split();
console.log(strCopy);
// Array ["The quick brown fox jumps over the lazy dog."]
```

---
`reverse()` 메서드는 배열의 순서를 반전한다.

```javascript
a.reverse();
```

```javascript
const a = [1, 2, 3];
console.log(a); // [1, 2, 3]

a.reverse();
console.log(a); // [3, 2, 1]
```

---
`Array` 인스턴스의 `join()` 메서드는 배열의 모든 요소를 쉼표나 지정된 구분 문자열로 구분하여 연결한 새 문자열을 만들어 반환한다.

```javascript
join()
join(separator)
```

`join()`은 옵셔널로 매개 변수를 가진다.

> - separator: 배열의 인접한 요소의 각 쌍을 구분하는 문자열이며, 생략되면 배열 요소는 쉼표(",")로 구분된다.

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9
```

---
> [대상 소스 코드](./Palindrome-Number.ts#L31)

`parseInt()` 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환한다.

```javascript
parseInt(string);
parseInt(string, radix);
```

`parseInt()`은 매개 변수를 가진다.

> - string: **파싱할 값**. 문자열이 아닐 경우 ToString 추상 연산을 사용해 문자열로 변환한다. 문자열의 선행 공백은 무시한다.
> - radix: 옵셔널하게 가지는 매개 변수로, string의 진수를 나타내는 2부터 36까지의 정수이다. 기본 값이 10이 아니며, `Number` 자료형이 아닌 경우 `Number`로 변환한다.

```javascript
console.log(parseInt("123")); // 123
console.log(parseInt("123", 10)); // 123
console.log(parseInt("   123 ")); // 123 (공백 무시)
console.log(parseInt("077")); // 77 (선행 0은 무시)
console.log(parseInt("1.9")); // 1 (소수점 부분이 잘림)
console.log(parseInt("ff", 16)); // 255 (소문자 16진수)
console.log(parseInt("xyz")); // NaN (입력을 정수로 변환할 수 없음)
```

> `parseInt`는 `BigInt` 구문을 `Number`로 반환하므로 정확도를 잃는다. 마지막 n 문자를 무시하기 때문

```javascript
parseInt("900719925474099267n");
// 900719925474099300
```

---

> [대상 소스 코드](./Palindrome-Number.ts#L43)

`Math.floor()` 정적 메서드는 언제나 버림 처리하고 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환한다.

```javascript
Math.floor(x)
```

`Math.floor()`의 매개 변수는 숫자.

```javascript
Math.floor(-Infinity); // -Infinity
Math.floor(-45.95); // -46
Math.floor(-45.05); // -46
Math.floor(-0); // -0
Math.floor(0); // 0
Math.floor(4); // 4
Math.floor(45.05); // 45
Math.floor(45.95); // 45
Math.floor(Infinity); // Infinity
```

---

- reference: [Number - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number>)
- reference: [Number.prototype.toString() - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString>)
- reference: [String.prototype.split() - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split>)
- reference: [Array.prototype.reverse() - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse>)
- reference: [Array.prototype.join() - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join>)
- reference: [parseInt() - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt>)
- reference: [Math.floor() - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor>)
