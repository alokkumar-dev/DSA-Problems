const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
    let stack = [];
    let curr = head;
    while(curr != null){
        stack.push(curr.data);
        curr = curr.next;
    }
    
    let tmp = head;
    let palind = true;
    while(tmp != null){
        if(tmp.data == stack.pop()){
            palind = true;
            tmp = tmp.next;
        }
        else{
            palind = false;
            tmp = tmp.next;
        }
    }
    return palind;
    
};
