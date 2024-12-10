"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todosRouter = (0, express_1.Router)();
const todos = [{ id: "1", text: "first task" }];
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
exports.default = todosRouter;
