var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

var campgrounds = [
    {name:"Salmon Greek", image:"https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg"},
    {name:"Granita Hill", image:"https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
    {name:"Mountain Goat's Rest", image:"https://farm8.staticflickr.com/7205/7121863467_eb0aa64193.jpg"},
    {name:"Salmon Greek", image:"https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg"},
    {name:"Granita Hill", image:"https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
    {name:"Mountain Goat's Rest", image:"https://farm8.staticflickr.com/7205/7121863467_eb0aa64193.jpg"},
    {name:"Salmon Greek", image:"https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg"},
    {name:"Granita Hill", image:"https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
    {name:"Mountain Goat's Rest", image:"https://farm8.staticflickr.com/7205/7121863467_eb0aa64193.jpg"}
];

app.get("/",(req,res)=>{
    res.render("landing");
})

app.get("/campgrounds", (req,res)=>{
        res.render("campgrounds", {campgrounds:campgrounds});

})

app.post("/campgrounds", (req,res)=>{
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image};
    campgrounds.push(newCampground);

    res.redirect("/campgrounds");
})

app.get("/campgrounds/new", (req,res)=>{
    res.render("new");
})

app.listen(3000,()=>{console.log("The YelCamp server has started")});
