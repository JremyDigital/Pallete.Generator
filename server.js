require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.listen(port, () => {
    console.log("Running on port", port);
});

app.get("/", (req, res) => {
    res.sendFile("./views/index.html", {root: __dirname});
});