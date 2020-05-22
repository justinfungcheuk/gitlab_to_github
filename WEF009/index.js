class Queue{
    constructor(){
        this.stack1 = [];
        this.stack2 = [];
    }
    enqueue(item){
        this.stack1.push(item);
    }
    dequeue(){
        if(this.stack2.length > 0) {
            // something inside stack 2 有野
            return this.stack2.pop();
        }else{ 
            // nothing inside stack 2 無野
            while(this.stack1.length > 0){
                this.stack2.push(this.stack1.pop());
            }
            return this.stack2.pop();
        }
    }
}

const queue = new Queue();
queue.enqueue(123);
queue.enqueue(456);
queue.enqueue(789);
console.log(queue.dequeue());