var express = require('express');
var app = express();

// undsen get huseltin heseg
app.get('/', (req,res) => res.send('Hi there, welcome to my assignment'));

// zaaj ogson heseguud
app.get('/speak/:animal', function(req,res){
    var sounds = {
        dog: 'Woof Woof!',
        cow: 'Moo',
        pig: 'Oink!' 
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says " + sound);
});

// subname-tei heseguud
app.get('/repeat/:subname/:count', function(req,res) {
    var count = Number(req.params.count);
    var name = req.params.subname;
    var result = "";
    for(var i=0;i<count;i++){
        result += name + " ";
    }
    res.send(result);
});

// baihgui get huselt 
app.get('*', (req,res) => res.send('Sorry, Page not found...What are doing with your life'));

app.listen(8081, () => console.log("started has server"));