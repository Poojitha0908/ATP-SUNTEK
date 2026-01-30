// app.js
import { addTask, getAllTasks, completeTask } from './task.js';

console.log(addTask('Learn JS', 'high', '2026-02-01'));
console.log(addTask('Practice coding', 'medium', '2026-02-05'));

console.log('All Tasks:', getAllTasks());

console.log(completeTask(1));

console.log('Updated Tasks:', getAllTasks());