# 메모 - [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

> [대상 소스 코드](./Find-the-Index-of-the-First-Occurrence-in-a-String.ts#L17)

`indexOf()` 메서드는 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환한다. 일치하는 값이 없으면 -1을 반환한다.

```javascript
str.indexOf(searchValue[, fromIndex])
```

`Array.from()`은 매개 변수를 가진다.

> - searchValue: 찾으려는 문자열. 아무 값도 주어지지 않으면 문자열 "undefined"를 찾으려는 문자열로 사용한다.
> - fromIndex: 문자열에서 찾기 시작하는 위치를 나타내는 인덱스 값(옵션).
>   - 어떤 정수값이라도 가능하다.
>   - 기본값은 0이며, 문자열 전체를 대상으로 찾게 된다.
>   - 만약 fromIndex 값이 음의 정수이면 전체 문자열을 찾게 된다.
>   - 만약 fromIndex >= str.length 이면, 검색하지 않고 바로 -1을 반환한다.
>   - searchValue가 공백 문자열이 아니라면, str.length를 반환한다.

```javascript
// 문자열 내에 있는 문자들은 왼쪽에서 오른쪽 방향으로 순번이 매겨진다. 
// 제일 처음 문자는 0번째 순번(index)이며, stringName 문자열의 마지막 문자의 순번 stringName.length -1 다.
"Blue Whale".indexOf("Blue"); // returns  0
"Blue Whale".indexOf("Blute"); // returns -1
"Blue Whale".indexOf("Whale", 0); // returns  5
"Blue Whale".indexOf("Whale", 5); // returns  5
"Blue Whale".indexOf("Whale", 7); // returns -1
"Blue Whale".indexOf(""); // returns  0
"Blue Whale".indexOf("", 9); // returns  9
"Blue Whale".indexOf("", 10); // returns 10
"Blue Whale".indexOf("", 11); // returns 10

// indexOf() 메서드는 대소문자를 구분함
"Blue Whale".indexOf("blue"); // returns -1

// '0'을 평가했을 때 true가 아니고, -1을 평가했을 때 false가 아닌 것에 주의
"Blue Whale".indexOf("Blue") !== -1; // true
"Blue Whale".indexOf("Bloe") !== -1; // false
```

---

- reference: [String.prototype.indexOf() - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from>)
