class Node{
    constructor(data){
        this.head = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    //-------------Add Method--------------
   add(element){
       let node = new Node(element);
       if(!this.head){
           this.head = node;
       }
       else{
           let current = this.head;
           while(current.next){
               current = current.next;
           }
           current.next = node;
        }
        this.length++;
   }
}
let myLinkedList = new LinkedList();
myLinkedList.add(1);
myLinkedList.add(2);
console.log(myLinkedList);