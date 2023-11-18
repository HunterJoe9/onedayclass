import express, { Express } from "express";
import cors from "cors";

import userRouter from "./routes/user";

const app : Express = express();
const port : number = +process.env.PORT! || 3020;

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(
    cors({
        origin: process.env.FRONT_URL,
        credentials : true,
    })
);

app.use("/user", userRouter);

app.get('/', (req, res) => {
    res.send("Hello, Express!!");
});

app.listen(port, () => {
    console.log(`Server is listening on port : ${port}`);
});