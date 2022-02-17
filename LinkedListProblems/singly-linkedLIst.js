class LinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    (this.tail = this.head), 
    (this.length = 1);
  }
  append(data){
      const newNode = {
          value: data,
          next : null
      }
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
  }
}

const myLinkedList = new LinkedList(15);
myLinkedList.append(16);
// myLinkedList.append(17);
console.log(myLinkedList);
