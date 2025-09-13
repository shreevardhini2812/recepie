import express from "express";
import userRouter from "./src/routes/recepieRouter.js";
import connectDB from "./src/config/db.js";

const app = express();

console.log(app);
const PORT = 8000;

app.use(express.json());

app.use("/api/recepies", userRouter);

app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
    connectDB();
});