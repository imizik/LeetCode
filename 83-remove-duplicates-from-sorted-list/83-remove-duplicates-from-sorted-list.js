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
var deleteDuplicates = function(head) {
    let hash = {}
    
    let dummy = head
    let temp = null
    while (head) {
        if (hash[head.val]) {
            temp.next = head.next
        } else {
            hash[head.val] = true   
                    temp = head

        }
        head = head.next
    }
    return dummy
};