const express = require("express");
const PORT = 5000;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(express.static("public"));

app.listen(5000, console.log("Port running on 5000"));
