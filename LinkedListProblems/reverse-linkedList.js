
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below

function reverse(head) {
    let prev = null;
    let curr = head;
    let next = curr.next;
    while(curr.next != null){
        curr.next = prev;
        prev = curr;
        curr = next;
        next = curr.next;
    }
    curr.next = prev;
    return curr;
}

