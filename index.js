const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());

const categories = require("./data/categories.json");

app.get("/", (req, res) => {
   res.send("Welcome to my news server");
});
app.get("/category", (req, res) => {
   res.send(categories);
});

app.listen(port, () => {
   console.log(`server running ${port}`);
});
