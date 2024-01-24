/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head = null;
  let tail = null;

  let cur1 = list1;
  let cur2 = list2;

  while (cur1 !== null && cur2 !== null) {
    if (cur1.val <= cur2.val) {
      if (!head) {
        head = cur1;
        tail = cur1;
      } else {
        tail.next = cur1;
        tail = cur1;
      }
      cur1 = cur1.next;
    } else {
      if (!head) {
        head = cur2;
        tail = cur2;
      } else {
        tail.next = cur2;
        tail = cur2;
      }
      cur2 = cur2.next;
    }
  }

  if (cur1) tail.next = cur1;
  else if (cur2) tail.next = cur2;

  return head;
};
