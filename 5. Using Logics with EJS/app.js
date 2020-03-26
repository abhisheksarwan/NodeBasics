var express = require("express");
var ejs = require("ejs");
var app = express();


//root route
app.get("/", function (req, res) {
    res.render("home.ejs");
});

//root route
app.get("/count/:variable", function (req, res) {
    let firstVar = req.params.variable;
    res.render("count.ejs",{count:firstVar});
});

//open localhost:3000 after running node app.js
app.listen(3000, function () {
    console.log("Server Started.");
});