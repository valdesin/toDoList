const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
const currentDay = require("./date.js")
const day = currentDay();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("list", {currentDate: day});
});

app.listen(port, () => {
    console.log("Server runing on port 3000!")
});
