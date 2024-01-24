/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast?.next) {
    slow = slow && slow.next;
    fast = fast.next.next;
  }
  return slow;
}
