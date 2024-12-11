import express from "express";
import todo from "./routes/todo";
const app = express();
app.use(express.json());
app.use("/api", todo);
app.listen(3000, () => {
  console.log("listening to port 3000");
});
