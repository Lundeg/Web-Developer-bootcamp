var express = require('express');
var app = express();

app.use(express.static('public'));
app.set("view engine","ejs");

app.get('/home/:things', function(req,res){ 
    var thing = req.params.things;
    res.render("home",{name:thing});
});


app.get('/post', function(req,res){
    var posts = [
        {title: 'Basketball', author:'Lundeg'},
        {title: 'Football', author:'Temuujin'},
        {title: 'TableTennis', author:'BolorChuluun'}
    ]
    res.render("post",{posts: posts});
})

app.listen(3000,() => console.log("Server is listening"));