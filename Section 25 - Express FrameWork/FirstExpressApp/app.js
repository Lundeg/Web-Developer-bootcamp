var express = require("express");
var app  = express();


// get request
app.get("/", function(req,res){
    res.send("Hi there")
});

// get /bye
app.get('/bye', (req,res) => res.send("Good bye"));



app.get("/r/:subname" ,function(req,res){
    var subname1 = req.params.subname;
    console.log(req);
    res.send('Welcome to ' + subname1 + ' subname');
});

app.get('*', (req,res) => res.send("You are star"));

app.listen(3000, () => console.log('Server has started 3000'));