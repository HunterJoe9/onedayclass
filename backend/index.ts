import express, { Express } from "express";

const app : Express = express();
const port : number = +process.env.PORT! || 3010;

app.get('/', (req, res) => {
    res.send("Hello, Express");
});

app.listen(port, () => {
    console.log(`Server is listening on port : ${port}`);
});