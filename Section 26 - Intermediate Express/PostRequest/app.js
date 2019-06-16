var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var friends = ["Bat","Bold","Temka","Boloroo"];

app.get("/friends",(req,res)=>{
    res.render("friends",{friends:friends});
})

// post request
app.post("/addfriend",(req,res)=>{
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    //res.send("add friends");
    res.redirect("/friends");
});

app.listen(3000,()=>{console.log("Starting server")});