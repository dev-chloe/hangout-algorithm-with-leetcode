# 메모 - [Add Binary](https://leetcode.com/problems/add-binary/)

> [대상 소스 코드](./Add-Binary.ts#L21)

`BigInt` 값은 정수여야 하며 BigInts로 변환된다. 부울 값 참은 1n이 되고 거짓은 0n이 된다. 문자열은 정수 리터럴의 소스 텍스트처럼 파싱되므로 선행 및 후행 공백이 있을 수 있으며 숫자의 진수를 나타내는 접두사로 0b, 0o 또는 0x를 붙일 수 있습니다.

> - 0b: 이진수(Binary)
> - 0o: 8진수(Octal)
> - 0x: 16진수(Hexadecimal)

```javascript
const binary = 0b1010n;   // 2진수 (10진수 10)
const octal = 0o12n;      // 8진수 (10진수 10)
const hex = 0xAn;        // 16진수 (10진수 10)

console.log(binary); // 10n
console.log(octal);  // 10n
console.log(hex);    // 10n
```

---

- reference: [BigInt() - MDN](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt>)
