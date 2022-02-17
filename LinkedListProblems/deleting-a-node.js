
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, position) {
    let count = 1;
    let current = head;
    while(count<position){
        current = current.next;
        count++;
    }
    current.next = current.next.next;
    return head;
}

