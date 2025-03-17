/**
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 *
 * Example 1:
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 * Example 2:
 * Input: list1 = [], list2 = []
 * Output: []
 *
 * Example 3:
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    /** this.val = val === undefined ? 0 : val; */
    this.val = val ?? 0;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // 더미 노드를 생성하여 결과 리스트의 헤드로 사용
  const dummy: ListNode = new ListNode(0);
  let current: ListNode = dummy;

  // 두 리스트를 순회하면서 값을 비교하고 병합
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // 남은 노드들을 결과 리스트에 연결
  if (list1 !== null) {
    current.next = list1;
  }
  if (list2 !== null) {
    current.next = list2;
  }

  // 더미 노드의 다음 노드가 실제 병합된 리스트의 헤드
  return dummy.next;
}

function mergeTwoListsWithRecursion(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // 하나의 리스트가 끝났다면, 다른 리스트를 반환
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }

  // 현재 노드 값 저장
  const head1 = list1.val;
  const head2 = list2.val;

  const next1 = list1.next;
  const next2 = list2.next;

  // head1이 더 작다면, head1을 선택하고 next1과 list2를 재귀 호출
  // 새 ListNode를 생성하면서 다음 노드를 mergeTwoListsWithRecursion(next1, list2)로 연결
  if (head1 < head2) {
    const choosedSmall = head1;
    const attachedNode = mergeTwoListsWithRecursion(next1, list2);
    return new ListNode(choosedSmall, attachedNode);
  }

  // head2가 더 작다면 head2를 선택하고, next2와 list1을 재귀 호출
  //새로운 ListNode를 생성하면서 다음 노드를 mergeTwoListsWithRecursion(next2, list1)로 연결
  if (head1 > head2) {
    const choosedSmall = head2;
    const attachedNode = mergeTwoListsWithRecursion(next2, list1);
    return new ListNode(choosedSmall, attachedNode);
  }

  // 값이 같은 경우
  // head1 === head2이면, 두 개의 값을 순서대로 넣어야 함
  // head1을 선택한 후, 다시 head2를 감싸면서 재귀적으로 next1과 next2를 호출
  // new ListNode(head1, new ListNode(head2, attachedNoede)) 로 두 개의 노드를 감싸서 반환
  const attachedNoede = mergeTwoListsWithRecursion(next1, next2);

  return new ListNode(head1, new ListNode(head2, attachedNoede));
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
  fn: (l1: ListNode | null, l2: ListNode | null) => ListNode | null, // 리스트 병합 함수
  arr1: number[], // 첫 번째 배열
  arr2: number[] // 두 번째 배열
): number[] {
  return listToArray(fn(arrayToList(arr1), arrayToList(arr2))); // 변환 후 실행 및 변환
}

console.log("---------------------");
console.log("1-1", processLists(mergeTwoLists, [1, 2, 4], [1, 3, 4])); // [1,1,2,3,4,4]
console.log("1-2", processLists(mergeTwoLists, [], [])); // []
console.log("1-3", processLists(mergeTwoLists, [], [0])); // [0]
console.log("---------------------");
console.log(
  "2-1",
  processLists(mergeTwoListsWithRecursion, [1, 2, 4], [1, 3, 4])
); // [1,1,2,3,4,4]
console.log("2-2", processLists(mergeTwoListsWithRecursion, [], [])); // []
console.log("2-3", processLists(mergeTwoListsWithRecursion, [], [0])); // [0]
console.log("---------------------");

export { mergeTwoLists, mergeTwoListsWithRecursion, processLists };
