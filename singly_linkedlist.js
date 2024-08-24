
class Node {
    constructor(data) {
        this.data = data; // The data or value of node
        this.next = null; // Pointer to the next node
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }


    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            // if the list is empty, new node will becomes head
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }


    remove(data) {
        if (!this.head) {
            return;
        }

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let prev = null;

        while (current && current.data != data) {
            prev = current;
            current = current.next;
        }

        if(current) {
            prev.next = current.next;
        }

    }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

console.log('List after adding nodes::');
list.printList();

list.remove(10);
console.log('list after removing 10');
list.printList();

list.remove(30);
console.log('list after removing 30');
list.printList();
