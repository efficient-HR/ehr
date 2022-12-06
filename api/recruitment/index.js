const express = require('express')
const app = express();
const cors = require("cors")
const port = process.env.port | 3000;

app.use(cors());

app.use(express.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.send("hellooooooooo");
})

app.listen(3000, () => {
    console.log("listening at 300");
})