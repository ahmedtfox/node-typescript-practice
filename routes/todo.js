"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todosRouter = (0, express_1.Router)();
const todos = [];
todosRouter.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
exports.default = todosRouter;
