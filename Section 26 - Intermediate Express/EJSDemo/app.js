var express = require('express');
var app = express();

// buh huseltend haraarah zuiluudig bagtaana
app.use(express.static("public"));

// view engine
app.set("view engine","ejs");

app.get("/", (req,res)=>{
    //tuhain ejsig ajiluulna
    res.render("home");
    
});

//ejs conditional
app.get("/things/:thing", (req,res)=>{
    // tuhain argument url aar damjina
    var thing = req.params.thing;
    res.render("home",{thingVar: thing});
    
});

//ejs loop 
app.get("/posts",(req,res)=>{
    var posts = [
        {name:"Bat",age:"20"},
        {name:"Zulaa",age:"21"},
        {name:"Michidmaa",age:"20"}
    ];

    res.render("post",{posts:posts});
});

app.listen(3000,() => console.log("Server is listening"));