const Queue = require('./queue');

var q = new Queue();
var val = 100;
q.enqueue(val++);
q.enqueue(val++);
q.enqueue(val++);
q.enqueue(val++);
q.enqueue(val++);
q.enqueue(val++);
console.log(q.dequeue(val++));
console.log(q.dequeue(val++));
console.log(q.dequeue(val++));
console.log(q.dequeue(val++));
console.log(q.dequeue(val++));
console.log(q.dequeue(val++));
console.log(q.dequeue(val++));
console.log(q.dequeue(val++));
console.log(q.dequeue(val++));

q.enqueue(val++);
q.enqueue(val++);
q.enqueue(val++);
q.enqueue(val++);
console.log(q.dequeue(val++));
q.enqueue(val++);
q.enqueue(val++);
console.log(q.dequeue(val++));
q.enqueue(val++);
q.enqueue(val++);
console.log(q.dequeue(val++));