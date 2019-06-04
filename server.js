const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "views")));
app.get("/", async (req, res) => {
  res.render("index");
});

app.listen(5000, () => console.log(`Listening on port 5000...`));
