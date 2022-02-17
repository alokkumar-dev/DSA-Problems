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
    insertAt(element, index){
        if(index>this.length || index<0 && this.length){
            return false;
        }
        
    }
}