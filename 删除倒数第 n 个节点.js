/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// 思路： 借用两个快慢指针，一个先走 n 步，然后一起走直到快指针为null ，这时候慢指针就指向要删除的节点。


// 首先要明确一点的是，删除节点，需要找到该节点的前一个节点，然后修改它的指向
// 这里为了删除头节点，我们还是借用一个虚拟头节点。

// 如果确实定位不到走到那一步了，可以假设删除的是指定位置的节点，比如倒数第一个这种比较确切的值，来调整代码的边界值，比较好。
 var removeNthFromEnd = function(head, n) {

    let phead = new ListNode(0);
    phead.next = head;
    let fast = phead;
    let slow = phead;
    
    // 先让 快的走 n 步
    while (n --) {
        fast = fast.next;
    }

    // 接着，两个一起走
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    // 得到要删除 slow 下一个节点
    slow.next = slow.next.next;

    return phead.next;


    
};