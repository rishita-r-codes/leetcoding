/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    let curr = dummy;
    while (list1 && list2) {
        // compares current nodes
        if (list1.val > list2.val) {
            //appends current node of list2 to curr
            curr.next = list2;
            //removes head of list2
            list2 = list2.next
        }
        else {
            curr.next = list1;
            list1 = list1.next;
        }
        curr = curr.next; // shifts pointer
    }
    if (list1) {
        curr.next = list1;
    }
    else {
        curr.next = list2;
    }

    return dummy.next; //returns head as first node is a dummy
};
