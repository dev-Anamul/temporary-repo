/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let count = 0;
  let cur = head;

  while (cur !== null) {
    count++;
    cur = cur.next;
  }

  let mid = Math.floor(count / 2) + 1;
  let i = 0;

  let ans = head;
  while (i !== mid) {
    ans = ans.next;
  }

  return ans;
};
