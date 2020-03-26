var express = require("express");
var app = express();

app.use(express.static("public")); //use public folder

//root route
app.get("/", function(req, res){
    res.render("home.ejs");
});

//open port
app.listen(3000, function(){
    console.log("Server Started.")
});