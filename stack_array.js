
class Stack {

    constructor() {
        this.stack = [];
        this.top = -1; //Ininitalize top to -1 indicate that stack is empty
    }


    push(element) {
        this.top += 1;
        this.stack[this.top] = element;
    }

    pop() {
        if(this.top === -1) {
            return 'Stack is empty';
        }
        const poppedElement =  this.stack[this.top]; 
        this.top -=1;
        return poppedElement;
    }

    isEmpty() {
        return this.top === -1;
    }

    size() {
        return this.top +1;
    }

    print() {
        if(this.isEmpty() ) {
            console.log('Stack is empty');
        } else {
            console.log(this.stack.slice(0, this.top+1).toString());
        }
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size())


