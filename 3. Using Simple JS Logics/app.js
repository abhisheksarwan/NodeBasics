var express = require("express");
var app = express();

//root route
app.get("/", function (req, res) {
    res.send("Welcome to the Home Page!");
});

//if-else
app.get("/age/:variable", function (req, res) {
    let firstVar = req.params.variable;
    if(firstVar >= 18){
        res.send("You're a teenager");
    }
    else{
        res.send("You're not a teenager");
    }
});

//for loop
app.get("/count/:variable", function (req, res) {
    let firstVar = req.params.variable;
    let template = `<script>for(let i=1; i<=${firstVar}; i++){document.write(i + '<br/>');}</script>`; //template string
    res.send(template)
});

//open localhost:3000 after running node app.js
app.listen(3000, function () {
    console.log("Server Started.");
});