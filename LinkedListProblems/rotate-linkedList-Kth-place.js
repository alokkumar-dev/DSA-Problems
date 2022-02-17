
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var rotateRight = function(head, k) {
 let size = 0;
    let tmp = head;
    let result;
    while(tmp!=null){
        size++;
        tmp = tmp.next;
    }
    k = k%size;
    let p1 = head;
    let p2 = head;
    for(let i=0; i<k; i++){
        p2 = p2.next;
    }
    while(p2.next != null){
        p1 = p1.next;
        p2 = p2.next;
    }
    result = p1.next;
    p1.next = null;
    p2.next = head;
    return result;
};

