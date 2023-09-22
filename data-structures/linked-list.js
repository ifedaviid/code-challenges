/*

This is an implementation of a linked list.

*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next; //node
  }
}

class LinkedList {
  // When a new linked list is created, head & tail start empty (i.e. null)
  constructor(value = null) {
    this.head = new Node(value, null);
    this.tail = this.head;
  }

  // Ensure the first added node is the head and tail of the list.
  add() {}

  addToHead(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    if (!this.getTail()) {
      this.tail = newNode;
    }
  }

  addToTail(value) {
    while (this.head.next !== null) {
      //   this.head.value = value;
      //   this.tail = null;
    }
  }

  get() {
    return this;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  delete() {}
  deleteHead() {
    if (this.head) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
  }
  deleteTail() {}

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }

  getSize() {}
}

let node = new Node(3);
let myLinkedList = new LinkedList(33);
console.log(myLinkedList);
