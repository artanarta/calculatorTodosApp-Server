const { Router } = require("express");
const router = Router();
const {
  getTodos,
  postTodo,
  deleteTodo,
  getTodoById,
  updateTodo,
  updateStatusTodo
} = require("../controllers/todos");

router.get('/todos', getTodos);
router.get('/todo/:id', getTodoById);
router.patch('/todo/:id', updateTodo);
router.patch('/todoStatus/:id', updateStatusTodo);
router.post('/todo', postTodo);
router.delete("/todo/:id", deleteTodo);
module.exports = router;
