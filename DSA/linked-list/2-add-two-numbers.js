/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var addTwoNumbers = function (l1, l2) {
  let sum = 0;
  let carry = 0;
  let cur1 = l1;
  let cur2 = l2;
  let ans = "";

  while (cur1 !== null || cur2 !== null) {
    let v1 = cur1.val ? cur1.val : 0;
    let v2 = cur2.val ? cur2.val : 0;

    let s = v1 + v2 + carry;

    let newNode = new Node(s % 10);

    if (ans) {
      let prv = "";
      let cur = ans;

      while (cur !== null) {
        prv = cur;
        cur = cur.next;
      }

      prv.next = newNode;
    } else ans = newNode;

    carry = Math.floor(s / 10);

    cur1 = cur1.next;
    cur2 = cur2.next;
  }

  if (carry) {
    let cNode = new Node(carry);
    if (ans) {
      let prv = "";
      let cur = ans;

      while (cur !== null) {
        prv = cur;
        cur = cur.next;
      }

      prv.next = cNode;
    } else ans = cNode;
  }
  return ans;
};
