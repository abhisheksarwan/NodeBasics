var express = require("express");
var bodyParser = require('body-parser')
var app = express();

app.set("view engine", "ejs"); //removes the compulsion for writing .ejs
app.use(bodyParser.urlencoded({extended:true}));
var arr =["A", "B", "C"];

//root route
app.get("/", function(req, res){
    res.send("Homepage!");
});

//show friends
app.get("/friends", function(req, res){
    res.render("friends", {friends:arr});
});

//add friends
app.post("/addfriends", function(req, res){
    let newFriend = req.body.friend;
    arr.push(newFriend);
    res.redirect("friends");
});

//open port
app.listen(3000, function(){
    console.log("Server Started.")
});