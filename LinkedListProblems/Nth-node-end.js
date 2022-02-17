const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

function nth_node(head, n) {
  let length = 0;
  let tmp = head;
  while (tmp != null) {
    tmp = tmp.next;
    length++;
  }
  if (length < n) {
    return;
  }
  tmp = head;
  for (i = 1; i < length - n + 1; i++) {
    tmp = tmp.next;
  }
  return tmp.data;
}
