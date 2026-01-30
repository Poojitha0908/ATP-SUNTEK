// task.js
import { validateTitle, validatePriority, validateDueDate } from './validator.js';
const tasks = [];
let id = 1;
// Add new task
function addTask(title, priority, dueDate) {
  if (!validateTitle(title)) return 'Invalid title';
  if (!validatePriority(priority)) return 'Invalid priority';
  if (!validateDueDate(dueDate)) return 'Invalid due date';
  let task = {
    id: id++,
    title,
    priority,
    dueDate,
    completed: false
  };
  tasks.push(task);
  return 'Task added successfully';
}
// Get all tasks
function getAllTasks() {
  return tasks;
}
// Mark task as complete
function completeTask(taskId) {
  let task = tasks.find(t => t.id === taskId);
  if (!task) return 'Task not found';
  task.completed = true;
  return 'Task completed';
}
export { addTask, getAllTasks, completeTask };