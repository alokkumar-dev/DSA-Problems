
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
    if(head == null){
        let node = new LinkedListNode(data);
        head = node;
        return head;
    }
    let temp =  head;
    while(temp.next != null){
        temp = temp.next;
    }
    let newNode =new LinkedListNode(data);
    temp.next = newNode;
    
    return head;
}
var myLinkedList = new LinkedListNode(1)
console.log(myLinkedList);

