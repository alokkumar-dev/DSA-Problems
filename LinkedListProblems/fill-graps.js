const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var fillGaps = function (head) {
    if(head==null){
       return null;
   }
   let curr=head;
   let prev=null;
   while(curr.next != null){
       prev=curr;
       curr=curr.next;
       
       let diff=curr.data-prev.data;
       if(diff!=1){
           for(let  i=0;i<diff-1;i++){
               let newNode=new LinkedListNode(prev.data+1);
               prev.next=newNode;
               newNode.next=curr;
               prev=newNode;
           }
       }
   }
   return head;
};