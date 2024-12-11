import { Request, Response, NextFunction, Router } from "express";
import { Todo } from "../models/todo";
const todosRouter = Router();
let todos: Array<Todo> = [{ id: "1", text: "first task" }];

todosRouter.get("/todos", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ todos: todos });
});

todosRouter.post("/todo", (req: Request, res: Response, next: NextFunction) => {
  const todoText: string = req.body.text;
  if (!todoText) {
    res.status(404).json({ message: "Todo text not found" });
  }
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: todoText,
  };
  todos.push(newTodo);
  res.status(201).json({ message: "Added todo", newTodo, todos: todos });
});

todosRouter.put("/todo/:todoId", (req: any, res: any) => {
  const todoId = req.params.todoId;
  const todoIndex = todos.findIndex((t) => {
    t.id === todoId;
  });
  if (todoIndex >= 0) {
    todos[todoIndex].text = req.body.text;
    return res.status(201).json({
      message: "Updated todo",
      updatedTodo: todos[todoIndex],
    });
  }
  res.status(404).json({ message: "error" });
});

todosRouter.delete("/todo/:todoId", (req: any, res: any) => {
  const todoId = req.params.todoId;
  const todoIndex = todos.findIndex((t) => {
    t.id === todoId;
  });
  if (todoIndex >= 0) {
    todos = todos.filter((t) => {
      t.id !== todoId;
    });
    return res.status(201).json({
      message: "Deleted todo",
      deletedTodo: todos[todoIndex],
    });
  }
  res.status(404).json({ message: "error" });
});

export default todosRouter;
