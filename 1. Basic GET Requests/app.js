var express = require("express");
var app = express();

//root route
app.get("/", function (req, res) {
    res.send("Welcome to the Home Page!");
});

//posts route
app.get("/posts", function (req, res) {
    res.send("Welcome to the Posts Page!");
});

//default route
app.get("*", function (req, res) {
    res.send("Welcome to the * Page!");
});

//open localhost:3000 after running node app.js
app.listen(3000, function () {
    console.log("Server Started.");
});