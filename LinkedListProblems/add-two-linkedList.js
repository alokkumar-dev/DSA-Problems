const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var addTwoNumbers = function (l1, l2) {
     let head = null;
    let tmp = null;

    let carry = 0;

    while (l1 !== null || l2 !== null) {
        
        let sum = carry;
        
        if (l1 != null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 != null) {
            sum += l2.val;
            l2 = l2.next;
        }
       
        let node = new ListNode(Math.floor(sum) % 10);
        
        carry = Math.floor(sum / 10);
       
        if (tmp == null) {
            tmp = head = node;
        }
        else {
            tmp.next = node;
            tmp = tmp.next;
        }
    }
    
    if (carry > 0) {
        tmp.next = new ListNode(carry);
    }
    return head;
};