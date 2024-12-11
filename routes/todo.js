"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todosRouter = (0, express_1.Router)();
let todos = [{ id: "1", text: "first task" }];
todosRouter.get("/todos", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
todosRouter.post("/todo", (req, res, next) => {
    const todoText = req.body.text;
    if (!todoText) {
        res.status(404).json({ message: "Todo text not found" });
    }
    const newTodo = {
        id: new Date().toISOString().split(":")[0],
        text: todoText,
    };
    todos.push(newTodo);
    res.status(201).json({ message: "Added todo", newTodo, todos: todos });
});
todosRouter.put("/todo/:todoId", (req, res) => {
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
todosRouter.delete("/todo/:todoId", (req, res) => {
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
exports.default = todosRouter;
