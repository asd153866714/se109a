// 用 Linked List 實作 Queue
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor () {
        this.front = null
        this.rear = null
        this.size = 0
    }

    enqueue(value) {
        let newNode = new Node(value)
        if (!this.front) {
            this.front = newNode
            this.rear = newNode
        } else {
            this.rear.next = newNode
            this.rear = newNode
        }
        return this.size ++
    }

    dequeue() {
        if (!this.front) {
            console.log("The queue is empty")
            return null
        }
        let temp = this.front
        if (this.front === this.rear) {
            this.rear = null
        }
        this.front = this.front.next
        this.size -- 
        console.log('The value being deleted:', temp.value)
        return temp.value
    }

    display() {
        let current = this.front,
            str = '';
        while (current) {
            str += current.value + ' -> '
            current = current.next
        }
        console.log(`The size of Queue: ${this.size}`)
        console.log(str)
        return str
    }
}

let myQueue = new Queue()
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.display()
myQueue.dequeue()
myQueue.display()
