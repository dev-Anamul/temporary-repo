/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);

one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let prev = head;
  let current = head;
  while (current !== null) {
    if (current.val === val) {
      if (prev) {
        next = current.next;
        prev.next = next;
        current = next;
      } else current = current.next;
    } else {
      prev = current;
      current = current.next;
    }
  }

  return prev;
};

console.log(removeElements(one, 6));
