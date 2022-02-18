
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
function deleteNode(node){
   if(node==null){          // if(!node)
       return;
   }
   
   node.data = node.next.data;
   node.next = node.next.next;
}
