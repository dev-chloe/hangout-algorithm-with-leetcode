/**
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 *
 * Example 1:
 * nput: head = [1,1,2]
 * Output: [1,2]
 *
 * Example 2:
 * Input: head = [1,1,2,3,3]
 * Output: [1,2,3]
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let current = head;

  while (current?.next) {
    if (current.val === current.next.val) {
      // 중복 제거: 다음 노드를 건너뛰기
      current.next = current.next.next;
    } else {
      // 다음 노드로 이동
      current = current.next;
    }
  }

  return head;
}

// 배열을 ListNode로 변환하는 함수
function arrayToList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null; // 배열이 비어 있으면 null 반환

  const head = new ListNode(arr[0]); // 첫 번째 요소로 리스트의 head 생성
  let current = head; // 현재 노드를 head로 설정

  for (let i = 1; i < arr.length; i++) {
    // 배열의 나머지 요소 순회
    current.next = new ListNode(arr[i]); // 새 노드를 만들고 현재 노드의 next로 연결
    current = current.next; // 현재 노드를 새로 추가한 노드로 업데이트
  }

  return head; // 변환된 연결 리스트의 head 반환
}

// 출력용
function listToArray(head: ListNode | null): number[] {
  const result: number[] = []; // 결과를 저장할 배열

  while (head !== null) {
    // 연결 리스트를 순회
    result.push(head.val); // 현재 노드의 값을 배열에 추가
    head = head.next; // 다음 노드로 이동
  }

  return result; // 변환된 배열 반환
}

function processLists(
  fn: (l1: ListNode | null) => ListNode | null, // 리스트 병합 함수
  arr1: number[] // 첫 번째 배열
): number[] {
  return listToArray(fn(arrayToList(arr1))); // 변환 후 실행 및 변환
}

console.log("---------------------");
console.log("1-1", processLists(deleteDuplicates, [1, 1, 2])); // [1,2]
console.log("1-2", processLists(deleteDuplicates, [1, 1, 2, 3, 3])); // [1,2,3]
console.log("---------------------");

export { deleteDuplicates, processLists };
