// validator.js
// Validate task title (not empty, min 3 chars)
function validateTitle(title) {
  if (title && title.trim().length >= 3) {
    return true;
  }
  return false;
}
// Validate priority (low, medium, high)
function validatePriority(priority) {
  let allowed = ['low', 'medium', 'high'];
  return allowed.includes(priority);
}
// Validate due date (future date)
function validateDueDate(date) {
  let today = new Date();
  let dueDate = new Date(date);

  if (dueDate > today) {
    return true;
  }
  return false;
}
export { validateTitle, validatePriority, validateDueDate };