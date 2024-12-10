import { Router } from "express";

const todosRouter = Router();
const todos: any = [];
todosRouter.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

export default todosRouter;
