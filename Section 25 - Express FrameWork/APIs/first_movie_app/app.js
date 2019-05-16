var express = require('express');
var app = express();
var request = require('request');

app.get('/results', (req,res) =>{
    request('http://omdbapi.com/?s=california', function(error,response,body){
    if(!error && response.statusCode == 200){
        var parseData = JSON.parse(body)
        res.send(parseData);
        }
    });
});


app.listen(3000, () => console.log('Started has server'));