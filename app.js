const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
const currentDay = require("./date.js")
const day = currentDay();
const listItems = ["Gym", "Running", "Washing", "Read", "Meet Vlad on airport"];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("list", {currentDate: day, items: listItems});
});

app.post("/", (req, res) => {
    let itm = "";
    itm = req.body.newItem;
    listItems.push(itm);
    res.redirect("/");
});

app.listen(port, () => {
    console.log("Server runing on port 3000!")
});
