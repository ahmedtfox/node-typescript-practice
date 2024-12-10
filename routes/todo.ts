import { Router } from "express";
import { Todo } from "../models/todo";
const todosRouter = Router();
const todos: Array<Todo> = [{ id: "1", text: "first task" }];

todosRouter.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

todosRouter.post("/", (req, res, next) => {
  const newTodo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };
  todos.push(newTodo);
  res.status(200).json({ todos: todos });
});

export default todosRouter;
