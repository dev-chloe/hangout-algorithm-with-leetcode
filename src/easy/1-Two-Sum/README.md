# 메모 - [Two Sum](https://leetcode.com/problems/two-sum/description/)

> [대상 소스 코드](./Two-Sum.ts#L25)

`Map` 객체는 키-값 쌍과 키의 원래 삽입 순서를 기억한다. 모든 값(객체 및 원시값 모두)은 키 또는 값으로 사용될 수 있다.

`Map()` 생성자는 `Map` 객체를 생성한다.

```javascript
new Map()
new Map(iterable)
```

> 참고: `Map()`은 오직 `new`로만 생성할 수 있다. `new` 없이 호출하면 `TypeError`가 발생한다.

`Map()`은 옵셔널로 매개 변수를 가진다.

> - 하나의 Array 혹은 키-값 쌍인 요소를 가진 반복 가능 객체  
>   - ex) [[ 1, 'one' ],[ 2, 'two' ]]과 같이 2개의 요소를 가진 배열
> - 각각의 키-값 쌍은 새로운 Map에 추가된다.

```javascript
const myMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);
```

> [대상 소스 코드](./Two-Sum.ts#L31)

`Map` 인스턴스의 `has()` 메서드는 주어진 키에 해당하는 요소의 존재 여부를 가리키는 불리언 값을 반환한다.

```javascript
const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.has("bar"));
// Expected output: true

console.log(map1.has("baz"));
// Expected output: false
```

> [대상 소스 코드](./Two-Sum.ts#L32)

`Map` 인스턴스의 `get()` 메서드는 `Map` 객체에서 특정 요소를 반환한다.

주어진 키와 관련된 값이 객체라면 해당 객체에 대한 참조만 가져오고, 해당 객체에 대한 모든 변경은 `Map` 내에서 효율적으로 수정된다.

```javascript
const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.get("bar"));
// Expected output: "foo"

console.log(map1.get("baz"));
// Expected output: undefined
```

> [대상 소스 코드](./Two-Sum.ts#L35)

`Map` 인스턴스의 `set()` 메서드는 `Map`에서 명시진 키와 값을 추가하거나 갱신한다.

```javascript
const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.get("bar"));
// Expected output: "foo"

console.log(map1.get("baz"));
// Expected output: undefined
```

- reference: [Map - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map>)
- reference: [Map() 생성자 - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map/Map>)
- reference: [Map.prototype.has() - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map/has>)
- reference: [Map.prototype.get() - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map/get>)
- reference: [Map.prototype.set() - MDN](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map/set>)
