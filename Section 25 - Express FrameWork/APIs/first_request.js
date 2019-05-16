var request = require('request');
request('http://dummy.restapiexample.com/api/v1/employees', function(error,response,body){
    if(!error && response.statusCode == 200){
        var parseData = JSON.parse(body)
        console.log(parseData[0].id + parseData[0].employee_name);
    }
    else{
        console.log(error);
    }
});
