require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("iam Ajmal");
});

app.get("/login", (req, res) => {
  res.send("its from login page");
});

app.get("/youtube", (req, res) => {
  res.send(`<h1 style="color: yellow">you are in youtube.....</h1>`);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
