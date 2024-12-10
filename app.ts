import express from "express";
import todo from "./routes/todo";
const app = express();
app.use(express.json());
app.use(todo);
app.listen(3000);
