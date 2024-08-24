class Queue {

    constructor() {
        this.queue = [];
        this.frontIndx = 0; // Tracks the front of the queue
        this.rearIndex = 0; // Tracks the rear of the queue
    }

    enqueue(element) {
        this.queue[this.rearIndex] = element;
        this.rearIndex++;
    }

    dequeue() {
        if(this.frontIndx === this.rearIndex) {
            return "Queue is empty"
        }

        const dequeuedElement  = this.queue[this.frontIndx];
        this.frontIndx ++;
        return dequeuedElement;
    }

    print() {
        if(this.rearIndex === this.frontIndx) {
            console.log("Queue is empty");
        } else {
            for(let i = this.frontIndx ; i< this.rearIndex; i++) {
                console.log(this.queue[i]);
            }
        }
    }
}


const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();

queue.dequeue()
queue.print();