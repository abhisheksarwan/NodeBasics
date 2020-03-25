var express = require("express");
var app = express();

//root route
app.get("/", function (req, res) {
    res.send("Welcome to the Home Page!");
});

//posts route and put any name after /posts
app.get("/posts/:postname", function (req, res) {
    let postName = req.params.postname;
    res.send("You visited post " + postName);
});

//open localhost:3000 after running node app.js
app.listen(3000, function () {
    console.log("Server Started.");
});